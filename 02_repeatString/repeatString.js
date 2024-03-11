let result = "";

function repeatString(string, num) {
    result = string
    for (let i = 0; i < num - 1; i++) {
    result += string;
}
return result;
}



// Do not edit below this line
module.exports = repeatString;
