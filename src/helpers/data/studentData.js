const students = [
  {
    id: 1,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false
  },
  {
    id: 24,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false
  },
];

const livingStudents = () => {
  const livingStudentsArray = students.filter((student) => !student.isDead);
  return livingStudentsArray;
};

const dearlyBeloved = () => {
  const dearlyBelovedArray = students.filter((student) => student.isDead);
  return dearlyBelovedArray;
};

const followTheLight = (studentID) => {
  students.forEach((response) => {
    if (response.id === studentID) {
      response.isDead = true;
    }
  });
};

export {
  students, livingStudents, dearlyBeloved, followTheLight
};
