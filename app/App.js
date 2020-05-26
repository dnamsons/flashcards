import * as React from 'react'
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

import store, { persistor } from './store'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
})

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
)

const DetailScreen = () => (
  <View style={styles.container}>
    <Text>Some details...</Text>
  </View>
)
const Tab = createBottomTabNavigator()

const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
)

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
              component={HomeScreen}
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
              component={DetailScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default App
