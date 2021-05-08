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
      <h2 className="mt-2"> Welcome to the Shark Tank!</h2>
      <h3>Click the button bellow to randomly select a student to send to a watery demise!</h3>
      {livinStudents.length
        ? <Button className="mt-2" color='danger' onClick={handleClick}>Shark Attack</Button> : ''
      }
      <h4 className="mt-2">Fresh Meat</h4>
      <SharkTank livinStudents={livinStudents} />
      <h2>Dearly Departed</h2>
      <Graveyard deadStudents={deadStudents} />
    </div>
  );
}

export default App;
