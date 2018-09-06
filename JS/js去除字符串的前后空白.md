# js去除字符串的前后空白

使用gravatar生成邮箱的头像时需要对邮箱地址哈希化，其中需要去除邮箱地址的首尾空白，查找了一些资料，总结一下

## 使用 js 提供的函数 `trim()`

- trim() 方法会删除一个字符串两端的空白字符。

- 在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。

- trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。


### 语法

    str.trim()

### 例子

    let str = ' hello '
    console.log(str.trim()) //hello

## 使用正则表达式

str为要去除空格的字符串:

去除所有空格:

    str = str.replace(/\s+/g,"")

去除两头空格:

    str = str.replace(/^\s+|\s+$/g,"")

去除左空格：

    str=str.replace( /^\s/, '')

去除右空格：

    str=str.replace(/(\s$)/g, "")


参考

https://segmentfault.com/a/1190000007588885

https://www.jianshu.com/p/b4045ac4893d