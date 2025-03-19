const grades = [73, 63, 38, 33];

function gradingStudents(grades) {
  const gradesArr = [];
  grades.forEach((grade) => {
    if (grade <= 33) {
      gradesArr.push(grade);
    } else {
      const nextNumber = Math.floor(grade / 5 + 1);
      const multiplied = nextNumber * 5;
      const diffrence = multiplied - grade;
      if (diffrence < 3) {
        gradesArr.push(multiplied);
      } else {
        gradesArr.push(grade);
      }
    }
  });
  return gradesArr;
}

const result = gradingStudents(grades);

console.log(result);
