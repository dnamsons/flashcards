import { CREATE_DECK, EDIT_DECK, DELETE_DECK } from '../actions/decks'

const decks = (state = [], action) => {
  switch (action.type) {
    case CREATE_DECK:
      return [...state, action.deck]
    case EDIT_DECK:
      return state.map(deck => deck.id === action.deck.id ? action.deck : deck)
    case DELETE_DECK:
      return state.filter(deck => deck.id !== action.id)
    default:
      return state
  }
}

export default decks
