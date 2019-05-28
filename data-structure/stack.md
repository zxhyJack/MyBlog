# 用javascript来实现栈

栈是计算机编程中常用的一种线性结构，它的特点是后进先出（LIFO），栈在计算机的函数调用中应用非常普遍，一个典型的例子是函数的递归调用，里面的变量在内存中的使用就是按照压栈、弹栈的方式，先声明的变量放在栈底，后声明的变量放在栈顶，出栈时先取走栈顶的元素，最后取走栈底的元素，也就是后入栈的先出栈。

## 栈的方法接口

我们先定义好要实现方法的接口，然后再去实现具体的方法

对于栈，我们需要提供的操作有
- 向栈添加元素
- 从栈移除元素
- 查看栈顶元素
- 检查栈是否为空
- 查询栈的大小
- 清空栈
- 打印栈内元素

我们用类的方式来定义栈
```js
class Stack{
    // 添加元素
    push(element){};
    // 弹出栈顶元素
    pop(){};
    // 查看栈顶元素
    peek(){};
    // 检查栈是否为空
    isEmpty(){};
    // 栈的大小
    size(){};
    // 清空栈
    clear(){};
    // 打印栈
    print(){};
}
```

## 接口的具体实现
定义好接口后，我们就可以一一实现它们，在这里我们要用到上一节讲到的数组的几个常用方法，分别是push(), pop(),下面是具体实现
```js
class Stack {
    constructor(){
        this.items = [];
    }

    // 添加元素
    push(element) {
        this.items.push(element);
    }

    // 弹出栈顶元素 
    pop() {
        return this.items.pop();
    }

    // 查看栈顶元素
    peek() {
        return this.items[this.items.length-1];
    }

    // 检查栈是否为空
    isEmpty() {
        return !this.items.length;
    }

    // 栈的大小
    size() {
        return this.items.length;
    }

    // 清空栈
    clear() {
        this.items = [];
    }

    // 打印栈
    print() {
        console.log(this.items.toString());
    }

}
```

## 栈的使用

我们先声明一个空的栈对象
    
    let stack =  new Stack();

使用isEmpty()方法判断它是否为空

    stack.isEmpty();    // true

向栈内添加元素

    stack.push(1);
    stack.push(2);
    stack.push(3);

打印栈内的元素

    stack.print();  // [1,2,3]

查看栈顶的元素

    stack.peek();   // 3

栈的大小

    stack.size();   // 3

移除栈顶元素

    stack.pop();    // 3

打印栈内的元素

    stack.print();  // [1,2]

清空栈

    stack.clear();

## 栈的用途

这样就实现了一个简单的栈，并且也演示了怎么去使用这个栈，下面说说栈这种数据结构一般用在什么地方

- 数字进制转换
- 表达式求值
- 迷宫问题
- 语法检查--括号匹配
- 逆序输出

使用的场景涉及的比较多，而且实现起来代码量大，这个放在以后的文章中深入介绍。

本文是自己对栈的粗浅理解，以后了解得深入了会更新新的文章，期待你的反馈与交流，感谢阅读。