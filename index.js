// task 1

function stringLength(string) {
  if(string.length <= 0 || string.length > 10){
    const error = 'String is bigger than 10 or less than 0!'
    return error;
  }
  let output = string.length;
  return output;
}

module.exports = stringLength;

// task 2

