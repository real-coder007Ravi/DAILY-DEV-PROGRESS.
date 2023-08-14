// try{
//     console.log(age);
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);

// }
// console.log(78*2);
try{
    const res=prompt("Enter age:");
    if(res==='Y'){
        // throw{
        //     name:'Anuj'
        // };
        throw new Error("New robo");
    }
}catch(err){
    console.log(err.name,err.message);
}finally{
    console.log("Rvaio")
}