# 表示方法
1. 如果需要表示 16 进制的数字，则需要以 0x 开头
2. 如果需要表示 8 进制的数字，则需要以 0 开头
3. 如果需要表示 2 进制的数字，则需要以 0b 开头

* 需要注意的是像 077 这种数据，有些浏览器会当成 8 进制解析，有些会当成 10 进制解析，我们利用方法 parseInt(str, 10) 第一个参数是待转换的字符串，第二个参数是以何种进制转换
```js
var str = '070';
var number4 = parseInt(str, 10);
var number5 = parseInt(str, 8);
console.log(number4);  // 70
console.log(number5);  // 56
```