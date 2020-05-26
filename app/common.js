import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listItem: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  deckNumbers: {
    fontSize: 60,
    textAlign: 'center',
    marginVertical: 5,
    marginLeft: 16,
    color: 'green'
  },
  deckCards: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginVertical: 5,
    marginLeft: 16,
  },
  deckButton: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  cardTitle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    marginVertical: 40,
  },
  cardQuestion: {
    backgroundColor: 'lightblue',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    marginBottom: 30,
  },
  cardAnswer: {
    marginVertical: 30,
    backgroundColor: 'lightgreen',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  answerButton:{
    marginVertical: 30,
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  answerContainer: {
    flex: 1,
    alignItems: 'center',
  },
})
