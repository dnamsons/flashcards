import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import reducers from './reducers'
import middlewares from './middleware'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, middlewares)
export const persistor = persistStore(store)

export default store
