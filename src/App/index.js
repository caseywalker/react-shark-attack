import React, { useEffect } from 'react';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  useEffect(() => {
    livingStudents();
    dearlyBeloved();
    followTheLight(24);
  }, []);

  return (
    <div className='App'>
      Test App
    </div>
  );
}

export default App;
