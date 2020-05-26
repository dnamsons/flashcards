import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from '../../common'

import QuizResults from './QuizResults'

const Stack = createStackNavigator()

const Quiz = () => {
  return (
    <Stack.Navigator initialRouteName="QuizView" headerMode="none">
      <Stack.Screen
        name="QuizView"
        component={QuizView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizResults"
        component={QuizResults}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const QuizView = ({ navigation, route }) => {
  const [showAnswer, toggleShowAnswer] = useState(false)

  const { id, cardNo, cardCount } = route.params
  let correctAnswers = route.params?.correctAnswers || 0

  const card = useSelector(
    (state) => state.decks.find((deck) => deck.id === id)?.questions[cardNo]
  )

  const proceed = (answeredCorrectly = false) => {
    if (answeredCorrectly) {
      correctAnswers += 1
    }

    if (cardNo + 1 === cardCount) {
      navigation.reset({
        index: 0,
        routes: [
          { name: 'QuizResults', params: { id, correctAnswers, cardCount } },
        ],
      })
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'QuizView',
            params: {
              id,
              cardNo: cardNo + 1,
              cardCount,
              correctAnswers,
            },
          },
        ],
      })
    }
  }

  return (
    <>
      <Text style={styles.cardTitle}>
        Card No. {cardNo + 1} of {cardCount}
      </Text>

      <Text style={styles.cardQuestion}>Question: {card.question}</Text>

      <View style={styles.answerContainer}>
        <Button
          style={styles.answerButton}
          color="limegreen"
          title="Show answer"
          onPress={() => toggleShowAnswer(true)}
          disabled={showAnswer}
        />
      </View>
      {showAnswer && (
        <>
          <Text style={styles.cardAnswer}>Answer: {card.answer}</Text>
          <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
            <View style={{ flex: 1, marginHorizontal: 16 }}>
              <Button title="Correct" onPress={() => proceed(true)} />
            </View>
            <View style={{ flex: 1, marginHorizontal: 16 }}>
              <Button title="Incorrect" onPress={() => proceed()} />
            </View>
          </View>
        </>
      )}
    </>
  )
}

export default Quiz
