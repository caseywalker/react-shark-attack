import React from 'react';
import PropTypes from 'prop-types';

const Graveyard = ({ deadStudents }) => (
    <ul>
    {deadStudents.map((deadStudent) => (
      <li key={deadStudent.id}>
        {`${deadStudent.firstName} ${deadStudent.lastName}`}
      </li>
    ))}
  </ul>
);

Graveyard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default Graveyard;
