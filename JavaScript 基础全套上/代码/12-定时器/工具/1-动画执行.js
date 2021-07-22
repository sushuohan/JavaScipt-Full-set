// 动画执行
function move(obj, attr, target, speed, callback) {
    // 关闭上一个计时器
    clearInterval(obj.timer);
    // 获取元素当前的位置
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    // 定义计时器
    obj.timer = setInterval(() => {
        // 获取 obj 原来的 left 值
        var oldValue = parseInt(getStyle(obj, attr));

        // 在原来的基础上增加 speed
        var newValue = oldValue + speed;

        // 当元素移动到 target 时，使其停止执行动画
        if (newValue < target && speed < 0 || newValue > target && speed > 0) {
            newValue = target;
        }

        // 将新值设置给 obj
        obj.style[attr] = newValue + 'px';

        if (newValue == target) {
            // 取消定时器
            clearInterval(obj.timer);
            // 动画执行结束，调用回调函数
            callback();
        }
    }, 30);
}

// 获取当前样式
function getStyle(obj, name) {
    if (window.getComputedStyle) { // 查找 window 是否含有该属性 -- 不含有则返回 undefined
        // 正常浏览器的方式，具有 getComputedStyle() 方法
        return getComputedStyle(obj, null)[name];
    } else {
        // IE8 的方式，没有 getComputedStyle() 方法
        return obj.currentStyle[name];
    }
}