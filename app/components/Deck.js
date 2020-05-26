import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Alert } from 'react-native'

import { styles } from '../common'
import { handleDeleteDeck } from '../actions/decks'

const Deck = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const deck = useSelector((state) =>
    state.decks.find((d) => d.id == route.params.id)
  )

  const deleteDeck = () => {
    navigation.popToTop()
    dispatch(handleDeleteDeck(deck.id))
  }

  return (
    <View>
      <Text style={styles.deckNumbers}>{deck?.questions?.length}</Text>
      <Text style={styles.deckCards}>Number of cards in the deck</Text>
      <View style={{ flexDirection: 'row', marginTop: 60 }}>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text
            style={styles.deckButton}
            onPress={() => {
              deck?.questions?.length === 0
                ? Alert.alert(
                    'Unable to start Quiz',
                    'There are no cards to revise'
                  )
                : navigation.navigate('Quiz', {
                    screen: 'QuizView',
                    params: {
                      id: deck.id,
                      cardNo: 0,
                      cardCount: deck.questions.length,
                    },
                  })
            }}
          >
            Start a Quiz
          </Text>
        </View>
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text
            style={styles.deckButton}
            onPress={() => navigation.navigate('Card', { deck: deck })}
          >
            Add card
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, marginLeft: 8, marginRight: 8 }}>
        <Text
          style={{ ...styles.deckButton, color: 'red' }}
          onPress={() => deleteDeck()}
        >
          Delete
        </Text>
      </View>
    </View>
  )
}

export default Deck
