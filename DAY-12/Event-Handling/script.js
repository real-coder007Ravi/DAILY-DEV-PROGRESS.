// function myFunction() {
//   console.log("I was clicked");
// }
// const mymouse = () => {
//   console.log("Hello Hi ,Bye Bye");
// };
// function myout(){
//   console.log("My mouse is out");
// }
// function myload(){
//   console.log("My name is Ravi");
// }
// function keypressevent(){
//   console.log("On key press Event ");
// }
// function keypUpevent(){
//   console.log("On key  UpEvent ");
// }
// function keyDownevent(){
//   console.log("On key Down Event ");
// }
//Event Listeners-Multiple clicks
const box1=document.getElementById('box-1');
// box1.addEventListener('mousemove',(event)=>{
//   console.log("Click By event 1",event.clientX);
// })
box1.addEventListener('click',()=>{
  console.log('Click by event 2');
})
const cont=document.getElementById('container');
cont.addEventListener('click',()=>{
  console.log('cLicked Conatiner');
},true)
const nameInput=document.getElementById('name');
nameInput.addEventListener('keydown',(e)=>{
  console.log('key',e.key);
})
nameInput.addEventListener('focus',(e)=>{
       console.log('key',e);
})