import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput
      type="text"
      name="filter"
      title="Filter is case unsensitive."
      value={value}
      onChange={onChange}
      required
    />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;