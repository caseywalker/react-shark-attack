import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

const Graveyard = ({ deadStudents }) => (
   <div className="grave-container">
    {deadStudents.map((deadStudent) => (
      <GraveStone key={deadStudent.id} student={deadStudent} />
    ))}
  </div>
);

Graveyard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default Graveyard;
