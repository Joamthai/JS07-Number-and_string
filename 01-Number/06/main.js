function random(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

console.log(random(10, 20));
