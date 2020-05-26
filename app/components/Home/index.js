import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import List from './List'
import Deck from '../Deck'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Stack = createStackNavigator()

const Home = () => (
  <Stack.Navigator initialRouteName="List">
    <Stack.Screen
      name="List"
      component={List}
      options={{ title: 'Decks', headerTitleAlign: 'center' }}
    />
    <Stack.Screen
      name="Deck"
      component={Deck}
      options={({ route }) => ({
        title: route.params.name,
        headerTitleAlign: 'center',
      })}
    />
    <Stack.Screen
      name="Card"
      component={AddCard}
      options={{ title: 'Add Card', headerTitleAlign: 'center' }}
    />
    <Stack.Screen
      name="Quiz"
      component={Quiz}
      options={{ title: 'Quiz', headerTitleAlign: 'center' }}
    />
  </Stack.Navigator>
)

export default Home
