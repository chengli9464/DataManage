//局部变量
//var声明的变量在函数外无法使用
//两个函数使用相同的变量名，但是在不同的函数中不冲突
//函数嵌套，内部函数可以访问外部函数成员，外部函数无法访问内部函数成员
//js函数查找变量有内到外查找，先查找内部函数，没有再查找外部函数
//所有函数的变量声明，都放在函数最前面

function func() {
  var a = 1;
  a = a + 1;
  console.log(a);
}

//定义唯一全局变量,使用自己的命名降低冲突

var chengli = {};
//定义变量
chengli.name = 'chengli';
//定义函数
chengli.func1 = function (a, b) {
  let c = a + b;
  console.log(c);
};
chengli.func1(1, 2);

// 对象内部的函数：方法 对象只有两个东西，属性与方法
//this关键字始终指向调用他的人
let student = {
  name: function (a) {
    console.log(a);
  },
};
student.name('沈橙梨');
