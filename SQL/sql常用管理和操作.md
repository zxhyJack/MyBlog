# SQL简介

SQL是用于访问和处理数据库的标准的计算机语言

## SQL是什么

- 结构化查询语言，Structured Query Language

- 用来访问和处理数据库

- 是一种ANSI（美国国家标准化组织）标准的计算机语言

## SQL的用途

- 创建数据库

- 创建数据表

- 面向数据库执行增删改查操作

- ...

## SQL命令

- SELECT 从数据库中查询数据

- UPDATE 更新数据库中的数据

- DELETE 从数据库中删除数据

- INSERT INTO 向数据库中插入数据

- CREATE DATABASE 创建数据库

- ALTER DATABASE 修改数据库

- CREATE TABLE 创建数据表

- ALTER TABLE 修改数据表

- DROP TABLE 删除数据表

- CREATE INDEX 创建索引

- DROP INDEX 删除索引　

## 数据库定义语言DDL — 以MySQL为例

- 显示所有数据库

      show databases;

- 选择要操作的数据库

      use <数据库名>;

- 创建数据库

      create database <数据库名>;
      create database if not exists <数据库名>;

- 删除数据库

      drop database <数据库名>;
      drop database if exists <数据库名>;
    
- 查看数据库中的所有数据表

      show tables;  // 注意查看数据表之前要先进入数据库

- 创建数据表

      create table 表名(列名 列类型，列名 列类型...);

- 删除数据表

      drop table <表名>;
      drop table if exists <表名>;

- 查看数据表的创建语句

      show create table <表名>;

- 查看数据表结构

      desc <表名>;

- 添加列

      alter table <表名> add (列名 列类型，列名 列类型...);

- 删除列

      alter table <表名> drop 列名;

- 修改列类型

      alter table <表名> modify 列名 新列类型;

- 修改列名称

      alter table <表名> change 原列名 新列名 列类型; // 必须写列类型，且列类型可以同时更改

- 修改表名

      alter table <表名> rename to <新表名>;

## 数据库操作语言DML — 以MySQL为例

操作数据表中的数据 — 增删改查

- 查询记录

      select 列名1,列名2,列名3... from <表名>;
      select * from <表名>;

- 新增记录

      insert into <表名> (列名1,列名2,列名3...) values(列值1,列值2,列值3...);
      insert into <表名> set 列名1 = 列值1, 列名2 = 列值2, 列名3 = 列值3;

  注： 如果指定了列名，那列值的个数顺序要与指定的列名一致，没有赋值的列用 null 填充

  如果没有指定列名，列值的顺序要与表创建时的列名顺序一致

- 修改记录

      update <表名> set 列名 = 列值, 列名= 列值... [where 条件];

- 删除记录

      delete from <表名> [where 条件];

