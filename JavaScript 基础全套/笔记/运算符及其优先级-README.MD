# 运算符
* 运算符也叫操作符，通过运算符可以对一个或多个值进行运算，并获取运算结果
1. 比如：typeof 运算符可以获得一个值的类型，它会将该值的类型以字符串的形式返回
```js
var str = typeof('110');
console.log(str);  // string
```


# 算术运算符
1. 算术运算符可以对两个值进行运算，并将结果返回(-\*\/\%)
* 当对非 Number 类型的值进行运算时，会将这些值转换为 Number 后再进行运算(此规范符合加法之外的其它运算)
```js
var str = '123';
var number = str - 10;
console.log(number);  // 113
```
* 当对 Number 类型的值进行运算时，直接进行算术上的运算(任何值和 NaN 运算结果都为 NaN)
```js
var number = 10 + 10;
console.log(number);  // 20
```
* 任何值做以上运算时都会自动转换为 Number，可以利用这一特点进行隐式类型转换(实际调用 Number() 方法)
```js
var str = '11';
var number = str - 0;
console.log(number);  // 11
```

2. 算术运算符可以对两个值进行运算，并将结果返回(以下规范符合加法运算)
* 如果对两个字符串进行加法运算，则会做拼串，会将二个字符串拼接成一个字符串
```js
var str = '123';
var str1 = '123' + str;
console.log(str1);  // '123123'
```
* 任何值和字符串做加法运算，都会先转换为字符串，然后再和字符串做拼串的操作
```js
var number = 1314
var str = number + '123'
console.log(str1);  // '1314123'
```
* 利用这一特点，来将一个任意类型转换为 String(称为隐式转换)，实际上是调用 String() 方法
```js
var number = 110;
var str = number + '';
console.log(str)  // '110'
```



# 一元运算符
* 对于 Number 类型的数据
1. 正号：不会对原数据产生影响
```js
var number = 1;
console.log(+number);  // 1
```
2. 负号：会对原数据进行取反操作(即加一个负号)
```js
var number = 1;
console.log(-number);  // -1
```
* 对于非 Number 类型的数据(实际上调用了 Number() 函数)
1. 正号：将其它类型的数据转换成 Number 类型
```js
console.log(+true);  // 1
console.log(+undefined)  // NaN
console.log(+null);  // 0
console.log(+'123');  // 123
```
2. 负号：将其它类型的数据转换成 Number 类型
```js
console.log(-true);  // -1
console.log(-undefined)  // NaN
console.log(-null);  // -0
console.log(-'123');  // -123
```



# 自增和自减运算符
* 自增(自减类似)：通过自增可以使变量在自身的基础上增加 1
* 对一个变量自增以后，原变量的值会立即增加 1
* 自增分成二种：前++(++a) 和 后++(a++)
1. 无论是前++，还是后++，都会立即使原变量的值增加 1
2. 不同的是，a++ 和 ++a 的值不同，a++ 是自增之前的值，而 ++a 是自增之后的值
* 自增练习
```js
var number3 = 20;
console.log(++number3 + number3++ + number3);  // 64
```
* 自减练习
```js
var number3 = 20;
console.log(--number3 - number3-- - number3);  // -18
```



# 逻辑运算符
* JS 中提供了三种逻辑运算符(!\&&\||)
## 非运算
1. 对于布尔值的非运算
* 可以对一个值进行非运算
```js
var bool = !true;
```
* 所谓非运算就是对一个布尔值进行取反操作(true 变 false，false 变 true)
```js
var bool = true;
console.log(!bool);  // false
```
* 如果对一个值进行两次取反，它不会变化
```js
var bool = true;
console.log(!!bool);  // true
```
2. 对于非布尔值的非运算
* 如果对非布尔值进行取反，则会先转换成布尔值，然后再取反
```js
console.log(!'1');  // false
console.log(!1);  // false
```
* 可以为一个任意数据类型取二次反来将其转换为布尔值(原理和 Boolean() 函数一样)
```js
console.log(!!0);  // false
console.log(!!null);  // false
console.log(!!NaN);  // false
console.log(!!undefined);  // false
```


## 与运算
1. 对于布尔值的与运算
* 可以对二个值进行与运算
```js
var bool = true && true;
```
* 所谓与运算就是对二个布尔值进行与操作(二个值都是 true 则返回 true，凡是出现了 false 则返回 false)
```js
console.log(true && true);  // true
console.log(false && true);  // false
console.log(false && false);  // false
```
* && 的执行范围先看第一个值，如果第一个值是 true，则执行第二个值；如果第一个值是 false，则不执行第二个值
```js
true && console.log('1');  // '1'
false && console.log('1');  // 
```
2. 对于非布尔值的与运算
* 对于非布尔值进行与运算时，会先将其转换为布尔值，然后再运算，并且返回原值
* 原值返回的确定方法如下：
1. 如果第一个值转换后的布尔值是 true，返回的原值是第二个
```js
console.log(1 && 2);  // 2
console.log(2 && undefined);  // undefined
```
2. 如果第一个值转换后的布尔值是 false，返回的原值是第一个
```js
console.log(0 && 1); // 0 
console.log(null && 2); // null
```


## 或运算
1. 对于布尔值的或运算
* 可以对二个值进行或运算
```js
var bool = true || true;
```
* 所谓与运算就是对二个布尔值进行或操作(二个值都是 false 则返回 false，如果存在 true 则返回 true)
```js
console.log(true || true);  // true
console.log(false || true);  // true
console.log(false || false);  // false
```
* || 的执行范围先看第一个值，如果第一个值是 false，则执行第二个值；如果第一个值是 true，则不执行第二个值
```js
true || console.log('2');  // 
false || console.log('2');  // '2'
```
2. 对于非布尔值的或运算
* 对于非布尔值进行或运算时，会先将其转换为布尔值，然后再运算，并且返回原值
* 原值返回的确定方法如下：
1. 如果第一个值转换后的布尔值是 true，返回的原值是第一个
```js
console.log(1 || 2);  // 1 
console.log('123' || 3);  // '123' 
```
2. 如果第一个值转换后的布尔值是 false，返回的原值是第二个
```js
console.log(0 || 1);  // 1
console.log(0 || null);  // null

```

# 赋值运算符
* 赋值运算符：可以将等号右边的值赋予给左边的变量
1. =(等于)
2. +=(加等于)
3. -=(减等于)
4. *=(乘等于)
5. /=(除等于)
6. %=(取模等于)



# 关系运算符
* 通过关系运算符可以比较二个值之间的大小关系，如果关系成立则返回 true，否则返回 false
1. 数值情况
* 大于号(>)
* * 判断符号左边的值是否大于右侧
* * 如果关系成立则返回 true，否则返回 false
* 小于号(<)
* * 判断符号左边的值是否小于右侧
* *如果关系成立则返回 true，否则返回 false
* 大于等于号(>=)
* *判断符号左边的值是否大于等于右侧
* *如果关系成立则返回 true，否则返回 false
* 小于等于号(<=)
* *判断符号左边的值是否小于等于右侧
* *如果关系成立则返回 true，否则返回 false
2. 非数值情况
* *先转换为数值然后再比较
* *任何值和 NaN 作任何比较结果都是 false
```js
console.log(1 > '124');  // false
```
* 如果符号二侧都是字符串，不会将其转换为数值进行比较，而会分别比较字符串中的 Unicode 编码
```js
console.log('111' < '5');  // true
```



# 相等运算符




# 条件运算符


