function abs(x) {
  console.log('x=' + x);
  console.log(arguments.length);
  for (let i = 0; i <= arguments.length; i++) {
    console.log(arguments[i]);
  }
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
abs(1, 2, 3, 22, 32, 1, 3);
let abs1 = function (x) {
  //参数不为数字类型抛出异常
  if (typeof x !== 'number') {
    throw 'not a number';
  }
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
};
abs1(10);
console.log('==================');
//...变量名 可以读取函数后多余的参数
function aaa(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
aaa(1, 2, 454, 664);
