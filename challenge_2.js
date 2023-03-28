const letterAtPosition = (number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet[number - 1];
  if (letter === undefined) {
    return "invalid";
  }
  return letter;
};

console.log(letterAtPosition(1));
console.log(letterAtPosition(26.0));
console.log(letterAtPosition(0));
console.log(letterAtPosition(4.5));
