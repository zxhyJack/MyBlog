javascript 实现中文按照拼音首字母排序
================================

js提供了sort()方法来对数组内的数据进行排序，但是只是对英文有作用，这个时候需要自定义排序的规则

    ['张三','李四','王五'].sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'}))

输出

    ['李四','王五','张三']

解释一下，sort()里面定义了一个函数来指定排序的规则，localeCompare()方法返回一个数字，指示引用字符串是在排序顺序之前还是之后，或者与排序顺序中的给定字符串相同，`zh-Hans-CN`是简体中文的排序规则，`sensotivity` 是灵敏度，包括 `base`、`accent`、`case`、`variant`这几种灵敏度





参考链接：
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare