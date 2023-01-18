import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

const ContactList = ({ contacts, onClick }) => (
  <StyledList>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onClick={onClick}
      />
    ))}
  </StyledList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactList;