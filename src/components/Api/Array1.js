import React from 'react'

// var a = [1,3,2,3,3];
// var unique = Array.from(new Set(a));
// console.log(unique);
// console.log(typeof(unique));


// let b = [...new Set(a)];
// console.log(b);



    // var array = [1,3,2,3];         
    // var outputArray = [];
    // var count = 0;
    // var start = false;
    //  let i;
    //  let j;
     
    // for (i = 0; i < array.length; i++) {
    //     for (j = 0; j < outputArray.length; j++) {
    //         if ( array[i] === outputArray[j] ) {
    //             start = true;
    //         }
    //     }
    //     count++;
    //     if (count === 1 && start === false) {
    //         outputArray.push(array[i]);
    //     }
    //     start = false;
    //     count = 0;
    // }

    // console.log(outputArray);

// /////////////////////////////////////////////////////count
//     var count=0;
//     var arr = [1,2,3,2,3];
//     for(var i = 0; i<arr.length; i++){
//       // console.log(arr[i])
//       for(var j = i+1; j<arr.length; j++){
//         // console.log(arr[i]);
//         if(arr[i] === arr[j]){
//           count++;
//           break;
//         }
//       }
//     }
//     console.log("duplicate elements" + count);

// //////////////////////////////////////////////////


// const myArray2 = [1,2,3,1,6,3];
// const elementCounts2 = {};

// myArray2.forEach(element => {
//   // console.log(elementCounts2);
//   elementCounts2[element] = (elementCounts2[element] || 0) + 1;
//   // console.log(elementCounts2);
// });

// console.log(elementCounts2);




// const myArray = ['a', 'b', 'c', 'c', 'b', 'd','c'];

// let uniqueElements = [...new Set(myArray)];
// console.log(uniqueElements);
// const elementCounts = uniqueElements.map(value => [value, myArray.filter(str => str === value).length]);
// console.log(elementCounts);



const Array1 = () => {
  return (
    <div></div>
  )
}

export default Array1