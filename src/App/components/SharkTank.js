import React from 'react';
import PropTypes from 'prop-types';

const SharkTank = ({ livinStudents }) => (
    <ul>
    {livinStudents.map((liveStudent) => (
      <li key={liveStudent.id}>
        {`${liveStudent.firstName} ${liveStudent.lastName}`}
      </li>
    ))}
  </ul>
);

SharkTank.propTypes = {
  livinStudents: PropTypes.array.isRequired
};

export default SharkTank;
