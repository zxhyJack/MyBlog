docker容器与宿主机互相拷贝文件
==========================

docker本身提供了 `cp` 命令，支持容器的传入和传出

docker容器 -> 宿主机
-------------------

    docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
- `SRC_PATH` 是要拷贝的文件在容器中路径
- `DEST_PATH` 是要存放在宿主主机中的路径

选项：
- `--archive, -a` 存档模式， 拷贝所有的uid/gid 信息
- `--follow-link, -L` 跟随容器中文件的符号链接复制文件

docker容器 <- 宿主机
-------------------

    docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH

