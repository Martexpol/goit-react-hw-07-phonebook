import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./slices";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
