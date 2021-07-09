# 强制类型转换
* 指将一个数据类型强制转换为其它的数据类型
* 类型转换主要指，将其它的数据类型，转换为 String、Number、Boolean



# 1-String(将其它的数据类型转换成字符串)
## 方法一：调用转换数据类型的 toString() 方法
```js
var number = 123;
var str = number.toSring();
console.log(typeof(str));  // string
```
* 特别注意：null 和 undefined 没有 toString 方法
```js
var n = null;
var str = n.toSring();  // 报错
```


## 方法二：调用 string() 函数
* 将转换的数据作为参数传递给函数
```js
var number = 123;
var str = String(number);
console.log(typeof(str));  // string
```
* 对于 Number 和 Boolean 实际上是调用了 toString() 方法
* 而对于 null 和 undefined，就不会调用 toString() 方法，它会直接将 null 转换为 'null'，将 undefined 转换为 'undefined'



# 2-Number(将其它数据类型转换成数值)
## 方法一：调用 Number() 函数
### 针对字符串
* 特别注意：字符串 --> 数字
1. 如果是纯数字的字符串，则直接将其转换为数字
```js
var str = '123';
var number = Number(str);
console.log(typeof(number));  // number
```
2. 如果字符串中有非数字的内容，则转换为 NaN
```js
var str = 'abc';
var number = Number(str);
console.log(number);  // NaN
```
3. 如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0
```js
var str = '   ';
var number = Number(str);
console.log(number);  // 0
```

### 针对布尔值
1. true --> 1
```js
var bool = true;
var number = Number(bool);
console.log(number);  // 1
```
2. false --> 0        
```js
var bool = false;
var number = Number(bool);
console.log(number);  // 0
```

### 针对null和undefined
1. null --> 0
```js
var n = null;
var number = Number(n);
console.log(number);  // 0
```
2. undefined --> NaN
```js
var u = undefined;
var number = Number(u);
console.log(number);  // NaN
```


## 方法二：调用 Number() 函数
* 调用 parseInt() 和 parseFloat() 函数，专门对付字符串
1. 前者把一个字符串转换为一个整数，可以将一个字符串中有效的整数内容取出来，然后转换为 number
```js
var str = '123px';
console.log(parseInt(str));  // 123
```
2. 后者把一个字符串转换为一个浮点数，可以将一个字符串中有效的整数和小数内容取出来，然后转换为 number
```js
var str = '123.456px';
console.log(parseFloat(str));  // 123.456
```
* 特别注意：如果对应非字符串
1. 第一步：将非字符串转换成字符串
2. 第二步：对转换后的字符串使用 parseInt() 或 parseFloat() 函数
```js
var bool = true;
console.log(parseInt(bool));  // NaN
```



# 3-bool(将其它数据类型转换成布尔值)
* 调用 boolean() 函数
1. 数字 --> 布尔值
* 除了 0 和 NaN，其余都是 true
```js
var number = 123;
var bool = Boolean(number);
console.log(bool);  // true
```
2. 字符串 --> 布尔值
* 除了空串，其余都是 true
```js
var str = '';
var bool = Boolean(str);
console.log(bool);  // false
```
3. null 和 undefined 都会转换成 false
```js
var n = null;
var bool7 = Boolean(n);
console.log(bool7);  // false

var u = undefined;
var bool8 = Boolean(u);
console.log(bool8);  // false
```