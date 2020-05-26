import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native'
import styled from 'styled-components/native'

import { handleCreateDeck } from '../actions/decks'
import { styles } from '../common'

const DeckHeader = styled.Text`
  fontSize: 20px;
  fontWeight: bold;
  paddingLeft: 5px;
`

const DeckNameInput = styled.TextInput`
  height: 40px;
  backgroundColor: white;
  borderColor: gray;
  borderWidth: 1px;
  width: 200px;
  marginTop: 20px;
  marginBottom: 10px;
`

const NewDeck = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const createDeck = () => {
    dispatch(handleCreateDeck(value))
    setValue('')
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
