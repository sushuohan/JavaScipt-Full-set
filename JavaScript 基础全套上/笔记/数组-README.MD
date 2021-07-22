# 数组简介
1. 创建数组对象
语法：var 数组名 = new Array(数组元素);
```js
var arr = new Array();  // 创建一个空的数组

var arr = new Array(1, 2, 3, 4, 5); // 创建一个非空的数组

console.log(arr);  // [1, 2, 3, 4, 5]
```
2. 使用 typeof 检查一个数组时会返回 object
3. 向数组中添加元素及获取元素
添加元素语法：数组[索引] = 值;

获取元素语法:数组[索引]; -- 若不存在此索引项则会返回 undefined
```js
var arr = new Array();

arr[0] = 0;  // 添加元素

console.log(arr[0]);  // 获取元素
console.log(arr[1]);  // undefined
```
4. 获取数组的长度
语法：数组.length

对于连续的数组使用 length 可以获取到数组的长度(元素的个数) -- 最大索引项 +1
```js
var arr = new Array();

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;

console.log(arr.length);  // 3
```

对于非连续的数组使用 length 会获取到数组的最大索引 +1
```js
var arr = new Array();

arr[0] = 0;
arr[1] = 1;
arr[200] = 200;

console.log(arr.length);  // 201
```
5. 修改数组的长度

如果修改的 length 大于原长度，则多出部分会空出来(以 empty 的形式)
```js
var arr = new Array();

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[3] = 3;

arr.length = 10;

console.log(arr);  // [0, 1, 2, 3, empty × 6]
```

如果修改的 length 小于原长度，则多出的元素会被删除
```js
var arr = new Array();

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[3] = 3;

arr.length = 3;

console.log(arr);  // [0, 1, 2]
```
6. 向数组的最后添加元素
语法：数组[数组.length] = 值;
```js
var arr = new Array();

arr[0] = 0;  // 向数组中添加元素 0
arr[1] = 1;  // 向数组中添加元素 1

arr[arr.length] = 2;  // 向数组的最后添加元素
```



# 数组字面量
使用字面量是创建数组的第二种方法

语法：var 数组名 = [];
```js
var arr = [];  // 创建一个空的数组 
```
1. 使用字面量创建数组时可以在创建的同时就指定数组中的元素
```js
var arr = [1, 2, 3, 4, 5];

console.log(arr);  // [1, 2, 3, 4, 5]
```
2. 字面量的形式创建只含一个元素的数组
```js
var arr = [10];

console.log(arr);  // 数组中只含有一个元素 10
```
3. 用构造函数的形式传递一个参数会表示创建一个长度为该参数的数组
```js
var arr = new Array(10);

console.log(arr);  // [empty × 10]
```



# 数组中的元素类型
数组中的元素可以是任意的数据类型
```js
var arr = [true, 1, '2', null, undefined, NaN]
console.log(arr4);  // [true, 1, "2", null, undefined, NaN]
```

当数组的元素是对象的时候，我们可以通过数组输出对象属性
```js
var obj = {
    name:'su',
    age:19
}

var arr = [obj];

console.log(arr[0].name);  // 'su'
```

当数组的元素是函数的时候，我们可以通过数组调用函数
```js
function fun(){
    console.log('1');
}

var arr = [fun];

console.log(arr[0]());  // '1'
```

当数组的元素是数组的时候，我们称其为二维数组
```js
arr = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5]
];

console.log(arr[1]); // [2, 3, 4]
```



# 数组的四个方法
数组的四个方法:push()\pop()\unshift()\shift()

1. push()
该方法可以向数组的末尾添加一个或多个元素，并返回新数组的长度

可以将要添加的元素作为方法的参数传递 -- 这些参数会自动添加到数组的末尾
```js
var arr = [1, 2, 3];
var newLength = arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(newLength); // 5
```

2. pop()
该方法可以删除数组最后一个元素，并将被删除的元素作为返回值返回
```js
var arr = [1, 2, 3];
var noElement = arr.pop();
console.log(noElement);  // 3
```

3. unshift()
该方法可以向数组开头添加一个或多个元素，并返回新数组的长度
```js
var arr = [1, 2, 3];
var newLength = arr.unshift(-2, -1, 0);
console.log(arr);  // [-2, -1, 0, 1, 2, 3]
console.log(newLength);  // 6
```

