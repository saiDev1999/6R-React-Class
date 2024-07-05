// callbacks :
// A function passed as argument to the another functions

// ex: setTimeout

// api call
// use the data coming api call

// function fetchData(callback) {
//   setTimeout(() => {
//     callback({
//       dishName: "biryani",
//       instructions: [
//         "Onions in the dish",
//         "masalas and spices should be added",
//         "cook the rice and pour in the bowl",
//       ],
//     });
//   }, 2000);
// }

// function processData(dishData) {
//   console.log(dishData);
// }

// fetchData(processData);

//Producing code

function fetchData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        data: {
          dishName: "biryani",
          instructions: [
            "Onions in the dish",
            "masalas and spices should be added",
            "cook the rice and pour in the bowl",
          ],
        },
        status: 1,
      };

      if (response.status) {
        resolve(response.data);
      } else {
        reject(response.data.error);
      }
    }, 2000);
  });

  return promise;
}

function processData(data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const eatingBiryani = true;

      if (eatingBiryani) {
        resolve(`${data.dishName} is good, i have eaten ${data.dishName}`);
      } else {
        reject("i am not hungry");
      }
    }, 1000);
  });

  return promise;
}

// state: pending, fulfil, reject

// consuming code

// fetchData()
//   .then((data) => processData(data))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("https://dummyjson.com/recipes/1")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// async and await

const fetchServerData = async () => {
  // const response = await fetch("https://dummyjson.com/recipes/1");
  // const newResponse = await response.json();
  const response = await fetchData();

  const newResponse = await processData(response);

  console.log(newResponse);
};
fetchServerData();
