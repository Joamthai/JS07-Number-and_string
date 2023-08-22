const checkWord = (word) => {
  let lowWord = word.toLowerCase();
  return lowWord == 'xxx'
    ? true
    : lowWord == 'sex'
    ? true
    : lowWord == 'porn'
    ? true
    : false;
};

console.log(checkWord('YoYo'));
console.log(checkWord('sEX'));
console.log(checkWord('pOrn'));
