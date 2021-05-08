import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardImg
} from 'reactstrap';

const LiveStudent = ({ student }) => (
<Card body>
  <CardImg top width="100%" src={student.image} alt="Card image cap" />
  <CardTitle className="mt-2" tag="h5">{student.firstName} {student.lastName} </CardTitle>
</Card>
);

LiveStudent.propTypes = {
  student: PropTypes.object.isRequired
};

export default LiveStudent;
