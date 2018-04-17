var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newArray new Array();
  newArray += element
  newArray += array
  array = newArray
}
