const sumAll = function(x, y) {
    let sumCalc = 0
    for (let step = x; step <= y; step++) {
        // Runs 5 times, with values of step 0 through 4.
        sumCalc += step
      }
    return sumCalc
};

// Do not edit below this line
module.exports = sumAll;
