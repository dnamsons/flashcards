import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { styles } from '../../common'
import {
  clearNotification,
  scheduleNotification,
} from '../../utils/notifications'

const QuizResults = ({ navigation, route }) => {
  const { id, correctAnswers, cardCount } = route.params
  const deck = useSelector((state) =>
    state.decks.find((deck) => deck.id === id)
  )

  useEffect(() => {
    clearNotification().then(() => scheduleNotification())
  }, [])

  return (
    <View>
      <Text style={styles.cardTitle}>
        Correctly answered {correctAnswers} out of {cardCount}
      </Text>

      <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <Button
            title="Restart quiz"
            onPress={() =>
              navigation.navigate('Quiz', { id, cardNo: 0, cardCount })
            }
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <Button
            title="Back to deck"
            onPress={() =>
              navigation.navigate('Deck', { id: deck.id, name: deck.name })
            }
          />
        </View>
      </View>
    </View>
  )
}

export default QuizResults