4. shift()
该方法可以删除第一个元素，并将删除的元素作为返回值返回
```js
var arr = [1, 2, 3];
var noElement = arr.shift();
console.log(noElement);  // 1
```



# 数组的遍历
所谓的数组遍历就是将数组所有的元素取出来
```js
var arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // 5
```

我们可以借助 for 循环简易遍历
```js
var arr = [1, 2, 3, 4, 5];
for(var i = 0;i < arr.length;i++){
    console.log(arr[i]);
}
```

**熟练掌握遍历数组的方法及 forEach() 方法**



# slice和splice方法
* slice()
1. 可以用来从数组中提取指定元素
2. 该方法不会改变原数组，而是将截取到的元素封装到一个新数组中返回
3. 参数：第一个是截取开始位置的索引，包括该元素，第二个是截取结束位置的索引，不包括该元素(索引有且仅可传递一个负值)
```js
var arr = [1, 2, 3, 4, 5];

var newArr1 = arr.slice(0, 2);
var newArr1 = arr.slice(0, -1);

console.log(newArr1);  // [1, 2]
console.log(newArr2);  // [1, 2, 3, 4]
```

* splice()
1. 可以用于删除数组中的指定元素
2. 使用 splice() 会影响到原数组，会将指定元素从原数组中删除，并将删除的元素作为返回值返回
3. 参数：第一个表示开始位置的索引，第二个表示删除的数量，第三个及以后可以传递一些新的元素，这些元素将自动插入到开始索引前边
```js
var arr = [1, 2, 3, 4, 5];

var noElement = arr.splice(0, 1, 100, 1000);

console.log(arr);  // [100, 1000, 2, 3, 4, 5]
console.log(noElement);  // [1]
```

* 数组的去重练习
```js
var arr = [1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8, 8, 9, 9, 10]

for(var i = 0;i < arr.length;i++){
    for(var j = i + 1;j < arr.length;j++){
        if(arr[i] == arr[j]){
            arr.splice(j, 1);
            j--;
        }
    }
}

console.log(arr);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```



# 数组的剩余方法
数组的剩余方法：concat\join\reverse\
1. concat() 可以连接二个或多个数组，并将新的数组返回(该方法不会对原数组产生影响)
```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5];

var newArr = arr1.concat(arr2, '1');

console.log(newArr);  // [1, 2, 3, 4, 5, "1"]
```

2. join() 可以将数组转换为一个字符串(该方法不会对原数组产生影响)
在 join() 中可以指定一个字符串为参数，这个字符串将成为数组中元素的连接符
```js
var arr = [1, 2, 3];

var str = arr.join('%');

console.log(str);  // '1%2%3'
```

3. reverse() 可以将数组取反(直接改变原数组)
```js
var arr = [1, 2, 3];

arr.reverse();

console.log(arr);  // [3, 2, 1]
```

4. sort() 可以对数组中的元素进行排序(会影响原数组)
默认按照 Unicode 编码进行排序 -- [0-9] Unicode 编码顺序增加
```js
var arr = [8, 3, 4, 5, 6, 8, 9, 1, 0, 4];
arr.sort();
console.log(arr); // [0, 1, 3, 4, 4, 5, 6, 8, 8, 9]
```
所以对数字进行排序的时候，有时会出现错误(比较第一个数字的 Unicode 编码即进行了排序)
```js
var arr = [81, 5, 20000];
arr.sort();
console.log(arr); // [20000, 5, 81]
```
我们可以自己指定排序规则，在 sort() 添加一个回调函数，来指定排序规则
1. 回调函数中需要定义二个形参
2. 浏览器将会分别使用数组中的元素作为实参去调用回调函数

```js
var arr = [80, 5, 300];

arr.sort(function (a, b) {
    return (a - b); // 升序
    // return (b - a); // 降序
})

console.log(arr6); // [5, 80, 300]
```

浏览器会根据回调函数的返回值来决定元素的顺序:
1. 如果返回一个大于 0 的值，则元素会交换位置
2. 如果返回一个小于 0 的值，则元素位置不变
3. 如果返回一个 0，则认为两个元素相等，也不交换位置