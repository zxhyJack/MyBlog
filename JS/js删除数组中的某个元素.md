最近在刷算法题，我是用js语言去写的，其中一题需要删除数组的某个元素，查了一下资料，总结一下

## 使用splice()方法

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

- `start` 指定修改开始的位置

- `deleteCount` 删除元素的个数

- `item1,item2` 在删除的位置要添加的元素

splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。

这种方式数组长度相应改变,原来的数组索引也相应改变

如果只删除数组其中的几个元素，需要制订`start`和`deleteCount`，如果不指定`deleteCount`会把`start`之后的元素全部删除

如果要在删除的位置插入新的元素，只需要把新元素写在`item1`...位置上

例子1：删除数组[1,2,3]的第二个元素

    let arr = [1,2,3]

    arr.splice(1,1)
    console.log(arr)  //[1,3]

例子2：删除数组[1,2,3]的第二个元素以及后面的元素

    let arr = [1,2,3]

    arr.splice(1）
    console.log(arr)  //[1]

例子3：删除原数组中的第二个元素，然后添加两个新的元素5,6

    let arr = [1,2,3]

    arr.splice(1,1,5,6)
    console.log(arr)  //[1,5,6,3]

## 使用delete操作符

这种方式数组长度不变,此时被删除的位置内容变为 `undefined` 了，好处是原来数组的索引保持不变

    let arr = [1,2,3]

    delete arr[1]
    console.log(arr)  //[ 1, <1 empty item>, 3 ]

遍历数组可以使用下面这种方式

    for(index in nums){
      console.log(nums[index])
    }

以上是 `delete` 操作符删除数组元素的应用，下面详细介绍一下 `delete` 操作符

`delete` 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。

    let user = {
      name:'Jack',
      age:21
    }

    delete user.name
    console.log(user) //{ age: 21 }