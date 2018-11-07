extract函数的使用
===============

    EXTRACT(field FROM source)

`extract`函数从日期/时间数值里抽取子域，比如年、小时等。

 `source`必须是一个`timestamp, time, interval`类型的值表达式(类型为date的表达式转换为 timestamp，因此也可以用)。

`field` 是一个标识符或者字符串，它指定从源数据中抽取的域。

extract 函数返回类型为double precision的数值。

提取年份

    SELECT EXTRACT(YEAR FROM TIMESTAMP '2001-02-16 20:38:40');
    Result: 2001

提取月份

    <!-- 对于timestamp值，它是一年里的月份数(1-12)；对于interval值， 它是月的数目，然后对 12 取模(0-11) -->

    SELECT EXTRACT(MONTH FROM TIMESTAMP '2001-02-16 20:38:40');
    Result: 2

    SELECT EXTRACT(MONTH FROM INTERVAL '2 years 3 months');
    Result: 3

    SELECT EXTRACT(MONTH FROM INTERVAL '2 years 13 months');
    Result: 1

提取日期

    <!-- 对于timestamp值，(月份)里的日期(1-31)；对于interval，天数 -->
    SELECT EXTRACT(DAY FROM TIMESTAMP '2001-02-16 20:38:40');
    Result: 16

    SELECT EXTRACT(DAY FROM INTERVAL '40 days 1 minute');
    Result: 40