// 1. Let const

// function loop() {
//   for (const i = 0; i < 10; i++) {
//     console.log(i);
//   }

//   console.log(i, "outside loops");
// }

// loop();

// 2. Arrow functions :

// function square(num) {
//   return num * num;
// }
// square();

// const arry = [1, 2, 3];

// const newArry = arry.map((num) => num * num);
// console.log(newArry);

// const oddNumbers = arry.filter((num) => num % 2 !== 0);

// template literals
// const user = {
//   name: "siva",
//   roll: 11,
//   contact: {
//     mobile: 9090,
//   },
//   mobile,
// };

// // user.roll = 22;
// const propertyKey = "name";
// const propertyValue = "dds";
// user[propertyKey] = propertyValue;

// const {
//   name,
//   roll,
//   contact: { mobile: phoneNumber },
// } = user;

// console.log(`hello ${name} ${phoneNumber}`);

// const arry = [1, 2, 3, 4];

// const [first, ...rest] = arry;
// console.log(rest);

// ternary operator
// const isLogin = true;

// const isAdmin = true;

// const flag = isLogin
//   ? isAdmin
//     ? "Welcome admin"
//     : "Welcome user"
//   : "please login";

// console.log(flag);

// const username = "ram123";
// const password = 123;

// const userInfo = {
//   username,
//   password,
// };

// console.log(userInfo);

const kitchenItems = [
  {
    name: "onion",
    isFruit: false,
    qty: 10,
    price: 200,
  },
  {
    name: "watermelon",
    isFruit: true,
    qty: 4,
    price: 20,
  },
  {
    name: "Potatoe",
    isFruit: false,
    qty: 6,
    price: 10,
  },
  {
    name: "green Leaves",
    isFruit: false,
    qty: 6,
    price: 5,
  },
  {
    name: "Apple",
    isFruit: true,
    qty: 7,
    price: 300,
  },
];

const totalCost = kitchenItems
  .filter((eachFruit) => !eachFruit.isFruit && eachFruit.price <= 50)
  .reduce((total, eachVegetable) => total + eachVegetable.price, 0);

console.log(
  `The total cost of the vegetables which price is less than 50 is ${totalCost} rupees`
);

// vegetableList.map((eachVeggy) => console.log(eachVeggy.name));

// I need total price of vegetables which is less than 50 rupees
