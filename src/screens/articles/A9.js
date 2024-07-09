import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import Source from '../../components/Source';

const A9 = () => {
  return (
    <>
      <CustomText margin="7%" width="90%" fontFamily="Rubik-Regular" color="gray">
        Follow these steps to help relieve symptoms and help you manage your condition at home.
        <Header newSection={true}>Receive routine follow-up care</Header>
        ● See your healthcare provider regularly. Most people who have sickle cell disease should see their provider every 3 to 12 months, depending on their age and type of sickle cell.
        {'\n'}
        ● Get regular vaccines, including a flu shot every year, and the COVID-19 vaccine. There are also routine immunizations to cover the higher risks of sickle cell disease, such as pneumonia and meningococcal vaccines. Follow these guidelinesexternal link even if you or your child is still taking penicillin.
        {'\n'}
        ● Take hydroxyurea and other medicines recommended by your healthcare provider on a regular basis as prescribed. Although pregnant individuals should not take hydroxyurea, follow the ongoing medication advice from your healthcare provider for improved quality of life.
        {'\n'}
        ● Ask your healthcare team to check your blood pressure at each visit, and ask what your numbers mean for you — and how to control your blood pressure if it’s consistently higher than 130/80 mm Hg.
        <Header newSection={true}>Learn what to do in a pain crisis</Header>
        ● Establish a pain action plan with your healthcare provider ahead of time.
        {'\n'}
        ● When an acute crisis is just starting, drink lots of fluids and take a nonsteroidal anti-inflammatory drug (NSAID), such as ibuprofen. If you have kidney problems, acetaminophen is often preferred. Also apply heat to the area with a heating pad or compress.
        {'\n'}
        ● If you cannot manage the pain at home, go to a sickle cell disease day hospital or outpatient unit or an emergency room to receive additional, stronger medicines, and IV fluids. You may need to be admitted to the hospital to fully control an acute pain crisis. You may be able to return home once your pain is under better control.
        <Header newSection={true}>Adopt a healthy lifestyle</Header>
        ● Manage stress: Learning how to manage stress, relax, and cope with problems can improve your emotional and physical health.     {'\n'}
        ● Get enough good quality sleep: Not getting enough good quality sleep over time can lead to serious physical and mental health problems. 
        The recommended amount of sleep for adults is 7 to 9 hours a day.        {'\n'}
        ● Get regular physical activity: Regular physical activity can help manage risk factors for heart disease such as 
        high blood cholesterol, high blood pressure, and overweight and obesity. Before starting any exercise program, ask about what level 
        of physical activity is right for you      {'\n'}
        ● Choose heart-healthy foods: Heart-healthy eating may include the DASH (Dietary Approaches to Stop Hypertension) eating plan. 
        A heart-healthy eating plan includes fruits, vegetables, and whole grains and limits saturated fats, sodium (salt), 
        added sugars, and alcohol.{'\n'}
        ● Quit smoking: For information and support to quit smoking or vaping, visit Smoking and Your Heart and Your Guide to a Healthy Heart, 
        or call the National Cancer Institute's Smoking Quitline at 1-877-44U-QUIT (1-877-448-7848).     
        <Header newSection={true}>Prevent problems over your or your child’s lifetime</Header>
        ●  Avoid situations that may set off a crisis. Extreme heat or cold, as well as sudden changes in temperature, are often triggers. When going swimming, ease into the water rather than jumping right in. Both adults and children should also avoid dehydration and vitamin deficiencies.
        {'\n'}
        ● Do not travel in an aircraft cabin that is unpressurized.
        {'\n'}
        ● If you experience priapism (a prolonged, painful erection), you may be able to relieve your symptoms by doing light exercise, emptying your bladder by urinating, drinking more fluids, and taking medicine recommended by your healthcare provider.
        {'\n'}
        ● If your child attends day care, preschool, or school, speak to their teacher about the disease. Teachers need to know what to watch for and how to accommodate your child.
        {'\n'}
        ● Learn how to palpate (feel) your child’s spleen. Because of the risk of splenic sequestration crisis, caretakers should learn how to palpate a child’s spleen. They should try to feel for the spleen daily and more often when the child is ill. If the spleen feels larger than usual, they should call the care provider.
        {'\n'}
        ● Take care of your mental health. Talk to your family and friends about how you are feeling. Talk to your provider if you have feelings of depression or anxiety. Supportive counseling and, sometimes, antidepressant medicines may help.
        <Source>
        Source: National Heart, Lung, and Blood Institute; National Institutes of Health; U.S. Department of Health and Human Services.
        </Source>
      </CustomText>
    </>
  );
}

export default A9

const styles = StyleSheet.create({})