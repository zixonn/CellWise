import { StyleSheet, View, FlatList, ScrollView, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import PageBody from '../util/constants/PageBody'
import CustomText from "../components/CustomText"
import CustomInput from "../components/CustomInput"
import Word from '../components/Word'
import glossaryWords from '../util/constants/glossaryWords'

const Glossary = () => {
  const [search, setSearch] = useState('')

  const filteredWords = glossaryWords.filter(item => 
    item.word.toLowerCase().startsWith(search.toLowerCase())
  )

  return (
    <PageBody>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '6%' }}>
          <CustomText color="gray" fontFamily={"Rubik-SemiBold"} fontSize={"small"} textAlign={"left"} width="80%">Search Glossary</CustomText>
          <CustomInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="Enter Word"
            maxLength={50}
            padding="4%"
            width="80%"
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            {filteredWords.map(({ word, def }, index) => (
              <Word key={`${word}-${index}`} term={word} def={def} />
            ))}
              <View style={{ paddingBottom: "50%" }} />
          </ScrollView>
        </View>
      </View>
    </PageBody>
  )
}

export default Glossary

const styles = StyleSheet.create({})

