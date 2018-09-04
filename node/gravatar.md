# 使用gravatar生成头像

avatar代表您在线的图像，当你与网站互动时，你的名字旁边会出现一张图片。

Gravatar是一个全球通用的头像。你只需上传一次并创建自己的个人资料，然后当你加入任何支持Gravatar的网站时，你的Gravatar图片会自动显示

## 使用方法

- 在gravatar网站上上传图片，生成自己的头像

- 填写个人资料，这样在登录支持gravatar的网站时，就会显示个人信息，当然也可以不填写

## 开发使用说明

gravatar依赖邮箱生成的哈希值作为图片地址的一部分,所以需要把邮箱地址哈希化

### 代码实现

    const crypto = require('crypto');

    function gravatar(mail) {
      let size = 100
      let hash = crypto.createHash('md5').update(mail).digest("hex").toLowerCase()
      return `http://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
    }

    let url = gravatar('zxhyJack@126.com')
    console.log(url)

上面的代码可以生成头像的地址，直接访问就可以看到图像

- s 是指图片的大小，默认是 80px × 80 px，图片大小的范围是1-1024px

- d = identicon 可以随机生成一个图片，以后再次登录的时候就不会改变了

### 默认头像

如果图片的url地址只是`http://www.gravatar.com/avatar/${hash}`，不加参数，显示的头像分两种情况

- 一种是已经在gravatar网站上添加过对应邮箱的头像，访问这个url的时候则直接显示设置的图片

- 另一种是没有添加过邮箱的头像，访问这个url时会显示默认的图片G

- 如果没有给邮箱添加过头像，但是不想要默认的图片G，可以添加参数`d=identicon`，则可以随机生成头像，但是生成之后就不会再变了