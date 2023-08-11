function sum(a,b){
    return a+b;
}
console.log(sum(10,12));
function product(a,b){
    return a*b;
}
console.log(product(10,12));
function Divide(a,b){
    return a/b;
}
console.log(Divide(12,12));
//Function Expression
const ans=function(num){
    return num**2;
}
console.log(ans(8));
//Nested Functions
function addsquare(a,b){
    function square(x){
        return x**2;
    }
    return square(a)+square(b);
}
console.log(addsquare(8,6));