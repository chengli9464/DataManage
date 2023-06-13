//Map 类似于字典，一个key，一个值
let map = new Map([
  ['tom', 100],
  ['jack', 90],
  ['sam', 80],
]);
let tomScore = map.get('tom');
map.set('xiaoming', 60);
map.delete('xiaoming');
console.log(tomScore);
console.log(map);
//set 无序集合
let set = new Set([1, 1, 1, 1, 1, 1, 3]); //可以去重，打印出来只有1和3
console.log(set);
console.log('=================');
// for of 遍历map
for (let x of map) {
  console.log(x);
}
