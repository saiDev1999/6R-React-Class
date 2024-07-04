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
const user = {
  name: "siva",
  roll: 11,
  contact: {
    mobile: 9090,
  },
  mobile,
};

// user.roll = 22;
const propertyKey = "name";
const propertyValue = "dds";
user[propertyKey] = propertyValue;

// const {
//   name,
//   roll,
//   contact: { mobile: phoneNumber },
// } = user;

// console.log(`hello ${name} ${phoneNumber}`);

// const arry = [1, 2, 3, 4];

// const [first, ...rest] = arry;
// console.log(rest);
