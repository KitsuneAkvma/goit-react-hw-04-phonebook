import React, { Component } from 'react';
import shortid from 'shortid';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';
import { ContactCreationForm } from './ContactCreationForm/ContactCreationForm';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      this.state.contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length >= 1
    ) {
      return alert(`Contact "${name}" is already on the list`);
    }

    this.setState({
      contacts: [
        { id: shortid.generate(), name: name, number: number },
        ...this.state.contacts,
      ],
    });

    form.reset();
  };

  //--- Event Handlers ---//
  handleChange = e => {
    const input = e.currentTarget;

    this.setState({ [input.name]: input.value });
  };

  handleSearch = e => {
    const input = e.currentTarget;

    this.setState({ filter: input.value });
  };

  handleRemoveContact = e => {
    e.preventDefault();

    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.currentTarget.id
      ),
    });
  };

  //--- Life Cycle ---//
  componentDidMount() {
    this.setState({
      contacts:
        JSON.parse(localStorage.getItem('contacts')) || this.state.contacts,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Container className="App">
          <ContactCreationForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onSearch={this.handleSearch}
            onRemove={this.handleRemoveContact}
          />
        </Container>
      </>
    );
  }
}

export default App;
