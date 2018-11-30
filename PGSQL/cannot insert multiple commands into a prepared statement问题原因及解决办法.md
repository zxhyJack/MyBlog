cannot insert multiple commands into a prepared statement问题原因及解决办法
========================

问题是这样，我在对数据库进行写操作（添加、删除、修改）时，我想同时删除两个表中的两条关联数据，像这样

    let sql = `
    DELETE FROM bridge_parts
    WHERE id = $1;
    DELETE FROM bridge_quantity 
    WHERE bridge_part_id = $2`

然后使用 `client.query(sql,[item1,item2])` 来执行删除操作，这个时候问题出现了，pgsql报错，错误如下

    cannot insert multiple commands into a prepared statement

查了一下原因，是pg语句预处理的问题，可以使用pg_prepare，但仅用于单独的语句，而不是整个事务，预处理语句是递交给PostgreSQL的语句，然后将其解析并存储为解析树以供将来使用。在第一次执行时，将使用提供的输入计划解析树，并执行该计划，并将计划缓存以供将来使用。通常使用预准备语句没有多大意义，除非你想重用查询计划（即执行大量相同的更新语句，大致相同的行数），所有这些都在同一个事务中。

意思就是说`pg_prepare`只能对单独的sql进行预处理，不能同时预处理两条sql语句

怎么修改呢，就是把pg执行预处理改为手动或者只对其中的一条语句进行预处理

    let sql = `
    DELETE FROM bridge_parts
    WHERE id = '${id}';
    DELETE FROM bridge_quantity 
    WHERE bridge_part_id = '${bridgePartId}'`

参考链接：
https://stackoverflow.com/questions/19589841/pg-prepare-cannot-insert-multiple-commands-into-a-prepared-statement