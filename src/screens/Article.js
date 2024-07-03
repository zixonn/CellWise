import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageBody from '../constants/PageBody'
import CustomText from '../components/CustomText';

const Article = ({route}) => {
    
  const { articleTitle } = route.params;
  return (
    <PageBody white>
      <ScrollView style = {{width:"100%"}} contentContainerStyle = {{flexGrow:1, alignItems:"center"}}>
        <CustomText margin = {"8%"} width={"90%"} fontFamily={"Rubik-Regular"} color = {"gray"} >
        <CustomText color = "black" fontFamily = "Rubik-SemiBold" fontSize="small" width={"100%"}>Origins</CustomText>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        Sickle Cell Disease (SCD) is a genetic blood disorder characterized by abnormal hemoglobin, the protein in red blood cells responsible for
        transporting oxygen throughout the body. This condition primarily affects individuals of African, Mediterranean, Middle Eastern, and Indian 
        descent. The genetic mutation responsible for SCD causes red blood cells to become rigid and crescent-shaped under certain conditions, impairing 
        their ability to flow smoothly through blood vessels. This abnormal shape leads to episodes of intense pain, known as pain crises, as well as
        chronic anemia, fatigue, and damage to vital organs over time.
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        There are several types of SCD, depending on the specific genetic mutations inherited. The most common and severe form is sickle cell anemia
        (HbSS), where individuals inherit two copies of the sickle hemoglobin gene. Other forms include HbSC disease and HbS beta thalassemia, which 
        vary in terms of symptoms and severity but share the characteristic of abnormal hemoglobin affecting red blood cell function.
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        Managing SCD involves a comprehensive approach to alleviate symptoms, prevent complications, and improve quality of life. Treatment 
        strategies often include pain management during crises, medications to reduce the risk of complications such as infections, and regular
        blood transfusions to improve oxygen delivery and reduce organ damage. Hydroxyurea, a medication that increases fetal hemoglobin
        production, has also shown effectiveness in reducing the frequency of pain crises in some patients.
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        <CustomText color = "black" fontFamily = "Rubik-SemiBold" fontSize="small"  width={"100%"}>The Future</CustomText>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        In recent years, advances in medical research have provided promising avenues for treatment and potential cures. Gene therapy and bone
        marrow transplantation, which can replace defective stem cells with healthy ones, offer hope for a cure by addressing the genetic root 
        of the disease. These treatments, however, come with challenges such as finding suitable donors and managing potential complications.
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        Overall, while Sickle Cell Disease presents significant challenges, ongoing research and advancements in medical care offer hope for 
        improved outcomes and, ultimately, a cure. Increased awareness, early diagnosis, and access to comprehensive care remain essential in 
        addressing the complexities of this inherited blood disorder and enhancing the lives of individuals living with SCD worldwide.
        </CustomText>
      </ScrollView>
    </PageBody>
  )
}

export default Article

const styles = StyleSheet.create({})