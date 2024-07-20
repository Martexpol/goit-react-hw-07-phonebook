import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/actions";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contact}>
            <span className={styles.contactName}> {contact.name}:</span>
            <span className={styles.contactNumber}>{contact.number}</span>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => dispatch(removeContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
