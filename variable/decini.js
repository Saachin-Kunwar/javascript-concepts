// decleartion and initinization of variable



// if (true){
//     var x = 5;
// }
// console.log(x);

console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();