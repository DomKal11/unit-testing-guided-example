function sum(a, b) {
  if(a, b){
    return a+b;
  }
  else if(a && !b){
    return a+0;
  }
  else if(!a && b){
    return b+0;
  }
  else {return 0;}

}

function subtract(a, b) {
  if(a, b){
    return a-b;
  }
  else if(a && !b){
    return a-0;
  }
  else if(!a && b){
    return b-0;
  }
  else {return 0;}
}

function divide(a, b) {
  if(a === 0 || b === 0){
    throw new Error("Cannot divide by 0");
  }
  else {return a/b;}
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
