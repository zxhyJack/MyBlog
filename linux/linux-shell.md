## 常用命令
  - date 显示系统当前的时间和日期

  - cal 默认显示当前月份的日历 后面跟上年份，可以显示整年的日历

  - df 查看磁盘剩余空间的数量

  - free 查看空闲内存的数量

  - exit 结束终端会话
 
## 幕后控制台
通过Ctrl-Alt-F1 到 Ctrl-Alt-F6 访问，
按下 Alt-F7，返回图形桌面

## 文件系统中跳转
 - pwd — 打印出当前工作目录名

  - ls — 列出目录内容

  - cd — 更改目录，实现工作目录的跳转，可以使用绝对路径，也可以使用相对路径（选输入量少的那个）

  - 快捷键  
    + cd 更改工作目录到家目录

    + cd - 更改工作目录到先前的工作目录

  - 文件名
    + 以 “.” 字符开头的文件名是隐藏文件

    + 文件名和命令名区分大小写

    + Linux 没有“文件扩展名”的概念

    + Linux 支持长文件名，文件名可能包含空格，标点符号，但标点符号仅限 使用 “.”，“－”，下划线，注意不要在文件名中使用空格

## 深究操作系统
- ls — 列出目录内容

- file — 确定文件类型

- less — 浏览文件内容
### ls
- 列出当前目录的内容

- 列出制定目录的内容

- 列出多个目录的内容

- ls -l 接过以长模式输出

### 选项和参数
- 格式：命令名经常会带有一个或多个用来更正命令行为的选项， 更进一步，选项后面会带有一个或多个参数，这些参数是命令作用的对象 

- 形式：`command -options arguments`

- 例子：`ls -lt`  
`l` 选项产生长格式输出，`t` 选项按文件修改时间的先后来排序，
加上长选项 `--reverse`，结果会以相反的顺序输出 `ls -lt --reverse`

<table class="multi">
<caption class="cap">表：ls 命令选项 </caption>
<tr>
<th class="title" width="10%">选项</th>
<th width="20%">长选项</th>
<th>描述</th>
</tr>
<tr>
<td valign="top">-a</td>
<td>--all</td>
<td>列出所有文件，甚至包括文件名以圆点开头的默认会被隐藏的隐藏文件。</td>
</tr>
<tr>
<td valign="top">-d</td>
<td>--directory</td>
<td>通常，如果指定了目录名，ls 命令会列出这个目录中的内容，而不是目录本身。
把这个选项与 -l 选项结合使用，可以看到所指定目录的详细信息，而不是目录中的内容。</td>
</tr>
<tr>
<td >-F</td>
<td >--classify</td>
<td >这个选项会在每个所列出的名字后面加上一个指示符。例如，如果名字是
目录名，则会加上一个'/'字符。 </td>
</tr>
<tr>
<td >-h</td>
<td >--human-readable</td>
<td >当以长格式列出时，以人们可读的格式，而不是以字节数来显示文件的大小。</td>
</tr>
<tr>
<td >-l</td>
<td > </td>
<td >以长格式显示结果。 </td>
</tr>
<tr>
<td>-r</td>
<td>--reverse</td>
<td>以相反的顺序来显示结果。通常，ls 命令的输出结果按照字母升序排列。</td>
</tr>
<tr>
<td>-S</td>
<td> </td>
<td>命令输出结果按照文件大小来排序。 </td>
</tr>
<tr>
<td>-t</td>
<td> </td>
<td>按照修改时间来排序。</td>
</tr>
</table>

### 深入研究长格式输出
<table class="multi">
<caption class="cap">表: ls 长格式列表的字段</caption>
<tr>
<th class="title">字段</th>
<th class="title">含义</th>
</tr>
<tr>
<td valign="top" width="20%">-rw-r--r--</td>
<td valign="top">对于文件的访问权限。第一个字符指明文件类型。在不同类型之间，
开头的“－”说明是一个普通文件，“d”表明是一个目录。其后三个字符是文件所有者的
访问权限，再其后的三个字符是文件所属组中成员的访问权限，最后三个字符是其他所
有人的访问权限。这个字段的完整含义将在第十章讨论。 </td>
</tr>
<tr>
<td>1</td>
<td>文件的硬链接数目。参考随后讨论的关于链接的内容。 </td>
</tr>
<tr>
<td>root</td>
<td>文件所有者的用户名。</td>
</tr>
<tr>
<td>root</td>
<td>文件所属用户组的名字。</td>
</tr>
<tr>
<td>32059</td>
<td>以字节数表示的文件大小。</td>
</tr>
<tr>
<td>2007-04-03 11:05 </td>
<td>上次修改文件的时间和日期。</td>
</tr>
<tr>
<td>oo-cd-cover.odf </td>
<td>文件名。</td>
</tr>
</table>

