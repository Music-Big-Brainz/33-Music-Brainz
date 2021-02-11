import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSubmit }) => (
  <div>
    <form>
      <input type="text" value={search} />
      <button onSubmit={onSubmit} />
    </form>
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
