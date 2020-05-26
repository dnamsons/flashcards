import { CREATE_DECK, CREATE_CARD, DELETE_DECK } from '../actions/decks'

const decks = (state = [], action) => {
  switch (action.type) {
    case CREATE_DECK:
      return [...state, action.deck]
    case CREATE_CARD:
      return state.map((deck) =>
        deck.id === action.id
          ? { ...deck, questions: [...deck.questions, action.question] }
          : deck
      )
    case DELETE_DECK:
      return state.filter((deck) => deck.id !== action.id)
    default:
      return state
  }
}

export default decks
