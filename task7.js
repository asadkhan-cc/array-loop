function task7() {
 
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let checker = prompt("check the inventory", "");
if (checker != null) {
  let flag = false;
  for (let i = 0; i < A.length; i++) {
    if (checker == A[i]) {
      alert(`${checker} is available at index ${i} of our bakery`);
      flag = true;
      break;
    }
  }
  if (flag == false) {
    alert(`${checker} is not available`);
  }
}   
}

let A = [24, 53, 78, 91, 12]
console.log("Max in array is"); 
console.log(Math.max(...A)); 

console.log("Man in array is"); 
console.log(Math.min(...A)); 
