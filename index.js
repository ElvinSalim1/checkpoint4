//Task 1
const myItems = [
  {
    name: "shovel",
    delay: 1,
  },
  {
    name: "shoe",
    delay: 3,
  },
  {
    name: "newspaper",
    delay: 5,
  },
];

function printItems(items) {
  items.forEach((item, index) => {
    setTimeout(() => {
      console.log(`item ${index+1} is a ${item.name}`);
    }, item.delay * 1000);
  });
}
printItems(myItems);

//Task2
function repeatString(str, n, callback) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  callback(result);
}
repeatString("ha", 3, function (result) {
  console.log(result); // => hahaha
});

//task3
function compress(input, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input.replace(/\s/g, ""));
    }, 100);
  });
}
function encrypt(input, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input.split("").reverse().join(""));
    }, 100);
  });
}
compress("the secret key is 123543")
  .then((result) => encrypt(result))
  .then((result) => console.log(result));


//task4
function process(places) {
    return new Promise((resolve, reject) => {
        let output = places.map((place) => place.name).join(', ');
        setTimeout(() => resolve(output), 1000);
    });
}

async function academy() {
    try {
        let places = await fetch("https://academy-api.vercel.app/api/places.json");
        places = await places.json();
        let output = await process(places);
        console.log(output);
    } catch (error) {
        console.log("An error occurred", error);
    }
}
academy();



   