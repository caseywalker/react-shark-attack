const students = [
  {
    id: 1,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/76138733?v=4'
  },
  {
    id: 2,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false,
    image: 'https://avatars0.githubusercontent.com/u/76926244?v=4'
  },
  {
    id: 3,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/68720317?v=4'
  },
  {
    id: 4,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/76795299?v=4'
  },
  {
    id: 5,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
    image: 'https://avatars0.githubusercontent.com/u/68397076?v=4'
  },
  {
    id: 6,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
    image: 'https://avatars0.githubusercontent.com/u/76851756?v=4'
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/58958998?v=4'
  },
  {
    id: 8,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/76187279?v=4'
  },
  {
    id: 9,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/16343050?v=4'
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/51683901?v=4'
  },
  {
    id: 11,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/67122062?v=4'
  },
  {
    id: 12,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/20494604?v=4'
  },
  {
    id: 13,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
    image: 'https://avatars1.githubusercontent.com/u/76793747?v=4'
  },
  {
    id: 14,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/45837967?v=4'
  },
  {
    id: 15,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/76821980?v=4'
  },
  {
    id: 16,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/76188832?v=4'
  },
  {
    id: 17,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/23327097?v=4'
  },
  {
    id: 18,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false,
    image: 'https://avatars0.githubusercontent.com/u/76921222?v=4'
  },
  {
    id: 19,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/76710923?v=4'
  },
  {
    id: 20,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false,
    image: 'https://avatars0.githubusercontent.com/u/76854545?v=4'
  },
  {
    id: 21,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/25774314?v=4'
  },
  {
    id: 22,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false,
    image: 'https://avatars2.githubusercontent.com/u/76828201?v=4'
  },
  {
    id: 23,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false,
    image: 'https://avatars3.githubusercontent.com/u/76716670?v=4'
  },
  {
    id: 24,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
    image: 'https://avatars0.githubusercontent.com/u/74842096?v=4'
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

const killStudent = () => {
  const currentLiveStudents = livingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);
  students[index].isDead = true;
  return [livingStudents(), dearlyBeloved()];
};

export {
  students, livingStudents, dearlyBeloved, followTheLight, killStudent
};
