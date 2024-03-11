let givenString

function reverseString(givenString) {
    let splitString = givenString.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}


//note: need to convert string into array then back into string
// Do not edit below this line
module.exports = reverseString;
