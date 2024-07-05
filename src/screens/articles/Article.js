import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import PageBody from '../../util/constants/PageBody'
import CustomText from '../../components/CustomText';
import { findArticle } from '../../util/functions/ArticleLoader';

const Article = ({route}) => {
    
  const { articleTitle } = route.params;
  let ArticleComponent = findArticle(articleTitle);

  return (
    <PageBody white>
      <ScrollView style = {{width:"100%"}} contentContainerStyle = {{flexGrow:1, alignItems:"center"}}>
        <CustomText margin = {"10%"} width={"90%"} fontFamily={"Rubik-Regular"} color = {"gray"} >
          {ArticleComponent ? <ArticleComponent /> : null}
        </CustomText>
      </ScrollView>
    </PageBody>
  )
}

export default Article

const styles = StyleSheet.create({})