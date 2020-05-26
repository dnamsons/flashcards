import React from 'react'
import { View, Text } from 'react-native'

const Deck = ({ route }) => {
  const deck = route.params.deck

  return (
    <View>
      <Text>{deck.name}</Text>
    </View>
  )
}

export default Deck
