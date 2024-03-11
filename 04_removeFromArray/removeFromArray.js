function removeFromArray(arrayProvided, toRemove) {
    let indexToRemove = arrayProvided.indexOf(toRemove);
    if (indexToRemove > -1) { // only splice array when item is found
        arrayProvided.splice(indexToRemove, 1); 
    }
    return arrayProvided;
}

//Find the index of the array element you want to remove using indexOf, 
//and then remove that index with splice

// Do not edit below this line
module.exports = removeFromArray;
