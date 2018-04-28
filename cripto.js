const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split("");

let key = process.argv[2];
const pairs = [];
for (i = 0; i < letters.length; i++) {
  let obj = {
    letter: letters[i],
    number: key
  };
  if (key === letters.length - 1) {
    key = 0;
  } else {
    key++;
  }
  pairs.push(obj);
}

// console.log(pairs)
const code = process.argv[3];
const codeItems = Array.from(code);

// TO DO: make it work with any alphanumeric code
const finals = codeItems.map(item => {
  const parsed = parseInt(item)
  const pair = pairs.find(pair => {
    if (pair.number == item || pair.letter == item) {
      return true;
    }
    return false
  })
  if (!isNaN(parsed)) {
    return pair.letter
  }
  return pair.number
});

console.log(finals.join(''));

