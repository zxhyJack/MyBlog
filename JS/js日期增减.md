js 日期增减
==========

js 的 Date 对象提供了许多方法,可以获取日期的年、月、日等信息，也可以修改年、月、日

日期的增减可以使用`setFullYear()、setMonth()、setDate()` 等方法

exp：

    let date = new Date('2018-10-01')

    对日期加减：

    date.setDate(date.getDate()+n);

    对月加减：

    date.setMonth(date.getMonth()+n);

    对年加减：

    date.setFullYear(date.getFullYear()+n);

    对小时、周等，都可以使用类似的方式修改。

    同时如果对日加减的时候跨越了月、年，那么JS的date类型会自动的处理跨越问题，不需要我们处理。


参考链接：https://blog.csdn.net/li_xiao_dai/article/details/20123173 
