import React from 'react'
import PageBody from '../util/constants/PageBody'
import { ScrollView} from 'react-native'
import { findArticle } from '../util/functions/ArticleLoader';

const Article = ({route}) => {
  const { articleTitle } = route.params;
  let ArticleComponent = findArticle(articleTitle);
  return (
    <PageBody white>
      <ScrollView style = {{width:"100%"}} contentContainerStyle = {{flexGrow:1, alignItems:"center"}}>
          {ArticleComponent ? <ArticleComponent /> : null}
      </ScrollView>
    </PageBody>
  )
}

export default Article

