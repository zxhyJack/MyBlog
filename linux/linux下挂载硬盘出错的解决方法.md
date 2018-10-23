linux下挂载硬盘出错的解决方法
=========================

我的电脑是 Uuntu16.04 + win10 双系统，今天在Ubuntu中打开D盘时报错 `Error mounting /dev/sda5`

原因是D盘的格式是ntfs，在linux中会出现不识别的情况，修复一下就可以了

解决方法是使用ntfsfix命令 `sudo ntfsfix /dev/sdb5` 修复挂载错误的相应的分区

