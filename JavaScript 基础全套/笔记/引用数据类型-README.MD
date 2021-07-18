# 为什么要引入此类型的数据
基本数据类型都是单一的值，如 123、true 和 '123'，值和值之间没有任何的联系
```js
var name = 'xiaosusu';
var gender = '男';
var age = 18;  
```
如果使用基本数据类型的数据，我们所创建的变量都是独立的，不能成为一个整体



# 对象的分类
1. 内建对象
由 ES 标准中定义的对象，在任何的 ES 的实现中都可以使用
```js
var a = 4;
var b = Math.sqrt(a); // Math 是内建对象，Math.sqrt() 的功能是取正的平方根
```
比如：Math、String、Number、Boolean、Function、Object
2. 宿主对象
由 JS 的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
```js
console.log(2); // 控制台输出 2，console 是宿主对象，由浏览器提供
```
比如：BOM、DOM
3. 自定义对象
由开发人员自己创建的对象
```js
var obj = new Object();
```



# 对象的基本操作
对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性
* 创建对象
1. 使用 new 关键字调用的函数(构造函数)，构造函数是专门用来创建对象的函数
2. 使用 typeof 检查一个对象时，会返回 object
```js
var obj = new Object();
console.log(typeof(obj));  // object
```
* 对象属性
1. 向对象中添加属性 
语法：对象.属性名 = 属性值;
```js
var obj = new Object();

obj.name = 'xiaosusu';
obj.age = 18;
obj.sex = 'man';
```
2. 读取对象属性 
语法：对象.属性名;
```js
console.log(obj.name)  // 'xiaosusu'
```
3. 修改属性的值
语法：对象.属性名 = 新值;
```js
obj.name = 'xiaokeke';
console.log(obj.name);  // 'xiaokeke'
```
4. 删除对象的属性
语法：delete 对象.属性名;
```js
delete obj.name;
console.log(obj.name);  // undefined
```

# 对象的属性名
* 属性名的命名规范
1. 当对象的属性名满足由数字、字母、下划线或 $ 组成时(即使是和保留字或关键字一模一样)
语法1：对象.属性名 = 属性值; 
```js
var obj = new Object();
obj.var = 123;
console.log(obj.var); // 123
```
2. 如果要使用特殊的属性名(即不遵守标识符的规范)，不能采用 . 的方式来操作
语法2：对象['属性名'] = 属性值;
```js
var obj = new Object();
obj['123'] = 456;
console.log(obj['123']); // 456
obj['^&%^##^%&^%&*^&'] = '6';
console.log(obj['^&%^##^%&^%&*^&']); // '6'
```
使用此种方式去操作属性会更加灵活，在 [] 中可以直接传递一个变量，这样变量值是多少就会相应的读取到那个属性
```js
var a = '123';
console.log(obj[a]); // 456
var b = '^&%^##^%&^%&*^&';
console.log(obj[b]); // '6'
```


# 对象的属性值
对象的属性值可以是五种基本类型也可以是引用数据类型
* 五种基本类型
```js
var obj = new Object();
obj.test = true;
console.log(obj.test); // true
obj.test = null;
console.log(obj.test); // null
obj.test = undefined;
console.log(obj.test); // undefined
obj.test = '123';
console.log(obj.test); // '123'
obj.test = 123;
console.log(obj.test); // 123
```
* 一种引用类型
```js
var obj = new Object();
obj1 = new Object();
obj1.name = 'xiaoxiao';
obj1.age = 19;
obj.test1 = obj1;
console.log(obj.test1); // {name: "xiaoxiao", age: 19}
```
* in 运算符
1. 通过该运算符可以检查一个对象中是否含有指定的属性
如果有则返回 true，否则返回 false
2. 语法：'属性名' in 对象
```js
obj1 = new Object();
obj1.name = 'xiaoxiao';
obj1.age = 19;
console.log('name' in obj1); // true
console.log('test' in obj1); // false
```



# 栈内存和堆内存
JS 中的变量都是保存到栈内存中的
1. 基本数据类型的值是直接保存在栈内的
值与值之间是独立存在的，修改一个变量不会影响其它的变量
```js
var a = 1;
var b = a; // 此处直接把变量 a 的值传递给 b
a++;
console.log(a); // 2
console.log(b); // 1
```
2. 引用数据类型的值既与栈内存有关又与堆内存有关
对象是保存到堆内存中的，每创建一个新的对象就会在堆内存中开辟一个新的空间
变量保存的是对象的内存地址，如果另一个对象建立起此对象的引用，那么当一个变量的值发生改变时，另一个也会受到影响
```js
var obj1 = new Object();
var obj2 = obj1;
obj2.name = 'xiaoqi';
console.log(obj1.name); // 'xiaoqi'
console.log(obj2.name); // 'xiaoqi'
```
3. 基本数据类型和引用数据类型的区别
当比较二个基本数据类型的值时，就是比较值
```js
var a = 1;
var b = 1;
console.log(a == b); // true
```
当比较二个引用数据类型时，它是比较对象的内存地址，如果比较的二个对象是一模一样的，但是地址不同，也会返回 false
```js
var obj1 = new Object();
var obj2 = new Object();
obj1.name = 'xiaoxiao';
obj2.name = 'xiaoxiao';
console.log(obj1 == obj2); // false
```



# 对象字面量
使用对象字面量时，可以在创建对象时直接指定对象中的属性

语法：{属性名:属性值,属性名:属性值,属性名:属性值...}

* 注意事项
1. 对象字面量的属性名可以加引号也可以不加，建议不加
2. 如果要用一些特殊的名字，则必须加引号
3. 属性名和属性值是一组一组的键值结构
4. 键和值之间用冒号连接，多个键值之间用逗号隔开
5. 如果一个属性之后没有其它的属性了，就不要跟着冒号了
```js
var obj1 = new Object(); // 构造函数创建对象
var obj2 = {
    name: 'xiaosu',
    age: 19,
    sex: 'man',
    test: {
        number: 1,
        class: 2
    }
} // 对象字面量创建对象
```