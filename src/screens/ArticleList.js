import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageBody from '../constants/PageBody';

const ArticleList = ({ route, navigation }) => {
  
  const { articleCount } = route.params;

  return (
    <PageBody>
      <Text>{`Number of articles: ${articleCount}`}</Text>
    </PageBody>
  );
};

export default ArticleList;

const styles = StyleSheet.create({});
