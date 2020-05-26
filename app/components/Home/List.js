import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View, Text } from 'react-native'

import { styles } from '../../common'

const List = ({ navigation }) => {
  const decks = useSelector((state) => state.decks)

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Text
            style={styles.listItem}
            onPress={() =>
              navigation.navigate('Deck', { id: item.id, name: item.name })
            }
          >
            {item.name} ({item.questions.length})
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default List
