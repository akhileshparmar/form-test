// Find the First Non-Repeating Character in a String
const str = "aabbcddcef";

const count = {};

for (let x of str) {
  if (x in count) {
    count[x] = count[x] + 1;
  } else {
    count[x] = 1;
  }
}

for (let x of str) {
  if (count[x] === 1) {
    console.log("First non repeating char - ", x);
    return;
  }
}
