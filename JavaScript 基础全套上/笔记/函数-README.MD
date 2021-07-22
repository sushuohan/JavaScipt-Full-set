# 函数是什么
1. 函数是一个对象
2. 函数中可以封装一些功能(代码)，在需要时可以执行这些功能(代码)
3. 函数中可以保存一些代码在需要的时候调用
4. 使用 typeof 检查一个函数对象时，会返回 function

# 如何创建一个函数对象
1. 使用构造函数 -- 专门创建对象的函数
语法：`var 函数名 = Function('JS语句')`
```js
var fun = Function("console.log('这是我的第一个函数');");
console.log(fun); // function
fun(); // '这是我的第一个函数'
```
2. 使用函数声明
语法：`function 函数名(){语句...}`
```js
function fun(){
    console.log('这是我的第二个函数');
}
fun();  // '这是我的第二个函数'
```
3. 使用函数表达式
语法：`var 函数名 = function(){语句...}`
```js
var fun = function(){
    console.log('这是我的第三个函数');
}
fun();  // '这是我的第三个函数'
```

# 函数的参数
函数参数：定义函数的时候指定形参，调用函数的指定实参
* 调用函数时，实参传递给形参，且解析器不会判断实参的类型
```js
function sum(a, b) {
    console.log(a + b);
}
sum('123', 3);  // '1233'
```
* 调用函数时，实参传递给形参，且解析器不会判断实参的数量
1. 如果实参的数量多于形参的数量，那么多余实参不会赋值
```js
function sum(a, b) {
    console.log(a + b);
}
sum(123, 456, '123', true); // 579
```
2. 如果实参的数量少于形参的数量，那么多余的形参将被赋值为 undefined
```js
function sum(a, b) {
    console.log(a + b);
}
sum('123'); // '123undefined'
```

# 函数的返回值
函数返回值：return 后的语句也就是一个函数的返回值
* 需要注意
1. 所谓的函数返回值，也就是调用该函数将返回一个值
2. 如果 return 语句不写或者 return 语句后不跟东西，那么调用该函数的返回值将成为 undefined
* 自定义场景 -- 求三个数的和
```js
function sum(a, b, c) {
    return a + b + c;
}

var number1 = +prompt('请输入一个数字'); // 22
var number2 = +prompt('请再输入一个数字'); // 33
var number3 = +prompt('请再输入一个数字'); // 44

result = sum(number1, number2, number3);

console.log(result); // 99
```

# 实参的类型
实参类型：实参可以为任意的类型
* 实参为一个对象 -- 创建一个函数，可以在控制台内输出一个人的信息
```js
function People1(p) {
    console.log('我叫' + p.name + '，今年' + p.age + '岁，' + '我是' + p.gender + '的，我来自' + p.address);
}

var people = {
    name: 'xiaosu',
    age: 19,
    gender: '男',
    address: 'HuBei'
}

People1(people); // 我叫xiaosu，今年19岁，我是男的，我来自HuBei
```
* 实参为一个函数 -- 二个函数，一个用来输入数据，一个用来判断是否为质数
```js
function fun1(){
    return (prompt('请输入一个整数'));  // 7
}

function fun2(a){
    var flag = true;

    for(var i = 2;i <= Math.sqrt(a);i++){
        if(a % i == 0){
            flag = false;
            break;
        }
    }

    if(flag{
        console.log('是质数');
    }else{
        console.log('不是质数');
    }
}

fun2(fun1());  // '是质数'
```

# 返回值的类型
返回值类型：返回值可以为任意的类型
* 返回值为对象
```js
function fun(){
    var obj = {
        name:'susu',
        age:19
    };
    return obj;
}
console.log(fun());  // {name: "susu", age: 19}
```
* 返回值为函数
```js
function fun(){
    function fun1(){
        console.log('我是 fun1 函数');
    }
    return fun1()
}
fun();  // '我是 fun1 函数'
```

# 立即执行函数
立即执行函数：函数定义完立即被调用且只会执行一次(通俗来讲就是不将函数赋值给变量，而是直接来调用)
* 不传递参数的立即执行函数
```js
(function(){
    console.log('立即执行函数1');
})();  // '立即执行函数1'
```
* 传递参数的立即执行函数
```js
(function(a, b){
    console.log(a + b);
})(123, 456);  // 579
```

# 函数充当对象的方法
函数可以称为对象的属性(方法)

如果一个函数作为一个对象的属性保存，那么我们称这个函数为这个对象的方法
```js
var obj = {
    name: 'susu',
    age: 19,
    sex: 'man',
    sayName: function () { // 此方法(函数)用来返回对象中的 name 属性
        return obj.name;
    }
}

console.log(obj.sayName()) // 'susu'
```
* 枚举对象中的属性
1. 首先判断属性是否存在
```js
var obj = {
    name: 'susu',
    age: 19,
    sex: 'man'
}
console.log('name' in obj);  // true
console.log('sss' in obj);  // false
```
2. 然后找出对象中的属性及对应的值
* for...in 语句
对象中有几个属性，循环体就会执行几次

每次执行时会将对象中的一个属性的名字赋值给变量
```js
var obj = {
    name: 'susu',
    age: 19,
    sex: 'man'
}

for(var i in obj){
    console.log(i + ':' + obj[i]);
}
// 输出 name:susu age:19 sex:man
```

# 作用域的练习
```js
var d = 123;
function fun3(d){
    console.log(d);
    d = 456;
}
fun3(123); // 123
console.log(d); //123
```
