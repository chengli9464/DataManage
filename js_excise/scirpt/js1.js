// alert('hello world!');

// let a = 123;
// let b = 123.6;
// alert(a);
// alert(b);
console.log(1 == '1'); //= =等于 类型不同 值相同判断为true
console.log(1 === '1'); //类型相同且值相同
isNaN(NaN); //NaN只能用isNaN判断
//字符串
let stu = 'student';
console.log(stu[0]);
console.log(stu.toUpperCase());
console.log(stu.substring(1)); //截取第二个到最后一个字符
console.log(stu.substring(1, 3)); //[2,4)
//数组
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
//数组可变
arr[1] = 10;
//长度可变
arr.length = 10;
//slice()截取array的一部分
arr.slice(1, 5); //[2,6)
//push()在数组后面添加数据
arr.push('a', 'b');
//pop()在尾部删除一个数据
arr.pop();
//unshift()往头部添加预算
arr.unshift('1', 3);
//往头部删除数据
arr.shift();
//排序 按照unnicode进行排序sort()
arr.length = 7;
let arr1 = ['c', 'b', 'a'];
console.log(arr1.sort());
// reverse()元素反转
arr1.reverse();
//concat()添加元素，返回一个新的数组。原数组不变
let arr2 = arr1.concat(1, 2, 3);
console.log(arr1);
console.log(arr2);
//join 打印拼接数组
console.log(arr1.join('-'));
//多维数组
let arr3 = [
  [1, 2, 3],
  [1, 2],
  [4, 5, 6],
];
console.log(arr3);

for (let i = 0; i < 3; i++) {
  let i = 'abc';
  const a = () => {
    console.log(i);
  };
  a();
}
console.log(typeof abc);
var abc = null;
var abc = 123;
console.log(typeof abc);
let abcd = 1;
console.log(abcd);

{
  const foo = {};
  // 为 foo 添加一个属性，可以成功
  foo.prop = 123;
  foo.prop; // 123
  console.log(foo);
}

const node = {
  loc: {
    start: {
      line: 1,
      column: 5,
    },
  },
};

let {
  loc,
  loc: { start },
  loc: {
    start: { line },
  },
} = node;
console.log(loc);
console.log(start);
console.log(line);
console.log([[1], [2, 3]].map(([a, b]) => a + b));

// [ 3, 7 ]
const obj = {
  name_: '蛋老师',
  id: '1',
  age: '25',
  gender: '男',
  email: 'chengli9464@163.com',
};
const { id } = obj;

console.log(id);

console.log('\u005c');

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template) {
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script = `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${template}

    return output;
  })`;

  return script;
}

let parse = eval(compile(template));
// document.write(parse({ supplies: ['broom', 'mop', 'cleaner'] }));
document.getElementById('test').innerHTML = parse({ supplies: ['broom', 'mop', 'cleaner'] });

let a = 5;
let b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return 'OK';
}

tag`Hello ${a + b} world ${a * b}`;
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"

let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
let msg2 = passthru(['The total is ', ' ( with tax)', ''], 30, 31.05);
function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg); // "The total is 30 (31.5 with tax)"
console.log(msg2); // "The total is 30 (31.5 with tax)"

let a1 = 0.1;
let a2 = 0.2;

//浮点数的计算
if (0.3-(a1+a2) <Number.EPSILON){
  console.log('True');
}
else{
  console.log('False');
}

document.write(
  `<ul class="nav">
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
    </ul>
  `);
const lis =document.querySelectorAll('.nav li');
console.log(lis);

for(let i =0;i<lis.length;i++){
  console.log(lis[i]);
  lis[i].style.color = 'red';
}

for (const li of lis) {
  console.log(li);
  li.style.color = 'green';
}
