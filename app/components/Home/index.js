import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'

import List from './List'
import Deck from '../Deck'

const Stack = createStackNavigator()

const Home = () => {
  const decks = useSelector((state) => state.decks)

  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={List}
        options={{ title: 'Decks', headerTitleAlign: 'center' }}
      />
      {decks.map((deck) => (
        <Stack.Screen
          key={deck.id}
          name={deck.id}
          component={Deck}
          options={({ route }) => ({
            title: route.params.deck.name,
            headerTitleAlign: 'center',
          })}
        />
      ))}
    </Stack.Navigator>
  )
}

export default Home
