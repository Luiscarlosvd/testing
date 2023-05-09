// task 1 tests

const stringLength = require('./index')

test("When a string value is given to the function", () => {
  //Arrange
  const validWord = 'Mountain'

  //Act
  const receivedCharValues = stringLength(validWord);

  //Assert
  expect(receivedCharValues).toBe(8);
});

test("when the string is less than or bigger than 10", () => {
    //Arrange
    const validWord = 'Paralelepipedo'
    const error = 'String is bigger than 10 or less than 0!';
  
    //Act
    const receivedCharValues = stringLength(validWord);
  
    //Assert
    expect(receivedCharValues).toBe(error);
});

// task 2

function reverseString(string) {
    let output = [];
    let word = string.split('');
    for (let i = word.length; i >= 0; i--) {
      output.push(word[i]);
    }
    return output.join('');
}

test("When you want to reverse a string it returns the right value", () => {
    //Arrange
    const validWord = 'Mountain'
  
    //Act
    const receivedCharValues = reverseString(validWord);
  
    //Assert
    expect(receivedCharValues).toBe('niatnuoM');
});

// task 3

class calculator {
    constructor(x, y) {
        this.number1 = x;
        this.number2 = y;
    }

    add(){
        return this.number1 + this.number2;
    }

    substract(){
        return this.number1 - this.number2;
    }

    divide(){
        return this.number1 / this.number2;
    }

    multiply(){
        return this.number1 * this.number2;
    }
}

describe('calculator', () => {
    // sum
  test('returns the right sum of numbers', () => {
    //Arrange
    const result = new calculator(28, 32);
  
    //Act
    const receivedResult = result.add();
  
    //Assert
    expect(receivedResult).toBe(60);
  });
  test('returns the right sum of numbers when there are decimal numbers', () => {
    //Arrange
    const result = new calculator(28, 32.2);
  
    //Act
    const receivedResult = result.add();
  
    //Assert
    expect(receivedResult).toBe(60.2);
  });

  // substract
  test('returns the right substract of numbers', () => {
    //Arrange
    const result = new calculator(71, 21);
      
    //Act
    const receivedResult = result.substract();
      
    //Assert
    expect(receivedResult).toBe(50);
  });
  test('returns the right substract of numbers when the result is less than 0', () => {
    //Arrange
    const result = new calculator(20, 32);
      
    //Act
    const receivedResult = result.substract();
      
    //Assert
    expect(receivedResult).toBe(-12);
  });

  // divide
  test('returns the right result by dividing numbers', () => {
    //Arrange
    const result = new calculator(36, 4);
      
    //Act
    const receivedResult = result.divide();
      
    //Assert
    expect(receivedResult).toBe(9);
  });
  test('returns the right result by dividing numbers and the result is a decimal', () => {
    //Arrange
    const result = new calculator(22, 3);
      
    //Act
    const receivedResult = result.divide();
      
    //Assert
    expect(receivedResult).toBe(7.333333333333333);
  });

  // multiply
  test('returns the right multiply of numbers', () => {
    //Arrange
    const result = new calculator(33, 32);
      
    //Act
    const receivedResult = result.multiply();
      
    //Assert
    expect(receivedResult).toBe(1056);
  });
  test('returns the right multiply of numbers when a number is a decimal', () => {
    //Arrange
    const result = new calculator(72, 24.2);
      
    //Act
    const receivedResult = result.multiply();
      
    //Assert
    expect(receivedResult).toBe(1742.3999999999999);
  });      
});

// task 4

test('returns the same string with the first letter capitalized', () => {
    //Arrange
    const string = 'capitalized'
      
    //Act
    const receivedResult = capitalized(string);
      
    //Assert
    expect(receivedResult).toBe('Capitalized');
});   

function capitalized(string){
    let output = string[0].toUpperCase() + string.slice(1);
    return output;
}


