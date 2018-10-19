linux下解压缩文件中文乱码问题的解决
==============================

在windows上压缩的文件，是以系统默认编码中文来压缩文件。由于zip文件中没有声明其编码，所以linux上的unzip一般以默认编码解压，中文文件名会出现乱码。
虽然2005年就有人把这报告为bug, 但是info-zip的官方网站没有把自动识别编码列入计划，可能他们不认为这是个问题。Sun对java中存在N年的zip编码问题，采用了同样的处理方式。


有2种方式解决问题：


1. 通过unzip行命令解压，指定字符集

    unzip -O CP936 xxx.zip (用GBK, GB18030也可以)

    有趣的是unzip的manual中并无这个选项的说明, unzip --help对这个参数有一行简单的说明。


2. 在环境变量中，指定unzip参数，总是以指定的字符集显示和解压文件

    /etc/environment中加入2行

    UNZIP="-O CP936"

    ZIPINFO="-O CP936"


这样Gnome桌面的归档文件管理器(file-roller)可以正常使用unzip解压中文，但是file-roller本身并不能设置编码传递给unzip。


转载地址：http://forum.ubuntu.org.cn/viewtopic.php?f=122&t=175405&p=1343326