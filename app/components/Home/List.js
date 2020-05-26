import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View, Text } from 'react-native'

import { styles } from '../../common'

const List = ({ navigation }) => {
  const decks = useSelector((state) => state.decks)

  return (
    <View style={styles.container}>
      <Text>Linst</Text>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate(item.id, { deck: item })}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default List
