- numpy.ones(shape,dtype=None,order='C')  
返回一个新的数组，这个数组满足shape的要求，而且数组的内容全是1，默认类型是浮点数，可以修改为int类型
```python
>>> numpy.ones(3)
array([1.,1.,1.])
>>> numpy.ones((2,3), dtype=int)
array([[1,1,1],
    [1,1,1]])
```
- numpy.zeros(shape, dtype=float, order='C')  
返回给定形状和类型的新数组，并且数组的内容全是0
- numpy.empty(shape, dtype=float, order='C')  
返回一个没有初始化的新数组
```
>>> numpy.empty((2,2))
array([[ -9.74499359e+001,   6.69583040e-309],
       [  2.13182611e-314,   3.06959433e-309]])         #uninitialized
```
- numpy.full(shape, fill_value, dtype=None, order='C')  
返回给定shape和type的新数组，数组用fill_value填充  
- numpy.any(a)  
判断给定的数组元素是否有一个为True，若有一个元素为True，则返回值为True
- numpy.all(a)  
给定数组中元素全为True时，返回True，否则返回False
- numpy.where(condition, x, y)  
满足条件condition返回x，否则返回y
- numpy.ceil(x)  
对x向上取整
- numpy.argmin(a)  
返回数组a中最小值对应的索引
- numpy.argmax()  
返回数组a中最大值对应的索引
- numpy.cumsum(a, axis=None, dtype=None, out=None)  
按照给定方向返回给定数组的累加和
```
>>> numpy.array([[1,2,3],[4,5,6]]).cumsum()
array([ 1,  3,  6, 10, 15, 21])
```
- numpy.ndenumerate(a)
多维索引迭代器
```
>>> for index, x in np.ndenumerate([[1,2],[3,4]]):
...     print(index, x)
(0, 0) 1
(0, 1) 2
(1, 0) 3
(1, 1) 4
```
- numpy.arange([start, ]stop, [step, ]dtype=None)  
返回给定区间 [start, end) 均匀间隔的值
```
>>> numpy.arange(1,3)
array([1, 2])
```
- numpy.dot(a, b, out=None)  
如果a和b都是一维数组，结果是a、b向量的内积  
如果a和b都是二维数组，结果是两个矩阵的乘积
```
>>> numpy.dot([1,2],[3,4])
11 # 1 * 3 + 2 * 4
>>> a = [[1, 0], [0, 1]]
>>> b = [[4, 1], [2, 2]]
>>> np.dot(a, b)
array([[4, 1],
       [2, 2]])
```
- numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None, axis=0)  
返回在给定区间上等间隔的数字
```
>>> np.linspace(2.0, 3.0, num=5)
array([2.  , 2.25, 2.5 , 2.75, 3.  ])
```
## random
- numpy.random.randint(low, high=None, size=None, dtype=int)  
返回 [low, high) 区间的随机整数，若high=None，则是[0, low)区间，size为生成数的个数
- numpy.random.rand(d0, d1, ..., dn)  
返回给定形式的随机数
```
>>> numpy.random.rand(3,2)
array([[ 0.14022471,  0.96360618],
       [ 0.37601032,  0.25528411],
       [ 0.49313049,  0.94909878]])
```
- numpy.random.random_sample(size=None)  
返回半开区间 [ 0.0 , 1.0) 之间的浮点数，
- numpy.random.random(size=None)  
random_sample的别称
- numpy.random.choice(a, size=None, replace=True, p=None)  
从给定的一维数组生成随机样本
```
>>> np.random.choice(5, 3)
array([0, 3, 4]) # random
```
