# 语句的分类
1. 条件判断语句
2. 条件分支语句
3. 循环语句



# 条件判断语句
条件判断语句：使用条件判断语句可以在执行某个语句之前进行判断
1. 简单语法执行流程(且针对条件表达式是非布尔值的情况会自动调用 Boolean() 函数)
* 判断条件表达式，如果条件成立才会执行语句
* 判断条件表达式，条件不成立则语句不执行
```js
// 1. 布尔值
var bool = true
if(bool){
    console.log('你是猪');
}

// 2. 非布尔值
var age = 19;
if(age > 18){  // 转换为布尔值是 true
    console.log('你成年了');
}
```
2. 完整语法：
```js
if (条件表达式1) {
    (语句1)
} else if (条件表达式2) {
    (语句2)
} else if (条件表达式3) {
    (语句3)
} else {
    (语句4)
}
```
* if 语句在执行时，会先对第一个条件表达式进行求值判断
* 如果第一个条件表达式的值为 true，则执行 if 后的语句1
* 如果第一个条件表达式的值为 false，则判断第二个条件表达式，以此类推
* 直到找到符合条件的语句，并执行相关代码(如下符合条件表达式2)
```js
var age = 19;
if (age < 18) {
    console.log('小孩子，你还没成年哦！');
} else if (age >= 18 && age < 30) {
    console.log('你需要自己照顾好自己了！你已经是一个成年人了！');  // '你需要自己照顾好自己了！你已经是一个成年人了！'
} else if (age >= 30 && age < 50) {
    console.log('你必须在这段时间好好经营自己的家庭！因为你是一个中年人了！');
} else if (age >= 50 && age < 60) {
    console.log('你已经步入老年了');
} else if (age >= 60) {
    console.log('你已经退休了')
}
```



# 条件分支语句
条件分支语句：使用条件分支语句可以根据条件来选择执行的语句
1. 语法：
```js
switch (条件) {
    case 条件表达式:
        (语句)
    case 条件表达式:
        (语句)
    default:
        (语句)
}
```
2. 执行流程
* 在执行时会依次将 case 后的表达式的值和 switch 后的条件表达式的值进行全等比较
1. 如果比较的结果为 true，则从当前 case 处开始执行代码
```js
var number = +prompt('请输入一个数字');  // 输入 1 将执行如下三行代码
switch (number) {
    case 1:
        console.log('我是数字1');
    case 2:
        console.log('我是数字2');
    default:
        console.log('我啥也不是');
}
```
当前 case 后的所有代码都会执行，我们可以在 case 的后边跟着一个 break 关键字，这样可以确保只会执行当前 case 后的语句，而不会执行其它的 case 中的语句
```js
var number = +prompt('请输入一个数字');  // 输入 1 将执行符合条件的一条代码(即是第一个 case 语句后的代码)
switch (number) {
    case 1:
        console.log('我是数字1');
        break;
    case 2:
        console.log('我是数字2');
        break;
    default:
        console.log('我啥也不是');
        break;
}
```
2. 如果比较的结果为 false，则继续向下比较
```js
var number = +prompt('请输入一个数字');  // 输入 2 将执行符合条件的一条代码(即是第二个 case 语句后的代码)
switch (number) {
    case 1:
        console.log('我是数字1');
        break;
    case 2:
        console.log('我是数字2');
        break;
    default:
        console.log('我啥也不是');
        break;
}
```
3. 如果所有比较结果都为 false，则只执行 default 后的语句
```js
var number = +prompt('请输入一个数字');  // 输入 abc 将执行符合条件的一条代码(即 default 中的代码)
switch (number) {
    case 1:
        console.log('我是数字1');
        break;
    case 2:
        console.log('我是数字2');
        break;
    default:
        console.log('我啥也不是');
        break;
}
```



# 循环语句
循环语句：分为 while 循环、do...while 循环和 for 循环，此处主讲 while 循环
## while 循环
1. 语法
当条件为 true 的时候，进行循环，然后再判断条件，以此类推，直到不满足条件退出循环
```js
while(条件表达式){  // 
    (语句)
}
```
2. 解除重复代码
```js
var i = 1;
while (i <= 10) {
    document.write(i++ + '<br/>');
}  // 可以在页面中以递增的形式输入 10 行数字
```
3. 死循环
条件表达式写死为 true 的循环
```js
while(true){
    (语句)
}
```
解除死循环的方法：使用 break
```js
while(true){
    (语句)
    break;
}
```
4. 创建一个规范的循环
```js
// 初始化变量
var i = 1;
// 在循环中设置一个条件表达式
while (i < 10) {
    alert(i);
    // 定义一个更新表达式，每次更新初始化变量
    i++;
}
```
## do...while循环
1. 语法
先执行语句，再判断条件，当条件为 true 的时候，进行循环，然后再判断条件，以此类推，直到不满足条件退出循环
```js
do{
    (语句)
}while(条件表达式)
```
2. 区别
do...while循环和 while 循环的区别：do...while 语句至少可以保证循环体执行一次，而 while 语句不能
```js
var i = 2;
do {
    console.log('你猜我执行了没了-- do...while'); // 执行
} while (i < 2);

while (i < 2) {
    console.log('你猜我执行了没 -- while') // 没有执行
}
```
## for循环
1. 语法
先执行初始化表达式，然后判断条件表达式为 true(false) 之后(退出循环)进行循环执行语句，最后执行更新表达式
```js
for(初始化表达式;条件表达式;更新表达式){
    (语句)
}
```
2. 掌握
* 星星递增递减输出
* 九九乘法表输出
* 质数的判断及输出
* 水仙花数的输出