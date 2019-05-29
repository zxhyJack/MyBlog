# 数据结构——队列
队列是常用的一种数据结构，它的特点是先进先出、后进后出，就像是排队一样，先加入的元素在队首，后加入的元素在队尾。

## 定义方法接口
对一个队列的操作一般包括：
- 添加元素
- 移除元素
- 查看队首元素
- 检查队列是否为空
- 打印队列元素

我们用类的方式先定义号接口
```js
class Queue {
    // 添加元素
    enqueue() {};
    
    // 移除元素
    dequeue() {};
    
    // 查看队首元素
    front() {};
    
    // 检查队列是否为空
    isEmpty() {};
    
    // 队列大小
    size() {};

    // 打印队列元素
    print() {};
}
```

## 队列方法的具体实现
```js
class Queue {

    constructor() {
        this.items = [];
    }
    // 添加元素
    enqueue(element) {
        this.items.push(element);
    };
    
    // 移除元素
    dequeue() {
        return this.items.shift();
    };
    
    // 查看队首元素
    front() {
        return this.items[0];
    };
    
    // 检查队列是否为空
    isEmpty() {
        return !this.items.length;
    };
    
    // 队列大小
    size() {
        return this.items.length;
    };

    // 打印队列元素
    print() {
        console.log(this.items.toString());
    };
}
```

## 队列的使用

先声明一个空的队列对象

    let queue = new Queue();

检查队列是否为空

    queue.isEmpty();    // true

向队列里添加元素

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

查看队首元素

    queue.front();	  // 3

移除队列的一个元素

	queue.dequeue();	// 3

查看队列的大小

	queue.size();	// 2

打印队列的元素

	queue.print();		// 1,2

## 使用场景
- 打印队列
- 消息队列	