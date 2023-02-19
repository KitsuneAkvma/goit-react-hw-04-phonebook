import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledForm } from './ContactCreationForm.styled';

export class ContactCreationForm extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit}>
        <h1>Phonebook</h1>
        <h3>Name:</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.props.handleChange}
          placeholder="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
        <h3>Tel. number:</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.props.onChange}
          placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </StyledForm>
    );
  }
}

ContactCreationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};
