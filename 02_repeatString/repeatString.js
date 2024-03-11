let result = "";

function repeatString(string, num) {
    result = string
    if (num === 0) {
        result = ''
    } else if (num < 0) {
        result = "ERROR"
    }

    for (let i = 0; i < num - 1; i++) {
    result += string;
    }
return result;
}



// Do not edit below this line
module.exports = repeatString;
