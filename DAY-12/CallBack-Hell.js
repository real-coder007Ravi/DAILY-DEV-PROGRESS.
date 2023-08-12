//Synchronous JS- Line by Line Execution of Code
// console.log("Ravi");
// console.log("Kumar");
// console.log("Gupta");
//Asynchronous JS-it runs in different way
//setTimeout Function
// setTimeout(() => {
//   console.log("Hello");
// }, 30);
// console.log("Hi this is");
// console.log("Ravi");
//WindowKey + .=>Emoji Opener


function getCheese(callback){
    setTimeout(() => {
        const cheese="🧀";
        console.log("Here is the cheese",cheese);
        callback(cheese);
    }, 2000);
}
function makeDough(cheese,callback){
    setTimeout(() => {
        const dough=cheese+'🍩' ;
        console.log("Here is the dough",dough);
        callback(dough);
    }, 200);
}
function makePizza(dough,callback){
    setTimeout(() => {
        const pizza=dough+'🍩' ;
        console.log("Here is the pizza",pizza);
        callback(pizza);
    }, 200);
}
getCheese((cheese)=>{
    makeDough(cheese,(dough)=>{
        makePizza(dough,(pizza)=>{
        console.log("got the pizza",pizza);
    });
 
});
});

//pizza->dough->cheese
