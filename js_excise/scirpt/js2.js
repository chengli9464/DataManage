//定义person对象有三个属性

let person = {
  name: 'sss',
  age: 12,
  score: '60',
};
//delete动态删除属性
delete person.name;
console.log(person.age);
//判断属性是否在对象中
let a ='age' in person;
console.log(a);