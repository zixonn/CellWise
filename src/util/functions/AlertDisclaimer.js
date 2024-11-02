import { Alert } from 'react-native';

const DisclaimerAlert = () => {
    Alert.alert(
        "Disclaimer", 
        "Please read this disclaimer carefully before asking for advice or assistance.\n\n" +
        "All information provided is only for educational and informational purposes, specifically for sickle cell anemia. " +
        "It is not a substitute for professional advice. We strongly recommend seeking medical advice from a qualified and licensed physician. " +
        "Any action taken based on the information presented is at your own risk.\n\n" +
        "While we strive to provide accurate information, we cannot guarantee any mistakes or errors. However, we have taken steps to verify the information to the best of our abilities.\n\n" +
        "We reserve the right to change this policy at any given time and will promptly update it. To stay informed about the latest changes, please visit ascaa.org."
    );
};

export default DisclaimerAlert;
