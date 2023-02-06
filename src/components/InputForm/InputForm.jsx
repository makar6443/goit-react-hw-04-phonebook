import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, StyledInput, StyledLabel, Button } from './InputForm.styled.js';

const InputForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handlerInputChange = evt => {
    const { name, value } = evt.target;

    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });

    if (!contacts.some(contact => contact.name === name)) resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handlerInputChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handlerInputChange}
          required
        />
      </StyledLabel>
      <Button type="submit" disabled={!name || !number}>
        Add contact
      </Button>
    </Form>
  );
};

InputForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
};

export default InputForm;