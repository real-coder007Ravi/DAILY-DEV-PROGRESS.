// const myBody=document.body;
// myBody.style.backgroundColor="red";
// console.log(myBody);

// document.getElementById("box-1").style.backgroundColor="green";
// const arr=document.getElementsByTagName('div');
// console.log(arr);
// const boxes=document.getElementsByClassName("box");
// console.log(boxes);
// const random=document.querySelectorAll('.container .random');
// console.log(random);
//Changing Content
// const box1 = document.getElementById("box-1");
// // box1.innerHTML = "Hi Ravi";
// //Changing Attribute Values
// box1.style.backgroundColor="purple";
// // const image1=document.getElementById('img-1');
// // image1.src="1.png"
// // box1.classList.add('round-border');
// const boxes=document.getElementsByClassName('box');
// for(let i=0;i<boxes.length;i++){
//     boxes[i].classList.add('round-color');
// }
// box1.classList.remove('round-border');
const newPara=document.createElement('p');
newPara.innerText="This is Brand New";
newPara.classList.add('box');
const ele=document.getElementById('container');
ele.appendChild(newPara);