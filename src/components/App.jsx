import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import {
  Wrapper,
  Container,
  TitlePhoneBook,
  TitleContacts,
} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const initialContacts = localStorage.getItem('contacts');
    if (initialContacts !== null) {
      const parsedInitialContacts = JSON.parse(initialContacts);
      return parsedInitialContacts;
    } else {
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevContacts => {
          return [...prevContacts, newContact];
        });
  };

  const onChangeFilter = newFilter => {
    setFilter(newFilter);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm onAddContact={addContact} />
      </Container>
      <Container>
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList
          items={visibleContacts}
          onDeleteContact={handleDeleteContact}
        />
        <GlobalStyle />
      </Container>
    </Wrapper>
  );
};
