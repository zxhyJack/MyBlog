MongoDB
=======
## 简介
- MongoDB 是一个基于分布式文件存储的数据库
- 属于NoSQL数据库，是介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的
- 旨在为WEB应用提供可扩展的高性能数据存储解决方案
- 数据结构： 键值对（key-value），类似JSON对象
      
      {
        name：'Paul',
        age:21,
        gender:'man'
      }

## NoSQL

- NoSQL = Not Only SQL，不仅仅是SQL

- 关系型数据库的特点：ACID规则

    + A (Atomicity) 原子性

    事务里的所有操作要么全部做完，要么都不做

    + C (Consistency) 一致性

    数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束

    + I (Isolation) 独立性

    事务之间不会互相影响

    + D (Durability) 持久性

    事务提交后，它所做的修改将会永久的保存在数据库上

- 没有预定义的模式

- 键-值对存储，列存储，文档存储，图形数据

- 高性能，高可用性和可伸缩性

        {
            name：'Paul',
            age:21,
            gender:'man',
            address:{
                province:'山东',
                city:'济南'
            }
        }

## 基本操作

- 创建数据库

      use database_name

如果数据库存在，则进入指定数据库，否则，创建数据库
此时需要写入数据，数据库才能真正创建成功

- 查看所有数据库

        show databases | dbs

- 创建集合

        db.createCollection(collection_name)

- 删除数据库
先进入要删除的数据库，然后执行命令

        db.dropDatabase()

- 删除集合

      db.collection_name.drop()

- 增

      db.collection_name.insert(document)

    exp:
        
        db.students.insert({
        name:'James',
        age: 32,
        gender:'man',
        career:'player'
        })

- 查

        db.collection.find(<query>,<projection>)
        - query: 查询条件
        - projection: 投影操作

    exp:

        db.students.find()

- 改

      db.collection.updateOne(<query>,<update>) // 更新第一个符合条件的集合
      db.collection.updateMany(<query>,<update>)  // 更新所有符合条件的集合

      - query: 查询条件
      - update： 更新的内容

    exp: 

        db.students.update({name:'James'},{$set:{gender:'woman'}})

- 删

      db.collection_name.deleteOne(<query>) // 删除第一个符合条件的集合
      db.collection_name.deleteMany(<query>) // 删除所有符合条件的集合

    exp:

        db.students.deleteOne({name:'James'})
