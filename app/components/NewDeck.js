import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styled from 'styled-components/native'

import { handleCreateDeck } from '../actions/decks'
import { styles } from '../common'
import { createUuid } from '../utils'

const DeckHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
`

const DeckNameInput = styled.TextInput`
  height: 40px;
  background-color: white;
  border-color: gray;
  border-width: 1px;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`

const NewDeck = ({ navigation }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const createDeck = () => {
    if (value.trim().length === 0) {
      Alert.alert('Unable to create deck', 'No Title provided')
    } else {
      const deckId = createUuid()
      dispatch(handleCreateDeck(deckId, value))
      setValue('')
      navigation.navigate('Deck', { id: deckId, name: value })
    }
  }

  return (
    <View style={styles.container}>
      <DeckHeader>Deck name</DeckHeader>
      <DeckNameInput onChangeText={(text) => setValue(text)} value={value} />
      <Button onPress={createDeck} title="Create Deck" />
    </View>
  )
}

export default NewDeck
