import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ livinStudents }) => (
    <div className="shark-container">
    {livinStudents.map((liveStudent) => (
      <LiveStudent key={liveStudent.id} student={liveStudent} />
    ))}
  </div>
);

SharkTank.propTypes = {
  livinStudents: PropTypes.array.isRequired
};

export default SharkTank;
