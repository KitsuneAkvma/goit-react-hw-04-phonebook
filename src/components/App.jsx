import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';
import { ContactCreationForm } from './ContactCreationForm/ContactCreationForm';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length >= 1
    ) {
      return alert(`Contact "${name}" is already on the list`);
    }

    setContacts([
      { id: shortid.generate(), name: name, number: number },
      ...contacts,
    ]);

    form.reset();
  };

  //--- Event Handlers ---//

  const handleSearch = e => {
    const input = e.currentTarget;

    setFilter(input.value);
  };

  const handleRemoveContact = e => {
    e.preventDefault();

    setContacts(contacts.filter(contact => contact.id !== e.currentTarget.id));
  };

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')) || contacts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <ContactCreationForm onSubmit={handleSubmit} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          onSearch={handleSearch}
          onRemove={handleRemoveContact}
        />
      </Container>
    </>
  );
};

export default App;