### 确定文件类型

    file filename 

当调用 file 命令后，file 命令会打印出文件内容的简单描述

### 用`less`浏览文件内容
    less filename

- 一旦运行起来，less 程序允许你前后滚动文件
- 按下“q”键， 退出 less 程序
- zless 可以显示由 gzip 压缩的文本文件的内容

<table class="multi">
<caption class="cap">表: less 命令</caption>
<tr>
<th class="title" width="30%">命令</th>
<th class="title">行为</th>
</tr>
<tr>
<td valign="top">Page UP or b</td>
<td valign="top">向上翻滚一页</td>
</tr>
<tr>
<td valign="top">Page Down or space</td>
<td valign="top">向下翻滚一页</td>
</tr>
<tr>
<td valign="top">UP Arrow</td>
<td valign="top">向上翻滚一行</td>
</tr>
<tr>
<td valign="top">Down Arrow</td>
<td valign="top">向下翻滚一行</td>
</tr>
<tr>
<td valign="top">G</td>
<td valign="top">移动到最后一行</td>
</tr>
<tr>
<td valign="top">1G or g</td>
<td valign="top">移动到开头一行</td>
</tr>
<tr>
<td valign="top">/charaters</td>
<td valign="top">向前查找指定的字符串</td>
</tr>
<tr>
<td valign="top">n</td>
<td valign="top">向前查找下一个出现的字符串，这个字符串是之前所指定查找的</td>
</tr>
<tr>
<td valign="top">h</td>
<td valign="top">显示帮助屏幕</td>
</tr>
<tr>
<td valign="top">q</td>
<td valign="top">退出 less 程序</td>
</tr>
</table>

