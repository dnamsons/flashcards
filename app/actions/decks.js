export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const EDIT_DECK = 'EDIT_DECK'

const createDeck = (deck) => ({ type: CREATE_DECK, deck })

export const handleCreateDeck = (deckName) => (dispatch) => {
  const uniqueId =
    Math.random().toString(36).substring(2) + Date.now().toString(36)

  dispatch(createDeck({ id: uniqueId, name: deckName, questions: [] }))
}
