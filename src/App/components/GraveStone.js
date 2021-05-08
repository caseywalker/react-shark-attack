import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardImg
} from 'reactstrap';

const GraveStone = ({ student }) => (
<Card body>
  <CardImg top width="100%" src="https://st2.depositphotos.com/1742172/5964/v/380/depositphotos_59640697-stock-illustration-cartoon-zombie-rising-from-grave.jpg" />
  <CardTitle className="mt-2" tag="h5">{student.firstName} {student.lastName} </CardTitle>
</Card>
);

GraveStone.propTypes = {
  student: PropTypes.object.isRequired
};

export default GraveStone;