### linux文件目录
<table class="multi">
<caption class="cap">表: Linux 系统中的目录</caption>
<tr>
<th class="title">目录</th>
<th class="title">评论</th>
</tr>
<tr>
<td valign="top">/</td>
<td valign="top">根目录，万物起源。</td>
</tr>
<tr>
<td valign="top">/bin</td>
<td valign="top">包含系统启动和运行所必须的二进制程序。</td>
</tr>
<tr>
<td valign="top">/boot</td>
<td valign="top"><p>包含 Linux 内核、初始 RAM 磁盘映像（用于启动时所需的驱动）和
启动加载程序。</p>
<p>有趣的文件：</p>
<ul>
<li>/boot/grub/grub.conf or menu.lst， 被用来配置启动加载程序。</li>
<li>/boot/vmlinuz，Linux 内核。</li>
</ul>
</td>
</tr>
<tr>
<td valign="top">/dev</td>
<td valign="top">这是一个包含设备结点的特殊目录。“一切都是文件”，也适用于设备。
在这个目录里，内核维护着所有设备的列表。</td>
</tr>
<tr>
<td valign="top">/etc</td>
<td valign="top"><p>这个目录包含所有系统层面的配置文件。它也包含一系列的 shell 脚本，
在系统启动时，这些脚本会开启每个系统服务。这个目录中的任何文件应该是可读的文本文件。</p>
<p>有趣的文件：虽然/etc 目录中的任何文件都有趣，但这里只列出了一些我一直喜欢的文件：</p>
<ul>
<li>/etc/crontab， 定义自动运行的任务。</li>
<li>/etc/fstab，包含存储设备的列表，以及与他们相关的挂载点。</li>
<li>/etc/passwd，包含用户帐号列表。 </li>
</ul>
</td>
</tr>
<tr>
<td valign="top">/home</td>
<td valign="top">在通常的配置环境下，系统会在/home 下，给每个用户分配一个目录。普通用户只能
在自己的目录下写文件。这个限制保护系统免受错误的用户活动破坏。</td>
</tr>
<tr>
<td valign="top">/lib </td>
<td valign="top">包含核心系统程序所使用的共享库文件。这些文件与 Windows 中的动态链接库相似。</td>
</tr>
<tr>
<td valign="top">/lost+found </td>
<td valign="top">每个使用 Linux 文件系统的格式化分区或设备，例如 ext3文件系统，
都会有这个目录。当部分恢复一个损坏的文件系统时，会用到这个目录。这个目录应该是空的，除非文件系统
真正的损坏了。</td>
</tr>
<tr>
<td>/media </td>
<td>在现在的 Linux 系统中，/media 目录会包含可移动介质的挂载点，
例如 USB 驱动器，CD-ROMs 等等。这些介质连接到计算机之后，会自动地挂载到这个目录结点下。
</td>
</tr>
<tr>
<td>/mnt</td>
<td>在早些的 Linux 系统中，/mnt 目录包含可移动介质的挂载点。</td>
</tr>
<tr>
<td>/opt</td>
<td>这个/opt 目录被用来安装“可选的”软件。这个主要用来存储可能
安装在系统中的商业软件产品。</td>
</tr>
<tr>
<td>/proc</td>
<td>这个/proc 目录很特殊。从存储在硬盘上的文件的意义上说，它不是真正的文件系统。
相反，它是一个由 Linux 内核维护的虚拟文件系统。它所包含的文件是内核的窥视孔。这些文件是可读的，
它们会告诉你内核是怎样监管计算机的。</td>
</tr>
<tr>
<td>/root</td>
<td>root 帐户的家目录。</td>
</tr>
<tr>
<td>/sbin</td>
<td>这个目录包含“系统”二进制文件。它们是完成重大系统任务的程序，通常为超级用户保留。</td>
</tr>
<tr>
<td>/tmp</td>
<td>这个/tmp 目录，是用来存储由各种程序创建的临时文件的地方。一些配置导致系统每次
重新启动时，都会清空这个目录。</td>
</tr>
<tr>
<td>/usr</td>
<td>在 Linux 系统中，/usr 目录可能是最大的一个。它包含普通用户所需要的所有程序和文件。</td>
</tr>
<tr>
<td>/usr/bin</td>
<td>/usr/bin 目录包含系统安装的可执行程序。通常，这个目录会包含许多程序。</td>
</tr>
<tr>
<td>/usr/lib</td>
<td>包含由/usr/bin 目录中的程序所用的共享库。 </td>
</tr>
<tr>
<td>/usr/local</td>
<td>这个/usr/local 目录，是非系统发行版自带程序的安装目录。
通常，由源码编译的程序会安装在/usr/local/bin 目录下。新安装的 Linux 系统中会存在这个目录，
并且在管理员安装程序之前，这个目录是空的。</td>
</tr>
<tr>
<td>/usr/sbin</td>
<td>包含许多系统管理程序。 </td>
</tr>
<tr>
<td>/usr/share</td>
<td>/usr/share 目录包含许多由/usr/bin 目录中的程序使用的共享数据。
其中包括像默认的配置文件、图标、桌面背景、音频文件等等。</td>
</tr>
<tr>
<td>/usr/share/doc</td>
<td>大多数安装在系统中的软件包会包含一些文档。在/usr/share/doc 目录下，
我们可以找到按照软件包分类的文档。</td>
</tr>
<tr>
<td>/var</td>
<td>除了/tmp 和/home 目录之外，相对来说，目前我们看到的目录是静态的，这是说，
它们的内容不会改变。/var 目录存放的是动态文件。各种数据库，假脱机文件，
用户邮件等等，都位于在这里。</td>
</tr>
<tr>
<td>/var/log</td>
<td>这个/var/log 目录包含日志文件、各种系统活动的记录。这些文件非常重要，并且
应该时时监测它们。其中最重要的一个文件是/var/log/messages。注意，为了系统安全，在一些系统中，
你必须是超级用户才能查看这些日志文件。</td></tr>
</table>

### 符号链接
也成为软链接或`symlink`

    lrwxrwxrwx 1 root root 11 2007-08-11 07:34 libc.so.6 -> libc-2.6.so

`l`代表该文件是链接,`libc.so.6 -> libc-2.6.so`代表`libc.so.6`是指向`libc-2.6.so`的链接，执行`libc.so.6`时，实际上执行的是`libc-2.6.so`

## 操作文件和目录
- cp — 复制文件和目录

- mv — 移动/重命名文件和目录

- mkdir — 创建目录

- rm — 删除文件和目录

- ln — 创建硬链接和符号链接

