import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { sessionReducer } from './session'
import { financeReducer } from './finance'
import { globalReducer } from './globall'

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    session: persistReducer(sessionPersistConfig, sessionReducer),
    finance: financeReducer,
    global: globalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

const persistor = persistStore(store)

export { persistor, store }
