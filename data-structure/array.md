# 数据结构--数组

数组是最简单的数据结构，它是一种线性的数据结构，在底层上表现为占有连续的内存空间，所以他的优缺点就比较明显，优点呢就是读取比较容易，只要根据索引找到对应的内存就可以取出数据了，同时因为内存连续的特点，当你想要去修改数组的内容时，就需要对原有数据进行迁移操作，从而保证内存的连续性，这就会增加操作的复杂度。  
没有完美的数据结构，只有最合适的，只要根据场景做出合适的选择，平衡性能开销和时间复杂度，满足使用需求就是好的。

下面以javascript语言为例，介绍一下数组常用的方法：
## 添加元素
添加元素包括三种情况，一种是在数组头部添加，一种是在尾部添加，还有一种是最一般的情况，即在任意位置添加。
### `push(element1, ..., elementN)`
push 方法可以添加一个或多个元素到数组的尾部
```js
let arr = [1,2,3];
arr.push(4,5);
console.log(arr);   // [1,2,3,4,5]
```

### `unshift(element1,..., elementN)`
unshift 方法可以将一个或多个元素添加到数组的头部
```js
let arr = [3,4];
arr.unshift(1,2);
console.log(arr);   // [1,2,3,4]
```

### `splice(start[, deleteCount[, item1[, item2[, ...]]]])`
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。  
splice() 方法功能很多，在这里我们使用它添加元素的功能，其中start是添加元素的起始位置，deleteCount是删除元素的个数，这里我门设置为0，后面跟上要添加的元素，可以使一个，也可以是多个。

```js
let arr = [1,2,5];
arr.splice(2,0,3,4);
console.log(arr);   // [1,2,3,4,5]
```

## 删除元素
删除元素也是包括三种情况，一种是从数组头部删除，一种是从数组尾部删除，一种是在任意位置删除
### `pop()` 方法从数组中删除最后一个元素，并返回该元素的值
```js
let arr = [1,2,3];
arr.pop();
console.log(arr);   // [1,2]
```
### `shift()` 方法从数组中删除第一个元素，并返回该元素的值
```js
let arr = [1,2,3];
arr.shift();
console.log(arr);   // [2,3]
```
### `splice(start, deleteCount)`
这次是我们的老朋友splice()，它不仅能添加元素，还能删除元素，而且可以删除一个或多个元素，start开始删除的元素的索引，deleteCount是删除的元素数量，也就是从start开始到start+deleteCount结束，并且不包括arr[start+deleteCount]这个元素，所以删除元素的范围是$[start,start+deleteCount)$。
```js
let arr = [1,2,3,4,5];
arr.splice(2,2);
console.log(arr);   // [1,2,5]
```

给数组添加和删除元素所使用到的方法我做了个表格，他们之间的对应关系如下：
|          | 数组头部  | 数组尾部 | 数组任意位置 |
| -------- | --------- | -------- | ------------ |
| 添加元素 | unshift() | push()   | splice()     |
| 删除元素 | shift()   | pop()    | splice()     |

除了上面这些常用的操作数组元素的方法，还有一些方法对数组进行遍历、连接、排序等操作

| 方法名      | 描述                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- |
| concat      | 连接2个或更多数组,并返回结果                                                                 |
| every       | 对数组中的每一项运行给定函数,如果该函数对每一项都返回 true ,则返回 true                      |
| filter      | 对数组中的每一项运行给定函数,返回该函数会返回 true 的项组成的数组                            |
| forEach     | 对数组中的每一项运行给定函数。这个方法没有返回值                                             |
| join        | 将所有的数组元素连接成一个字符串                                                             |
| indexOf     | 返回第一个与给定参数相等的数组元素的索引,没有找到则返回-1                                    |
| lastIndexOf | 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值                                     |
| map         | 对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组                                |
| reverse     | 颠倒数组中元素的顺序,原先第一个元素现在变成最后一个,同样原先的最后一个元素变成了现在的第一个 |
| slice       | 传入索引值,将数组里对应索引范围内的元素作为新数组返回                                        |
| some        | 对数组中的每一项运行给定函数,如果任一项返回 true ,则返回 true                                |
| sort        | 按照字母顺序对数组排序,支持传入指定排序方法的函数作为参数                                    |
| toString    | 将数组作为字符串返回                                                                         |
| valueOf     | 和 toString 类似,将数组作为字符串返回                                                        |

以上是我个人的一点总结，如果有不妥的地方，请私信或评论与我交流，感谢阅读。