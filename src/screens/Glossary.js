import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PageBody from '../util/constants/PageBody'
import glossaryWords from '../util/constants/glossaryWords'
import CustomText from "../components/CustomText"
import CustomInput from "../components/CustomInput"
import Word from '../components/Word'

const Glossary = () => {
  const [search, setSearch] = useState('')
  const filteredWords = glossaryWords.filter(item => 
    item.word.toLowerCase().startsWith(search.toLowerCase())
  )
  return (
    <PageBody white>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '6%' }}>
          <CustomInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="Search"
            maxLength={50}
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

