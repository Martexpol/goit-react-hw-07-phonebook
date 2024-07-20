import React from "react";
import { Provider } from "react-redux";
import styles from "./App.module.scss";
import store from "../redux/store";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Phonebook from "./Phonebook/Phonebook";

const App = () => (
  <Provider store={store}>
    <div className={styles.main}>
      <h1 className={styles.mainHeader}>Phonebook</h1>
    </div>
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <Phonebook />
    </div>
    <div className={styles.container}>
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  </Provider>
);

export default App;
