const extractCurrencyValue = (string, rate) => {
  let result = string.substr(1) * rate;
  return result;
};

console.log(extractCurrencyValue('$120', 30)); // THB3600
