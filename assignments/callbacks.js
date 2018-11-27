// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
 // function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
 // }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
   return cb(arr.length);
}

getLength(items,function(getL) {
  console.log(getL);
});



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items,function(lastItem) {
  console.log(lastItem);
});



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
 sumNums(4,5,function(sumItUp) {
   console.log(sumItUp);
 });



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

multiplyNums(25,12,function(iDontKnow){
  console.log(iDontKnow);
});


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.includes(item) ? cb(true) : cb(false);
  };

contains("Gum",items,function(isContainedWithin) {
  console.log(isContainedWithin);
}
);

contains("Hockey_Stick",items,function(isContainedWithin) {
  console.log(isContainedWithin);
}
);



/* STRETCH PROBLEM */



const itemsExtended = [,'Pencil', 'Notebook', 'yo-yo', 'Gum','Pen', 'Calculator', 'Eraser', 'Gum'];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newSet= new Set(array);
  console.log(newSet)
    cb(newSet);
}

removeDuplicates(itemsExtended,function(removeDupes) {
  console.log(removeDupes);
});