//JSON文件
let users = {
  name: 'chengli',
  age: '25',
  sex: '男',
};
console.log(users);
//对象转为json字符串 JSON.stringify()
let jsonUsers = JSON.stringify(users);
console.log(jsonUsers);
//json字符串转为对象 JSON.parse()
let users_1 = JSON.parse(jsonUsers);
console.log(users_1);
/* 
创建类
class ClassName {
  //构造函数，放类的参数
  constructor() { ... }
  //方法
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/
class person {
  constructor(mail, nationality) {
    this.mail = mail;
    this.nationality = nationality;
  }
  person() {
    console.log('我的国籍是' + this.nationality + ' ' + '我的email是' + this.mail);
  }
}
class student_1 extends person {
  constructor(name,nationality,mail,age, grade) {
    super(mail,nationality);
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  print(x) {
    if (x == 1) {
      console.log('我是' + this.name + '我的年龄是' + this.age + '我的年级是' + this.grade);
    } else {
      console.log('参数不为1');
    }
  }
}

//创建类的实例时需要加上类的参数
let shen = new student_1('沈橙梨', '25', '研究生二年级');
//实例对象可以调用类的方法
shen.print(1);
shen.print(2);
let cheng =new student_1('沈橙梨','中国','chengli9464@163.com',25,'研究生二年级');
cheng.person();
cheng.print(1);
