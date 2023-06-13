//内部
let student = {
  name: '沈橙梨',
  birth: 1998,
  age: function getAge() {
    let a = new Date().getFullYear();
    return a - this.birth;
  }
};
console.log(student.age());

//外部
//this关键字默认指向调用它的那个对象
function getAge1() {
  let a = new Date().getFullYear();
  return a - this.birth;}
let student1 = {
  name: '沈橙梨',
  birth: 1998,
  age: getAge1
};
console.log(student1.age());
getAge1();//输出NAN，此时函数的this指向的window window没有birth这个属性
//js中apply函数可以控制this的指向
getAge1.apply(student1,[]);//第一个参数为指向的对象，第二个为该函数的参数