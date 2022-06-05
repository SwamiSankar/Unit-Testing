const sum = (str) => {
  const values = str.split(',');

  let value = 0;
  for (let num of values) {
    value = value + Number(num);
  }
  return value;
};

module.exports = sum;
