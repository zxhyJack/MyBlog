$group 下 $sum 函数 

Returns a sum of numerical values. Ignores non-numeric values 

只能对数字求和，非数字没有作用

查询一段时间内的内容，比较的其实是时间的字符串

db.CollectionAAA.find({ "CreateTime" : { "$gte" : "2018-08-15T00:00:00.000Z", "$lte" : "2018-08-16T23:59:59.000Z") } })

mongo查询的属性可以通过 $project 来重命名

对于对象套对象的结构

        {
          name:{
            fruit:{
              name:'apple'      
            }
          }
        }

如果要去掉外面的name层级，直接拿到里面的fruit内容,可以使用 $group 方法fruit分组,分类的属性名变成了_id，如果想用原来的属性名，可以通过 $project 来重命名