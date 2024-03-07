import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contactsSlice';
import filtersReducer from './phonebook/filtersSlice';
import { reactReducer } from './auth/sliceReact';
import { userReducer } from './userSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from 'axiosConfig/userApi';

const persistConfig = {
  key: 'react',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, reactReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    user: userReducer,
    react: persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware().concat(userApi.middleware),
  // });
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
