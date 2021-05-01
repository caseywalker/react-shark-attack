import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {
  dearlyBeloved, killStudent, livingStudents
} from '../helpers/data/studentData';
import './App.scss';
import Graveyard from './components/Graveyard';
import SharkTank from './components/SharkTank';

function App() {
  const [livinStudents, setLivinStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);
  // state to store students. living students, set living.
  // use effect for getting live students, setLivingState
  // setLivingState(getLiveStudents())
  // setDeadStudentSate(getDeadStudents())
  // function to kill random student, first declare variable to getLiveStudents  =liveStudents[Math.floor(Math.random() * students.length)]. can do in data or click
  // function to call the killStudent, const [living, dead] = killStudent() <- destructuring the returned two arrays.
  // setLivingStudents(living) setDeadStudents(dead);
  useEffect(() => {
    setLivinStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  const handleClick = () => {
    const [living, dead] = killStudent();
    setLivinStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      {livinStudents.length
        ? <Button color='danger' onClick={handleClick}>Shark Attack</Button> : ''
      }
      <h2>Living Students</h2>
      <SharkTank livinStudents={livinStudents} />
      <h2>Dead Students</h2>
      <Graveyard deadStudents={deadStudents} />
      {/* Kill student button */}
      {/* Div with alive students */}
      {/* Div with dead students */}
    </div>
  );
}

export default App;