### 通配符
<table class="multi">
<caption class="cap">表: 通配符</caption>
<tr>
<th class="title">通配符</th>
<th class="title">意义</th>
</tr>
<tr>
<td valign="top">*</td>
<td valign="top">匹配任意多个字符（包括零个或一个）</td>
</tr>
<tr>
<td valign="top">?</td>
<td valign="top">匹配任意一个字符（不包括零个）</td>
</tr>
<tr>
<td valign="top">[characters]</td>
<td valign="top">匹配任意一个属于字符集中的字符</td>
</tr>
<tr>
<td valign="top">[!characters]</td>
<td valign="top">匹配任意一个不是字符集中的字符</td>
</tr>
<tr>
<td valign="top" width="25%">[[:class:]]</td>
<td valign="top">匹配任意一个属于指定字符类中的字符</td>
</tr>
</table>

<table class="multi">
<caption class="cap">表5-2: 普遍使用的字符类</caption>
<tr>
<th class="title">字符类</th>
<th class="title">意义</th>
</tr>
<tr>
<td>[:alnum:]</td>
<td>匹配任意一个字母或数字</td>
</tr>
<tr>
<td>[:alpha:]</td>
<td>匹配任意一个字母</td>
</tr>
<tr>
<td>[:digit:]</td>
<td>匹配任意一个数字</td>
</tr>
<tr>
<td>[:lower:]</td>
<td>匹配任意一个小写字母</td>
</tr>
<tr>
<td width="25%">[:upper:]</td>
<td>匹配任意一个大写字母</td>
</tr>
</table>

<table class="multi">
<caption class="cap">表5-3: 通配符范例</caption>
<tr>
<th class="title">模式</th>
<th class="title">匹配对象</th>
</tr>
<tr>
<td valign="top">*</td>
<td valign="top">所有文件</td>
</tr>
<tr>
<td valign="top">g*</td>
<td valign="top">文件名以“g”开头的文件</td>
</tr>
<tr>
<td valign="top">b*.txt</td>
<td valign="top">以"b"开头，中间有零个或任意多个字符，并以".txt"结尾的文件</td>
</tr>
<tr>
<td valign="top">Data???</td>
<td valign="top">以“Data”开头，其后紧接着3个字符的文件</td>
</tr>
<tr>
<td valign="top">[abc]*</td>
<td valign="top">文件名以"a","b",或"c"开头的文件</td>
</tr>
<tr>
<td valign="top">BACKUP.[0-9][0-9][0-9]</td>
<td valign="top">以"BACKUP."开头，并紧接着3个数字的文件</td>
</tr>
<tr>
<td valign="top">[[:upper:]]*</td>
<td valign="top">以大写字母开头的文件</td>
</tr>
<tr>
<td valign="top">[![:digit:]]*</td>
<td valign="top">不以数字开头的文件</td>
</tr>
<tr>
<td valign="top" width="25%">*[[:lower:]123]</td>
<td valign="top">文件名以小写字母结尾，或以 “1”，“2”，或 “3” 结尾的文件</td>
</tr>
</table>

### mkdir - 创建目录
- `make directory...`

有三个圆点跟在一个命令的参数后面，表示该参数可以重复
- `mkdir dir1 dir2 dir3` 同时创建三个文件夹

### cp - 复制文件和目录
- 复制单个文件或目录”item1”到文件或目录”item2”

        cp item1 item2

 - 复制多个项目（文件或目录）到一个目录下

        cp item... directory

 <table class="multi">
<caption class="cap">表5-4: cp 选项</caption>
<tr>
<th class="title">选项</th>
<th class="title">意义</th>
</tr>
<tr>
<td valign="top" width="25%">-a, --archive</td>
<td valign="top">复制文件和目录，以及它们的属性，包括所有权和权限。
通常，复本具有用户所操作文件的默认属性。</td>
</tr>
<tr>
<td valign="top">-i, --interactive</td>
<td valign="top">在重写已存在文件之前，提示用户确认。如果这个选项不指定，
cp 命令会默认重写文件。</td>
</tr>
<tr>
<td valign="top">-r, --recursive</td>
<td valign="top">递归地复制目录及目录中的内容。当复制目录时，
需要这个选项（或者-a 选项）。</td>
</tr>
<tr>
<td valign="top">-u, --update </td>
<td valign="top">当把文件从一个目录复制到另一个目录时，仅复制
目标目录中不存在的文件，或者是文件内容新于目标目录中已经存在的文件。</td>
</tr>
<tr>
<td valign="top">-v, --verbose</td>
<td valign="top">显示翔实的命令操作信息</td>
</tr>
</table>

