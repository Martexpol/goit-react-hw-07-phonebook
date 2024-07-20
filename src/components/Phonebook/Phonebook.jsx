import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Phonebook.module.scss";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/operations";

export default function Phonebook() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    const contactExists = contacts.some(
      (contact) =>
        contact.name === newContact.name || contact.phone === newContact.phone,
    );
    if (contactExists) {
      window.alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    setName("");
    setPhone("");
  };

  const nameId = nanoid();
  const numId = nanoid();
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <input
          id={nameId}
          className={styles.input}
          type="text"
          name="name"
          pattern="^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <label htmlFor={numId} className={styles.label}>
          Phone number
        </label>
        <input
          id={numId}
          className={styles.input}
          type="tel"
          name="phone"
          pattern="^\+?[1-9]\d{1,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
