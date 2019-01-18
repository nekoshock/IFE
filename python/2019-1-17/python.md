#python学习计划
************
### 列表的基本操作
>通过dir(列表名),去出列表所有的操作方法(两条下划线的是自有方法,外面不能用的)
>'append'追加, 'clear', 'copy', 'count'计算, 'extend'扩展, 'index'索引, 'insert'插入, 'pop'删除一个, 'remove'删除指定一个, 'reverse'翻转, 'sort'排序

**添加项** 
`列表名.append(添加项)`

**查找索引值**
`列表名.index(值)` 
通过值找索引值,默认从前往后返回第一个找到的索引值..

**计数**
`列表名.count(值)`
返回匹配到指定值的次数.

**插入**
`列表名.insert(插入位置,"添加项")`

**删除项**
`del 列表名[index]`

**删除最后一个**
`列表名.pop()`
返回被删除项

**翻转**
`列表名.reverse()`

**排序**
`列表名.sort(方法)`
默认按ASCII排序,

**删除指定项**
`列表名.remove("值")` 删除从前往后第一个匹配项.

**切片**
`列表名[0:3]` 
从原列表中取出0,1,2项.
`列表名[0:5:2]` 
从原列表中第0,2,4项(隔一项,取一次);3就是隔两项取一次等等.
负数: -1是最后一项,-2是倒数第2项.
如果忽略不写,默认从头或者到尾.
**扩展**
`列表1.expend(列表2) ≌ 列表1+=列表2`

**判断包含**
比如4 in a
返回布尔值
*********************
### 元祖
`(1,2,3,4,5,6)`
> 只有两个方法 'count', 'index
> **元祖的元素不可修改,元祖的元素的元素是可以被修改的**
> 元祖能做的事情列表都能做,反过来就不行.
> 元祖的意义是明确的告诉别人,这个东西不要改.

**元祖和列表的互相转换**

    元祖转为列表 `list(元祖)`
    列表转为元祖 `tuple(列表)` 
元祖可以做索引和切片,但增删就不行了.

***************
### 算数运算符
 `**` 幂 多少多少此房.
 `//` 取整除 返回商的整数部分.

*************
**位运算**

`&`  按位与 两真为真,有一假为假(两假也是假).
`|`  按位或 一真为真,两假为假.
`^`  异或   一真一假为真,两真或两假为假.
`~`  取反   
`<<` 整体左移
`>>` 整体右移

********
**布尔运算**
`and` 逻辑与
`not` 逻辑非
`or`  逻辑或
**成员运算符**
`in` 在其中?
`not in` 不在其中?
**身份运算符**
`is`  判断两个标识符是否引用自同一个对象
`is not` 判断两个标识符是否引用自不同对象

    type() 获取其类型
********************
### 文件操作
**打开文件**
`file_obj = open("路径","模式")`

**模式:**

    r 只读
    w 只用于写入,原有文件会被覆盖
    a 追加,文件指针会放在文件末尾
    w+ 写读,一般没有人用,会先把原来的文件覆盖掉.
    如果已有文件则覆盖,如果没有就新建

**读取**
`obj.read()` 一次加载所有内容到内存
`obj.readline()` 一次性加载所有内容到内存,并根据行分割成字符串.
```
for line in obj:
    print line
```
每次仅读取一行内容.
**写入**
`obj.write("内容")`
**关闭**
`obj.close()`
*****************
### 接收执行参数
```
import sys
print (sys.argv)
```
程序导入sys,使用sys下的argvs属性.argv内有程序调用文件自身和调用时的参数.
***********
### 字典
> 就是键值对

比如
```
dic = {key1:value1,
        key2:value2}
```

**新增**
`d["key"] = value`

**删除**
`del d["key"]`

**键,值,键值对**
```
keys()
values()
items()
```
for循环时用的到.
**************
一切都是对象(object),对象是有类(class)创建的
`type()`可以找到对象是基于什么类创建的.
*********
### lnt内部功能
>基本没啥卵用

`.__abs__()` 返回绝对值 (两下划线)
另有内置方法 abs(num) 方法(两者是调用关系)

`.__divmod__()` 返回包含商和余数的元祖

`.__float__()` 将数字转换为float型并返回新的数

`.__floordiv__()` 地板除,等价于// (与abs情况类似)

```
.__gt__() greater than
.__lt__() less than
.__ge__() greater equel
.__le__() less equel
返回布尔值
```
*************
`type()` 获得类
`dir()` 获得类里有什么成员
*********
### 字符串内部功能
dir(str)获得:
```
['__add__', '__class__', '__contains__', '__delattr__', 
'__dir__', '__doc__', '__eq__', '__format__', '__ge__', 
'__getattribute__', '__getitem__', '__getnewargs__', '__gt__', 
'__hash__', '__init__', '__init_subclass__', '__iter__', 
'__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__',
'__new__', '__reduce__', '__reduce_ex__', '__repr__', 
'__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__',
'__subclasshook__', 'capitalize', 'casefold', 'center', 
'count', 'encode', 'endswith', 'expandtabs', 'find', 'format',
'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 
'isdecimal', 'isdigit', 'isidentifier', 'islower', 
'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 
'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition',
'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 
'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 
'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```
********
`str.__contains__()` 是否包含,相当于in

`str.__getattribute__()` 反射里会用的到.

`str.capitalize()` 首字母大写,其他小写

`str.casefold()` 均转换为小写

`str.center("宽度","填充物")` 居中

`ljust()`左对齐
`rjust()`右对齐


`str.count(子序列,起始位置,结束位置)` 计算子序列出现次数 

`str.encode()` 编码

`str.ewdswith(子序列,起始位置,结束位置)` ends with,判断字符串是否是以子序列结尾.

`str.expendtabs()` 把tab转换为空格(默认是8个空格).
>tab /t

`str.find(子序列,起始位置,结束位置)`  找到子序列的位置
与index类似,但如果find没找到返回-1,index找不到会报错.
******
`str.format()` 字符串格式化(%r %d %s)的方法版本.

    name = "alex {0} as {1}"
    result name.format("sb","eric")

还有一种方法

    name = "alex {name} as {id}"
    result name.format(name="sb",id="eric")

都是可以拼接的.
*******
```
'isalnum', 'isalpha', 'isascii', 
'isdecimal', 'isdigit', 'isidentifier', 'islower', 
'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper'
```
判断是不是
****
`str.join(分割符)`  将列表用分隔符拼接为字符串

```
str1 = 'abcde'
str2 = '12345'
trans_law = str.maketrans(str1,str2)
str3 = 'abcdefg'
str3.translate(trans_law)
str3 #12345fg
```
其中str.maketrans是str命名空间下的方法,str若另外声明并改成数字便会报错. 也可以用任意字符串代替str,maketrans()是字符串的内置函数.

`str.partition(分割符)` 将字符串分割为:分割符之前,分割符,分割符之后3部分.
必须给1个分割符,匹配到第一个分割符便分割,只分割这一次.

`str.replace("被替换","替换","个数(默认全部)")` 替换若干子序列.

`str.startwith()` 是否以...开头

`str.swapcase()` 全部字符大小写转换

********************
### 