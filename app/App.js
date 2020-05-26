import * as React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

import store, { persistor } from './store'
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'
import NewDeck from './components/NewDeck'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
})

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <Tab.Navigator
            initialRouteName="Decks"
            backBehavior="none"
            tabBarOptions={{
              activeTintColor: 'limegreen',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen
              name="Decks"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="cards-variant"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="New Deck"
              component={NewDeck}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="plus" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

export default App
