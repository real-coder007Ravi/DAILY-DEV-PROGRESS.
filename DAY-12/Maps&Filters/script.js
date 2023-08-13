let students = [
  { id: "001", name: "Ram", sports: "Cricket" },
  { id: "002", name: "Rohan", sports: "Polo" },
  { id: "003", name: "Mohit", sports: "Cricket" },
  { id: "004", name: "Shah", sports: "FootBall" },
  { id: "005", name: "Rohit", sports: "Golf" },
];
// const newArray = students.filter((current) => {
//   if (current.id % 2 == 0) return true;
//   else return false;
// });
// console.log(newArray);

// const newArray=[];
// for(let i=0;i<students.length;i++){
//     if(students[i].id%2==0){
//         newArray.push(students[i]);
//     }
// }
const names = students
  .filter((current) => current.sports ==="Cricket")
  .map((current,index,array) => {
    return `<li>${current.name}</li>`;
  });
console.log(names);
const div = document.getElementById("container");
div.innerHTML = `<ul>${names.join("")}</ul>`;
