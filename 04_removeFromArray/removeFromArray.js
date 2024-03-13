function removeFromArray(arrayProvided, ...toRemove) {
    let newArr = [];
    arrayProvided.forEach(element => {
        if (!toRemove.includes(element)) {
            newArr.push(element);
          }
    });
return newArr;
}

//Find the index of the array element you want to remove using indexOf, 
//and then remove that index with splice

// Do not edit below this line
module.exports = removeFromArray;
