must appear in the GROUP BY clause or be used in an aggregate function
======================================================================

今天在分组统计的时候pgsql报错 `must appear in the GROUP BY clause or be used in an aggregate function`，在mysql里面是可以的，但是pgsql报错，我去stackoverflow查询了一下，发现有人遇到过和我一样的问题，这是pgsql一个常见的聚合问题，在SQL3标准以前，选择显示的字段必须出现在在 `GROUP BY` 中。下面我把问题描述一下：

有一张表叫 `makerar`，表中记录如下：
cname   | wmname |          avg           
--------|--------|-----------------------
 canada | zoro   |     2.00
 spain  | luffy  |     1.00
 spain  | usopp  |     5.00

我想要查询每个 `cname` 的最大 `avg`，按照mysql的写法是

    SELECT cname, wmname, MAX(avg) FROM makerar GROUP BY cname;

在pgsql中报错

    ERROR:  column "makerar.wmname" must appear in the GROUP BY clause or be used in an aggregate function 
    LINE 1: SELECT cname, wmname, MAX(avg)  FROM makerar GROUP BY cname;

意思是 `wmname` 字段必须在 `GROUP BY` 中出现或者被用于聚合函数

于是我按照错误提示，把 `wmname` 字段加在 `GROUP BY` 后面，即

    SELECT cname, wmname, MAX(avg) FROM makerar GROUP BY cname, wmname;

得到的结果是

cname   | wmname |          avg           
--------|--------|-----------------------
 canada | zoro   |     2.00
 spain  | luffy  |     1.00
 spain  | usopp  |     5.00

而我期望得到的结果是

cname   | wmname |          avg           
--------|--------|-----------------------
 canada | zoro   |     2.00
 spain  | usopp  |     5.00

解决方案有两种，但是我只看懂了一种，于是把这一种记录一下

大体思路是在子查询中完成聚合，然后关联包含你想显示字段的表（这里是makerar自身）获取字段（这里是wmname），所以sql就变成了下面这个样子

    SELECT   
      t.cname,
      m.wmname,
      t.max
    FROM 
      (SELECT 
        cname,
        MAX(avg) AS max 
      FROM makerar
      GROUP BY cname) t
    LEFT JOIN makerar m ON t.cname = m.cname AND t.max = m.avg;
