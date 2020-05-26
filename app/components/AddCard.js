import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Button, Alert } from 'react-native'
import { styles } from '../common'
import styled from 'styled-components/native'

import { handleCreateCard } from '../actions/decks'

const InputHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
`

const Input = styled.TextInput`
  height: 40px;
  background-color: white;
  border-color: gray;
  border-width: 1px;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`

const UNABLE_TO_SAVE_HEADER = "Unable to create card"
const QUESTION_EMPTY = "The question is empty"
const ANSWER_EMPTY = "The answer is empty"

const AddCard = ({ navigation, route }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()

  const deck = route.params.deck

  const createCard = () => {
    if(question.trim().length === 0) {
      Alert.alert(UNABLE_TO_SAVE_HEADER, QUESTION_EMPTY)
    } else if (answer.trim().length === 0 ) {
      Alert.alert(UNABLE_TO_SAVE_HEADER, ANSWER_EMPTY)
    } else {
      dispatch(handleCreateCard(deck.id, question, answer))
      setQuestion('')
      setAnswer('')
      navigation.navigate("Deck", { id: deck.id, name: deck.name })
    }
  }

  return (
    <View style={styles.container}>
      <InputHeader>Question</InputHeader>
      <Input onChangeText={(text) => setQuestion(text)} value={question} />
      <InputHeader>Answer</InputHeader>
      <Input onChangeText={(text) => setAnswer(text)} value={answer} />
      <Button onPress={createCard} title="Add card" />
    </View>
  )
}

export default AddCard
