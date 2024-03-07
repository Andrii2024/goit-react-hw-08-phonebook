import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './phonebook/contactsSlice';
import filtersReducer from './phonebook/filtersSlice';
import { reactReducer } from './auth/sliceReact';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    user: userReducer,
    react: reactReducer,
  },
});
