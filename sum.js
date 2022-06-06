const sum = (str) => {
  //Creating array of numbers out of string
  const values = str.replace(/\n/g, ',').split(',');
  console.log(values);

  //Initial Value
  let value = 0;

  //Looping for each number in values
  for (let num of values) {
    //Converting the type to number and adding to the value
    if (num < 0) {
      return 'Negatives Not Allowed';
    }
    value = value + Number(num);
  }

  //Returning the value
  return value;
};

module.exports = sum;
