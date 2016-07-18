//forEach
//filter
//map
//reduce

//var vietnameseFoods = ['Pho', 'Dong Khan', 'Bahn Mi', 'Bun', 'Boba Tea'];

//forEach
//takes an array, and for each element in the array, pass that element into a callback function.
//vietnameseFoods.forEach(function(element, i, arr){
  //console.log('element is: ', element);
  //console.log('index is:', i);
//  console.log('array is:', arr);
//})

//function forEach(arr, fn) {
  //for (var i = 0; i < arr.length; i++) {
  //  fn(arr[i], i, arr)
//  }
//}

//filter takes an array and callback function that will be called for each element. If the callback function returns truthy, keep the element, otherwise don't.
var vietnameseFoods = ['Pho', 'Dong Khan', 'Bahn Mi', 'Bun', 'Boba Tea'];

var newArray = filter(vietnameseFoods, function(el, i, arr){
  if(el[0] === 'B') {
    return true;
  }
})


function filter(arr, fn) {
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
      var food = fn(arr[i], i, arr)
       if ( food === true ) {
       newArray.push(arr[i])
}
      }

      return newArray;
  }


console.log(newArray);
