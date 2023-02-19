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
    const newContactsList = [
      { id: shortid.generate(), name: name, number: number },
      ...contacts,
    ];
    setContacts(newContactsList);

    localStorage.setItem('contacts', JSON.stringify(newContactsList));

    form.reset();
  };

  //--- Event Handlers ---//

  const handleSearch = e => {
    const input = e.currentTarget;

    setFilter(input.value);
  };

  const handleRemoveContact = e => {
    e.preventDefault();

    const newContactsList = contacts.filter(
      contact => contact.id !== e.currentTarget.id
    );
    setContacts(newContactsList);

    localStorage.setItem('contacts', JSON.stringify(newContactsList));
  };

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

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
