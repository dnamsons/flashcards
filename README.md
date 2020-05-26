<h1 align="center">Flashcards</h1>

This is the third project for the Udacity React microdegree program, focusing on the usage of React Native.

## Setup

```
yarn install
yarn start
```

alternatively, one can use the [https://expo.io/tools](expo-cli) to start the application

## Description

This app allows you to respond to To create Flashcards.
You can create decks that will contain flashcards, Add flashcards to decks and quizz yourself on the flashcards in a deck.

### Technologies/packages used:
  * `create-react-native-app` for the project configuration
  * React for the interactivity
  * React Native for the UI
  * `expo` for icons and notifications
  * `async-storage` for storage on the mobile device
  * `react-navigation` for navigation
  * `styled-components` for adding CSS to components(although used rarely, as it doesn't seem to go well together with React Native)
  * Redux for state management
  * `redux-react` for more streamlined integration between React and Redux
  * `redux-thunk` for asyncronous and `Promise`-based actions
  * `redux-logger` for logging(in development environment only)
  * `redux-persist` to store state in AsyncStorage
