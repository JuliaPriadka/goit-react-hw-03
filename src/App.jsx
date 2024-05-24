import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/contactList';
import SearchBox from './components/SearchBox/searchBox';
import contacts from './contacts.json';
import ContactForm from './components/ContactForm/contactForm';

function App() {
  const [searchdata, setSearchdata] = useState('');

  const searchResult = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchdata.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchdata} onChange={setSearchdata} />
      <ContactList contacts={searchResult} />
    </div>
  );
}

export default App;
