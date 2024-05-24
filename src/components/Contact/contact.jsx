import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import css from '../Contact/contact.module.css';

export default function Contact({ data, onClick }) {
  return (
    <div className={css.contactWrapper}>
      <div>
        <div className={css.contactItem}>
          <IoMdPerson />
          <p>{data.name}</p>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt />
          <p>{data.number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => onClick(data.id)}>
        Delete
      </button>
    </div>
  );
}
