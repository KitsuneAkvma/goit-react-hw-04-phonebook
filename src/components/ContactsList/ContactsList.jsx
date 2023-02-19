import React from 'react';
import PropTypes from 'prop-types';

import { StyledContactsList } from './ContactsList.styled';

export const ContactsList = props => {
  const [contacts, filter, onSearch, onRemove] = props;
  return (
    <StyledContactsList>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p></p>
      ) : (
        <input
          type="text"
          name="filter"
          onChange={onSearch}
          placeholder="Search for contacts..."
        />
      )}
      <ul>
        {contacts.length === 0 ? (
          <h4>Yoy have not added any contacts yet.</h4>
        ) : (
          contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li key={contact.id}>
                  <div>
                    <span>Name: </span>
                    {contact.name}
                  </div>
                  <div>
                    <span>Tel.number: </span>
                    {contact.number}
                  </div>
                  <button
                    className="removeContact"
                    onClick={onRemove}
                    id={contact.id}
                  >
                    ✖
                  </button>
                </li>
              );
            })
        )}
      </ul>
    </StyledContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onSearch: PropTypes.func,
  onRemove: PropTypes.func,
};
