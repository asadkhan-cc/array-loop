// ===========================Task 1===========================
console.log("===========================Task 1===========================");
let arr = [[], [], []];
console.table(arr);
// ===========================Task 2===========================
console.log("===========================Task 2===========================");

let mul_array = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
console.table(mul_array);
// ===========================Task 3===========================
console.log("===========================Task 3===========================");

function count(params) {
  for (let index = 0; index < params; index++) {
    console.log(index);
  }
}

count(10);
// ===========================Task 4===========================
console.log("======Task 4 click the button======");

function mul_table(a, b) {
  for (let i = 0; i < b; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
}
function myFunction() {
  let Table = prompt("please enter the number of which table you want", "5");
  let instances = prompt("add number of multiples of table","10");
  if (Table != null && typeof(Number(instances)) == "number" && instances != null && typeof(Number(instances)) == "number") {
        mul_table(Table,instances);

  }else{
    alert("kindly add numbers only");
    // myFunction();
    console.log("table =",Table,"instance is",instances)
  }
}
// ===========================Task 5===========================
console.log("===========================Task 5===========================");
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
fruits.forEach((value,index) => { console.log(value); });