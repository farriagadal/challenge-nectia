import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userSlice from './slices/userSlice'

// Combinar los reducers
const rootReducer = combineReducers({
  userSlice,
})

// Configurar el almacenamiento persistente
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSlice']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

const persistor = persistStore(store)

export { store, persistor }
