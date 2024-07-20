import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import styles from "./Contacts.module.scss";
import { useEffect } from "react";

export default function Contacts() {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contact}>
            <span className={styles.contactName}> {contact.name}:</span>
            <span className={styles.contactNumber}>{contact.phone}</span>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
