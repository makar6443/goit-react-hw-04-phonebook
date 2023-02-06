import { useState } from 'react';
import { useLocalStorage } from './hooks/hooks.js';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage([]);
  const [filter, setFilter] = useState('');

  function visibleContacts() {
    return [
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ),
    ];
  }
  
  const addContactHandler = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? Notiflix.Notify.info(`${name} is already in contacts.`)
      : setContacts([
          { id: shortid.generate(), name: name.trim(), number },
          ...contacts,
        ]);
  };

  const filterChangeHandler = evt => {
    const normalizedStr = evt.target.value.trim().toLowerCase();
    setFilter(normalizedStr);
  };

  const deleteContactHandler = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <InputForm contacts={contacts} onSubmit={addContactHandler}></InputForm>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={filterChangeHandler} />
        <ContactList
          contacts={visibleContacts()}
          onClick={deleteContactHandler}
        ></ContactList>
    </Container>
  );
};

export default App;