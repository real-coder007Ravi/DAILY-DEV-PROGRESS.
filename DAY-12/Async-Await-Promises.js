//Flight Ticket-similiar to promise

// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = true;
//   if (isBoarded) {
//     resolve("Not in the flight");
//   } else {
//     reject("You are not boarded");
//   }
// });
// ticket
//   .then((data) => {
//     console.log("yes", data);
//   })
//   .catch((data) => {
//     console.log("no", data);
//   })
//   .finally(() => {
//     console.log("hoo");
//   });

//Promise For Pizza Making
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🍰";

      resolve(cheese);
    }, 2000);
  });
}
function MakeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🧀";

      resolve(dough);
    }, 2000);
  });
}
function MakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";

      resolve(pizza);
    }, 2000);
  });
}

//ASync Await Concept
// Ruko pehle promise ko resolve ya reject hone do
async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("Here is the cheese", cheese);
    const dough = await MakeDough(cheese);
    console.log("Here is the dough", dough);
    const pizza = await MakePizza(dough);
    console.log("Here is the pizza", pizza);
  } catch (err) {
    console.log("Error occured", err);
  }
  console.log("Process ended");
}
orderPizza();
// getCheese()
//   .then((cheese) => {
//     console.log("Here is the cheese", cheese);
//     return MakeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("Here is the dough", dough);
//     return MakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("Here is the pizza", pizza);
//   })
//   .catch((data)=>{
//     console.log("Error ",data);
//   })
//   .finally(()=>{
//     console.log("Process ended");
//   });