<table class="multi">
<caption class="cap">表5-5: cp 实例</caption>
<tr>
<th class="title">命令</th>
<th class="title">运行结果</th>
</tr>
<tr>
<td valign="top" width="25%">cp file1 file2</td>
<td valign="top">复制文件 file1 内容到文件 file2。如果 file2 已经存在，
file2 的内容会被 file1 的内容重写。如果 file2 不存在，则会创建 file2。</td>
</tr>
<tr>
<td valign="top">cp -i file1 file2 </td>
<td valign="top">这条命令和上面的命令一样，除了如果文件 file2 存在的话，在文件 file2 被重写之前，
会提示用户确认信息。</td>
</tr>
<tr>
<td valign="top">cp file1 file2 dir1 </td>
<td valign="top">复制文件 file1 和文件 file2 到目录 dir1。目录 dir1 必须存在。
</td>
</tr>
<tr>
<td valign="top">cp dir1/* dir2 </td>
<td valign="top">使用一个通配符，在目录 dir1 中的所有文件都被复制到目录 dir2 中。
dir2 必须已经存在。</td>
</tr>
<tr>
<td valign="top">cp -r dir1 dir2 </td>
<td valign="top">复制目录 dir1 中的内容到目录 dir2。如果目录 dir2 不存在，
创建目录 dir2，操作完成后，目录 dir2 中的内容和 dir1 中的一样。
如果目录 dir2 存在，则目录 dir1 (和目录中的内容)将会被复制到 dir2 中。</td>
</tr>
</table>

### mv - 移动和重命名文件
- 把文件或目录 “item1” 移动或重命名为 “item2”
        
        mv item1 item2

- 把一个或多个条目从一个目录移动到另一个目录中

        mv item... directory

<table class="multi">
<caption class="cap">表5-6: mv 选项</caption>
<tr>
<th class="title">选项</th>
<th class="title">意义</th>
</tr>
<tr>
<td valign="top" width="25%">-i --interactive</td>
<td valign="top">在重写一个已经存在的文件之前，提示用户确认信息。
<b>如果不指定这个选项，mv 命令会默认重写文件内容。</b></td>
</tr>
<tr>
<td valign="top">-u --update</td>
<td valign="top">当把文件从一个目录移动另一个目录时，只是移动不存在的文件，
或者文件内容新于目标目录相对应文件的内容。</td>
</tr>
<tr>
<td valign="top">-v --verbose</td>
<td valign="top">当操作 mv 命令时，显示翔实的操作信息。</td>
</tr>
</table>

<table class="multi">
<caption class="cap">表5-7: mv 实例</caption>
<tr>
<td class="title">mv file1 file2</td>
<td class="title">移动 file1 到 file2。<b>如果 file2 存在，它的内容会被 file1 的内容重写。
</b>如果 file2 不存在，则创建 file2。<b> 这两种情况下，file1 都不再存在。</b></td>
</tr>
<tr>
<td valign="top" width="25%">mv -i file1 file2</td>
<td valign="top">除了如果 file2 存在的话，在 file2 被重写之前，用户会得到
提示信息外，这个和上面的选项一样。</td>
</tr>
<tr>
<td valign="top">mv file1 file2 dir1</td>
<td valign="top">移动 file1 和 file2 到目录 dir1 中。dir1 必须已经存在。</td>
</tr>
<tr>
<td valign="top">mv dir1 dir2</td>
<td valign="top">如果目录 dir2 不存在，创建目录 dir2，并且移动目录 dir1 的内容到
目录 dir2 中，同时删除目录 dir1。如果目录 dir2 存在，移动目录 dir1（及它的内容）到目录 dir2。</td>
</tr>
</table>

### rm - 删除文件和目录
    rm item...

`item` 代表一个或多个文件、目录

<table class="multi">
<caption class="cap">表5-8: rm 选项</caption>
<tr>
<th class="title">选项</th>
<th class="title">意义</th>
</tr>
<tr>
<td valign="top" width="25%">-i, --interactive </td>
<td
valign="top">在删除已存在的文件前，提示用户确认信息。
<b>如果不指定这个选项，rm 会默默地删除文件</b>
</td>
</tr>
<tr>
<td valign="top">-r, --recursive</td>
<td valign="top">递归地删除文件，这意味着，如果要删除一个目录，而此目录
又包含子目录，那么子目录也会被删除。要删除一个目录，必须指定这个选项。</td>
</tr>
<tr>
<td valign="top">-f, --force</td>
<td valign="top">忽视不存在的文件，不显示提示信息。这选项覆盖了“--interactive”选项。</td>
</tr>
<tr>
<td valign="top">-v, --verbose</td>
<td valign="top">在执行 rm 命令时，显示翔实的操作信息。</td>
</tr>
</table>

<table class="multi">
<caption class="cap">表5-9: rm 实例</caption>
<tr>
<th class="title">命令</th>
<th class="title">运行结果</th>
</tr>
<tr>
<td valign="top" width="25%">rm file1</td>
<td valign="top">默默地删除文件</td>
</tr>
<tr>
<td valign="top">rm -i file1</td>
<td valign="top">除了在删除文件之前，提示用户确认信息之外，和上面的命令作用一样。</td>
</tr>
<tr>
<td valign="top">rm -r file1 dir1</td>
<td valign="top">删除文件 file1, 目录 dir1，及 dir1 中的内容。</td>
</tr>
<tr>
<td valign="top">rm -rf file1 dir1</td>
<td valign="top">同上，除了如果文件 file1，或目录 dir1 不存在的话，rm 仍会继续执行。</td>
</tr>
</table>


注意：小心使用rm 


linux系统没有复原命令，一旦用rm删除了一些东西，他就消失了

另外删除时，谨慎使用通配符*

tips：当你使用带有通配符的rm命令时（除了仔细检查输入的内容外）， 先用 ls 命令来测试通配符。这会让你看到将要被删除的文件是什么。然后再使用rm命令

### ln — 创建链接
- 创建硬链接

        ln file link

- 创建符号链接（软链接）

        ln -s item link

### 硬链接

局限性：

1. 一个硬链接不能关联它所在文件系统之外的文件。这是说一个链接不能关联 与链接本身不在同一个磁盘分区上的文件。

2. 一个硬链接不能关联一个目录。

### 符号链接
符号链接生效，是通过创建一个 特殊类型的文件，这个文件包含一个关联文件或目录的文本指针，类似于windows的快捷方式

- 可以使用绝对路径 `ln -s /home/me/playground/fun dir1/fun-sym`
- 可以使用相对路径 
- 也可以关联目录 `ln -s dir1 dir1-sym`

## 使用命令
- type – 说明怎样解释一个命令名
- which – 显示会执行哪个可执行程序
- man – 显示命令手册页
- apropos – 显示一系列适合的命令
- info – 显示命令 info
- whatis – 显示一个命令的简洁描述
- alias – 创建命令别名

### 什么是命令
- 可执行程序，例子：`/usr/bin` 下的文件

- 内建于 shell 自身的命令，例子：cd

- shell 函数，例子：小规模的shell脚本

- 命令别名，定义自己的命令，建立在其他命令之上

### 识别命令
- type － 显示命令的类型，是shell内部命令

        type command

- which － 显示一个可执行程序的位置，只对可执行程序有效，不包括内建命令和命令别名

        which ls

### 得到命令文档
- help － 得到 shell 内建命令的帮助文档

        help cd

- --help - 显示用法信息，显示命令所支持的语法和选项说明

> mkdir --help

    mkdir --h

- man － 显示程序手册页,一般地包含一个标题、命令语法的纲要、命令用途的说明、 以及每个命令选项的列表和说明

        man ls

- apropos － 显示适当的命令

也有可能搜索参考手册列表，基于某个关键字的匹配项,输出结果每行的第一个字段是手册页的名字，第二个字段展示章节。注意，man 命令加上”-k”选项， 和 apropos 完成一样的功能。

- whatis － 显示非常简洁的命令说明

显示匹配特定关键字的手册页的名字和一行命令说明

- info － 显示程序 Info 条目

info是GNU 项目提供了一个命令程序手册页的替代物

    info coreutils

 <table class="multi">
<caption class="cap">表 6-2: info 命令</caption>
<thead>
<tr>
<th class="title">命令</th>
<th class="title">行为</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top" width="25%">?</td>
<td valign="top">显示命令帮助</td>
</tr>
<tr>
<td valign="top">PgUp or Backspace</td>
<td valign="top">显示上一页 </td>
</tr>
<tr>
<td valign="top">PgDn or Space</td>
<td valign="top">显示下一页</td>
</tr>
<tr>
<td valign="top">n</td>
<td valign="top">下一个 - 显示下一个结点</td>
</tr>
<tr>
<td valign="top">p</td>
<td valign="top">上一个 - 显示上一个结点</td>
</tr>
<tr>
<td valign="top">u</td>
<td valign="top">Up - 显示当前所显示结点的父结点，通常是个菜单</td>
</tr>
<tr>
<td valign="top">Enter</td>
<td valign="top">激活光标位置下的超级链接</td>
</tr>
<tr>
<td valign="top">q</td>
<td valign="top">退出</td>
</tr>
</tbody>
</table>

### 用别名（alias）创建你自己的命令

在创建别名前，要先查明该别名是否已经存在
 `type 别名`

    alias foo='cd /usr; ls; cd -'

删除别名

    unalias foo

## 重定向
- cat － 连接文件

- sort － 排序文本

- uniq － 报道或省略重复行

- grep － 打印匹配行

- wc － 打印文件中换行符，字，和字节个数

- head － 输出文件第一部分

- tail - 输出文件最后一部分

- tee - 从标准输入读取数据，并同时写到标准输出和文件

### 标准输出重定向
I/O 重定向允许我们来重定义标准输出的地点。我们使用 `>` 重定向符后接文件名将标准输出重定向到除屏幕 以外的另一个文件。

例如：把 ls 命令的运行结果输送到文件 ls-output.txt 中去， 由文件代替屏幕

    ls -l /usr/bin > ls-output.txt

简单地使用重定向符`>`，没有命令在它之前，这会清空一个已存在文件的内容或是 创建一个新的空文件

    `> ls-output.txt`

把重定向结果追加到文件内容后面，而不是从开头重写文件,可以使用 `>>` 操作符

    ls -l /usr/bin >> ls-output.txt

### 标准错误重定向
文件流的前 三个称作标准输入、输出和错误，shell 内部分别将其称为文件描述符0、1和2,例子：
    
    ls -l /bin/usr 2> ls-error.txt

文件描述符”2”，紧挨着放在重定向操作符之前，来执行重定向标准错误到文件 ls-error.txt 任务

### 重定向标准输出和错误到同一个文件
捕捉一个命令的所有输出到一个文件

-   ls -l /bin/usr > ls-output.txt 2>&1

使用这种方法，我们完成两个重定向。首先重定向标准输出到文件 ls-output.txt，然后 重定向文件描述符重定向标准错误到文件 ls-output.txt，重定向的顺序安排非常重要。标准错误的重定向必须总是出现在标准输出 重定向之后，要不然它不起作用。2>&1，表示2的输出重定向等同于1

-   ls -l /bin/usr &> ls-output.txt

使用单单一个表示法 `&>` 来重定向标准输出和错误到文件 ls-output.txt

### 处理不需要的输出
当不想要一个命令的输出结果，把它们扔掉时，可以通过重定向输出结果到`/dev/null`的文件，这个文件叫做位存储桶，使用于错误和状态信息

    node dist >/dev/null 2>&1 &

`>/dev/null`将 node dist 的输出重定向到空设备文件，也就是不输出任何信息到终端，`2>&1`标准错误输出重定向（等同于）标准输出，，最后一个`&`，是让该命令在后台执行

### 标准输入重定向
#### cat － 连接文件
- 读取一个或多个文件，输出到标准输出
    
    cat [file1] [file2]

- 读取标准输入，输出到标准输出

    cat 

然后等待用户输入，输入完成后，`ctrl + D` 结束输入，然后复制刚才输入的内容到标准输出。

回车会显示刚才输入的一行内容，输出完成后，`ctrl + D` 退出 `cat` 命令

- 可以使用重定向把输入的内容输出到文件中

        cat > input.txt

### 管道线
可以将第一个命令的输出结果作为第二个命令的输入

    command1 | command2

例子：

    ls -l /usr/bin | less

方便查看有标准输出的命令的结果

### 过滤器
- sort － 对列表进行排序,输出有序列表

    ls -l /bin /usr/bin | sort | less

对两个有序列表进行合并,合并成新的有序列表

- uniq － 去除重复行


    ls -l /bin /usr/bin | sort | uniq | less

使用uniq把sort的结果删除重复行,如果想看到重复的数据列表,可以在uniq后带上`-d`,uniq一般与sort一起使用

    ls -l /bin /usr/bin | sort | uniq -d | less

wc － 打印行数、字数和字节数

显示文件所包含的行数,字数和字节数

    wc input.txt

wc接受标准输入,类似cat

    wc

wc可以用在管道线来统计数据,`-l`只显示行数

    ls /bin /usr/bin | sort | uniq | wc -l

- grep － 打印匹配行

寻找文件中的匹配文件

> ls -l /usr/bin | grep zip 

显示 `/usr/bin` 下包含zip字段的文件

grep有一些选项:`-i` 忽略大小写,`-v` 只显示不匹配的行

- head / tail － 打印文件开头部分/结尾部分

head: 显示文件的前十行

tail: 显示文件的后十行
    head in.txt
    tail in.txt

后面跟`-n`可以指定显示多少行

    head -n 5 in.txt // 显示前五行

可以用在管道中

    ls -l /usr/bin | head -n 5

tail使用”-f”选项，tail 命令继续监测这个文件，当新的内容添加到文件后，它们会立即 出现在屏幕上。这会一直继续下去直到你输入 Ctrl-c

    tail -f /var/log/messages

- tee － 从 Stdin 读取数据，并同时输出到 Stdout 和文件

从标准输入读取数据,同时复制到标准输出和一个或多个文件

    ls -l /usr/bin | grep zip | tee in.txt

读取查询结果输出到in.txt中


### 从shell眼中看世界
- echo 显示一行文本

#### 字符展开

    [mutou@mutou:~]$ echo this is a test
    this is a test 

#### 路径名展开

    ls 
    echo D*

控制台显示

> Desktop Documents

隐藏文件路径名展开

    echo * // 不显示隐藏文件

    echo .* // 显示隐藏文件，但是会把`.` `..`也显示出来

    echo .[!.]* //显示隐藏文件

    ls -A // 显示所有的文件清单，包括隐藏的和非隐藏的

#### 波浪线展开
    [mutou@mutou:~]$ echo ~
    /home/tiger

#### 算数表达式展开
算数表达式的格式 `$((expression))`

使用echo展开

    [mutou@mutou:~]$ echo $((2+2))
    4

算数表达式只支持整数，支持嵌套,例如5的平方乘以3

    [mutou@mutou:~]$ echo $(((5**2)*3))
    75

#### 花括号的展开
从一个包含花括号的模式中，创建出多个字符串

    [mutou@mutou:~]$ echo Front-{A,B,C}-back
    Front-A-back Front-B-back Front-C-back

    [mutou@mutou:~]$ echo Number{1..3}
    Number1 Number2 Number3

#### 参数展开
USER：是用户名

printenv：有效的变量列表

    [mutou@mutou:~]$ echo $USER
    mutou

    [mutou@mutou:~]$ printenv | less

#### 命令替换

命令替换允许我们把一个命令的输出作为一个展开模式来使用

    [mutou@mutou:~]$ echo $(ls)
    company doc download duoda MyBlog resource summary TLCL YQTJ

#### 引用

    [mutou@mutou:~]$ echo $100
    00

shell提供了一种叫做引用的机制，来有选择地禁止不需要的展开
参数展开时把`$1`的值替换为一个空字符串，

#### 双引号

属于引用的类型，如果把文本放在双引号中，shell使用的特殊字符将失去他们的特殊含义u，被当作普通字符来看待，除了$，\\（反斜杠），\`（倒引号），这意味着单词分割、路径名展开、波浪线展开、和花括号展开都将失效，而参数展开、算数展开和命令替换仍然执行

使用双引号，我们可以组织单词分割，得到期望的结果

     [mutou@mutou:~]$ ls -l “two words.txt”

参数展开、算数表达式展开和命令替换仍然有效
     [mutou@mutou:~]$ echo "$USER $((2+2)) $(cal)"

#### 单引号

单引号可以禁止所有的展开，以下例子是无引用、双引号i，单引号的比较结果

    [mutou@mutou:~]$ echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
    text /home/me/ls-output.txt a b foo 4 me
    [mutou@mutou:~]$ echo "text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER"
    text ~/*.txt   {a,b} foo 4 me
    [mutou@mutou:~]$ echo 'text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER'
    text ~/*.txt  {a,b} $(echo foo) $((2+2)) $USER

#### 转义字符
  
如果只想引用单个字符，可以在字符之前加上一个反斜杠，在双引号中使用转义字符可以有选择地组织展开

    [mutou@mutou:~]$ echo “The balance for user $USER id: \$5.00”
    The balance for user me is: $5.00

使用转义字符来消除文件名中一些字符的特殊含义是很普遍的，例如"$"，"!"，" "

    [mutou@mutou:~]$ mv bad\&filename good_filename





