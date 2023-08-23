import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contatcs = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contatcs);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  isContactInList = name => {
    const normalizedName = name.trim().toLowerCase();

    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  addContact = newContact => {
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  onChangeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Wrapper>
        <Container>
          <TitlePhoneBook>Phonebook</TitlePhoneBook>
          <ContactForm onAddContact={this.addContact} />
        </Container>
        <Container>
          <TitleContacts>Contacts</TitleContacts>
          <Filter value={this.state.filter} onChange={this.onChangeFilter} />
          <ContactList
            items={visibleContacts}
            onDeleteContact={this.handleDeleteContact}
          />
          <GlobalStyle />
        </Container>
      </Wrapper>
    );
  }
}
