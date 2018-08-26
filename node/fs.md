## 简介

文件系统模块用来对本地的文件进行操作

使用方法：

    const fs = require('fs')

所有的文件系统操作都用同步和异步两种方式

异步形式的最后一个参数是完成时的回调函数，传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 如果操作成功完成，则第一个参数会是 null 或 undefined。

    const fs = require('fs')

    fs.readFile('./hello',(err,result)=>{
      if(err) throw err
      console.log(result)
      }
    })

当使用同步操作时，任何异常都会被立即抛出，可以使用 try/catch 来处理异常，或让异常向上冒泡。

    const fs = require('fs')

    try{
      let content = fs.readFileSync('./hello','utf8')
      console.log(content)
    }catch(err){
      console.log(err)
    }

异步的方法不能保证执行顺序,需要嵌套处理

    const fs = require('fs')

    fs.rename('/tmp/hello', '/tmp/world', (err) => {
      if (err) throw err;
      fs.stat('/tmp/world', (err, stats) => {
        if (err) throw err;
        console.log(`文件属性: ${JSON.stringify(stats)}`);
      });
    });

文件路径

大部分 fs 操作接受字符串、Buffer、或使用 file: 协议的 URL 对象作为文件路径。

字符串形式的路径会被解释为表示绝对路径或相对路径的 UTF-8 字符序列。相对路径会相对于 process.cwd() 定义的当前工作目录进行处理。

## 常用方法

### fs.readdir(path[, options], callback)

    - path <string> | <Buffer> | <URL>

    - options <string> | <Object>

      - encoding <string> 默认 = 'utf8'

    - callback <Function>

      - err <Error>

      - files <string[]> | <Buffer[]>

异步地读取一个目录的内容，回调有两个参数 (err, files)，其中 files 是目录中不包括 '.' 和 '..' 的文件名的数组。

可选的 options 参数用于传入回调的文件名，它可以是一个字符串并指定一个字符编码，或是一个对象且由一个 encoding 属性指定使用的字符编码。 如果 encoding 设为 'buffer'，则返回的文件名会被作为 Buffer 对象传入。 注意: 'path' 的路径是以当前文件为基准进行查找的,而不是运行的时候的相对路径

    const fs = require('fs')

    fs.readdir('/',(err.files) =>{
      if(err) throw err;
      console.log(files)
    })

### fs.readirSync(path[,options])

同步的读取一个目录的内容，返回一个不包括 '.' 和 '..' 的文件名的数组。