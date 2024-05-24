import Contact from '../Contact/contact';
import css from '../ContactList/contactList.module.css';

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactListItem}>
            <Contact data={contact} onClick={onContactDelete} />
          </li>
        );
      })}
    </ul>
  );
}
