let unSortedArray = [7, 7, 8, 9, 9, 9, 9, 12, 14, 8, 5, 15, 9, 16, 11, 17, 5, 5]
let sortedArray = [];
console.log("Unsorted Array ",unSortedArray)
function mode(array) {
     if (array.length == 0)
          return null;
     var modeMap = {};
     var maxEl = array[0], maxCount = 1;
     for (var i = 0; i < array.length; i++) {
          var el = array[i];
          if (modeMap[el] == null)
               modeMap[el] = 1;
          else
               modeMap[el]++;
          if (modeMap[el] > maxCount) {
               maxEl = el;
               maxCount = modeMap[el];
          }
     } return maxCount
}
const tempLength = mode(unSortedArray)


unSortedArray.sort(function (a, b) { return a - b });

for (let i = 0; i < tempLength; i++) {     
     let temp = []
     let indexToRemove = []

     for (let j = 0; j < unSortedArray.length; j++) {
          if (!temp.includes(unSortedArray[j])) {
               temp.push(unSortedArray[j])
               indexToRemove.push(j)
          }
     }
     console.log("sortedArray  ",sortedArray)
     console.log("unSortedArray  ",unSortedArray)
     console.log("indexToRemove  ",indexToRemove)
     indexToRemove.forEach((el, i) => { unSortedArray.splice(el - i, 1) })
     sortedArray.push(...temp);
}
console.log("----")
console.log("---")
console.log("--")
console.log("-")
console.log("Sorted Aray ", sortedArray)
