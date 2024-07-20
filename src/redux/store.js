import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./actions";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
