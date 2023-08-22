const truncate = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length);
};

console.log(truncate('Thailand', 5));
console.log(truncate('Thailand', 8));
console.log(truncate('Thailand', 16));
console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
console.log(truncate('Hi everyone!', 20)); // Hi everyone!
