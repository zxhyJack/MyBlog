# sql 防注入

在数据库查询时经常会遇到根据传入的参数查询内容的情况，传入的参数有可能会带有恶意代码，比如`or 1=1`，这样where判断为true，就会返还所有的记录。为了解决这个问题，可以在参数外面包一层单引号，pgsql有扩展包`pg-promise`来解决,使用方式如下：

    import * as PostgresUtil from 'pg-promise'

    PostgresUtil.as.format('table_a.name = $1 AND table_a.josndata = $2', ['Tom', {age: 100}]) 
    // table_a.name = 'Tom' AND table_a.josndata = '{\"age\": 100}'

可以看到返回的sql语句中参数是增加了单引号的