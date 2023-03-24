console.clear();

/* --------------------------------------- */
console.log("-----------------------------");
console.log("1. while");

/* 1. The while loop */

let whileValue = "a";
while (whileValue.length <= 8) {
  console.log(whileValue);
  whileValue = whileValue + "a";
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("2. for");

/* 2. The for loop */

for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("3. for...in");

/* 3. The for..in loop */

const user = {
  name: "Alex",
  email: "alex@mail.com",
  avatar: "avatar.png",
};

for (const key in user) {
  console.log(key);
  console.log(user[key]);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("4. for...of");

/* 4. The for..of loop */
console.log(Object.values(user));
const fruits = ["apple", "banana", "mango"];
for (const value of fruits) {
  console.log(value);
  // const key = value[0];
  // const actualValue = value[1];
  // console.log(key);
  // console.log(actualValue);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("Bonus: do-while");

/* Bonus: do-while */
let counter = 5;
do {
  console.log(counter--);
} while (counter > 0);
