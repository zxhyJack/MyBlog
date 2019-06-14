# 数据结构--集合

集合是由一组无序且唯一的项组成的,这意味着集合中的元素是不能重复的,类似于数学中集合的概念,是不同对象的集.

在这里,我们用js语言的对象来实现集合,因为js的对象不允许一个键指向两个不同的属性,从而保证了集合里面的元素都是唯一的.

js的对象是有key值和value值的,用对象来表示集合,就会使得key值和value值相同.

## 实现的方法
接下来我们要实现的方法有:
- add(value) :向集合添加一个新的项。
- delete(value) :从集合移除一个值。
- has(value) :如果值在集合中,返回 true ,否则返回 false 。
- clear() :移除集合中的所有项。
- size() :返回集合所包含元素的数量。与数组的 length 属性类似。
- values() :返回一个包含集合中所有值的数组

## 具体实现
```js
class Set {
  constructor() {
    this.item = {};
  }

  has(value) {
    return value in this.item;
    // return this.item.hasOwnProperty(value);
  }

  add(value) {
    if(!this.has(value)){
      this.item[value] = value;
    }
  }

  delete(value) {
    if(this.has(value)){
      delete this.item[value];
      return true;
    }
    return false;
  }

  clear() {
    this.item = {};
  }

  size() {
    return Object.keys(this.item).length;
  }

  values() {
    return Object.keys(this.item);
  }
}
```

## 使用集合

创建集合

    let set = new Set();

添加元素

    set.add(1);  // { '1':1 }
    set.add(2);  // { '1':1, '2':2 }
    set.add(3);  // { '1':1, '2':2, '3':3 }

判断是否含有某元素

    set.has(1);  // true

查看集合内的所有元素

    set.values(); //  [ '1','2','3' ]

集合长度

    set.size();  // 3

删除元素

    set.delete(3);  // { '1':1, '2':2 }

清空集合

    set.clear();  // {}