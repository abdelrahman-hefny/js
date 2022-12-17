ab = [1, 2, 3, 4, 5, 6, 7, 8];
// ad = [];
// for (let i = 0; i < ab.length; i++) {
//   ad.push(ab[i] + ab[i]);
// }
// console.log(ad);
// //////////////////////////////////////

// let a = ab.map(function( element,index,arr){
//     console.log(`corant e ${element}`);
//     console.log(`corant s ${index}`);
//     console.log(`corant b ${arr}`);
//     return element + element
// } , 10)
// console.log(a);
// //////////////////////////////////
// ab = [1, 2, 3, 4, 5, 6, 7, 8];

// let a = ab.map((m) => m +m )

// console.log(a);
// ////////////////////////////
function addi(elm){
    return elm + elm 
}

let add = ab.map(addi)
console.log(add);