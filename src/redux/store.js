import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './phonebook/contactsSlice';
import filtersReducer from './phonebook/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
