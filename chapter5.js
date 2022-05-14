
// Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of
//  arrays into a single array that has all the elements of the original arrays.



let array = [[1,2],[3,4]]
function flatten (Array) {
  return array.reduce((a,b) => a.concat(b))
}

console.log(flatten(array))


//  Homemade Every Method with for loop
function every (array,test) {
  let checked = []
  for (element of array) {
    checked.push(test(element))
    for (boolean of checked ) {
      if (true)
      return true 
    }
  }
  // return true
  return checked
}

console.log(every([123,16,15,14], a => a % 3 === 0)
