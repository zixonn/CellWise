import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [regError, setRegError] = useState("");

  useEffect(() => {
    if (loading) {
      setAuthError(null);
      setRegError(null);
    }
  }, [loading]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const getErrorMessage = (error) => {
    const msg = error.message;
    if (msg.includes('(auth/invalid-email)')) {
      return "Error: Email is invalid";
    }
    if (msg.includes('(auth/invalid-credential)')) {
      return "Error: Password is invalid or account doesn't exist";
    }
    if (msg.includes('(auth/too-many-requests)')) {
      return "Access to this account has been temporarily disabled";
    }
    return 'An unknown error occurred';
  };

  const getRegError = (error) => {
    const msg = error.message;
    if (msg.includes('(auth/invalid-email)')) {
      return "Error: Please enter a valid email";
    }
    if (msg.includes('(auth/weak-password)')) {
      return "Error: Password should be 6+ characters";
    }
    if (msg.includes('(auth/too-many-requests)')) {
      return "Access to this account has been temporarily disabled";
    }
    if (msg.includes('(auth/email-already-in-use)')) {
      return "Error: Email is in use";
    }
    return 'An unknown error occurred';
  };

  const logInUser = async (email, password, navFunc) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navFunc();
    } catch (error) {
      setAuthError(getErrorMessage(error));
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (firstName, lastName, email, password, navFunc) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        userUID: user.uid,
        logs: []
      });
      setUser(user);
      navFunc();
    } catch (error) {
      setRegError(getRegError(error));
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logOutUser = async (navFunc) => {
    setLoading(true);
    try {
      await signOut(auth);
      console.log("Signed out!");
      setUser(null);
      navFunc();
    } catch (error) {
      console.log("Sign out error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, logInUser, registerUser, authError, regError, setRegError, logOutUser, setAuthError }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
