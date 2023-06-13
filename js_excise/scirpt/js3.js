let i = 9;
if (i > 0) {
  alert(i);
} else {
  alert(Math.abs(i));
}

while (i < 20) {
  console.log(i);
  i++;
}
console.log('===========');
for (let i = 1; i < 15; i++) {
  console.log(i);
}
//遍历数组
let arr = [0, 1, 12, 34, [2, 3], [2, 6, 8]];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}
console.log('=====================');
//for of 遍历数组 for in遍历下标
let array = [1, 2, 3, 3, 4, 32, 45];
for (let x of array) {
  console.log(x);
}
console.log('=====================');
let array1 = [1, 2, 3, 3, 4, 32, 45];
for (let x in array1) {
  console.log(x);
}