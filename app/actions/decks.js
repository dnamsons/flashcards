export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const CREATE_CARD = 'CREATE_CARD'

const createDeck = (deck) => ({ type: CREATE_DECK, deck })

export const handleCreateDeck = (id, name) => (dispatch) => {
  dispatch(createDeck({ id, name, questions: [] }))
}

const createCard = (id, question) => ({ type: CREATE_CARD, id, question })

export const handleCreateCard = (id, question, answer) => (dispatch) => {
  dispatch(createCard(id, { question, answer }))
}

const deleteDeck = (id) => ({ type: DELETE_DECK, id })

export const handleDeleteDeck = (id) => (dispatch) => dispatch(deleteDeck(id))
