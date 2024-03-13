const sumAll = function(x, y) {
    let sumCalc = 0
    
    if  ((x < 0 || y < 0) || 
        (isNaN(x) || isNaN(y)) || 
        ((typeof(x) === 'string') || (typeof(y) === 'string'))) {
            return "ERROR"
        } 
        
    else {

        if (x > y) {
            for (let step = y; step <= x; step++) {
                sumCalc += step
            } 
        } else {
            for (let step = x; step <= y; step++) {
                sumCalc += step
            }
        }
        
    }
    return sumCalc
};

// Do not edit below this line
module.exports = sumAll;
