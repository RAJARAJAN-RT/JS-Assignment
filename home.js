const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  const femaleStudents = students.filter((student) => student.gender === 'female');
  const femaleStudentName = femaleStudents.map((student)=> student.name);
  console.log(...femaleStudentName);
  const names = students.filter(student=> student.name.startsWith("A"));
  console.log(...names.map(student=>student.name))
  const count = students
      .filter(student=> student.gender === 'female')
      .reduce((carry, student) => carry += 1, 0);
      console.log(count)