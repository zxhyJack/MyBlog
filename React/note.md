### react获取标签属性值

- 标签设置ref属性，通过this.refs来获取属性值

    <input type='text' ref='name' />
  
  获取这个标签value值时，可以使用 `this.refs.name.value`

- 在标签上对ref赋值

  首先在组件内声明变量，例如：`text`

    <input type='text' ref={in => this.text=in} />

  获取标签value值时，可以使用 `this.text.value`

- 使用form表单，利用FormData对象通过name属性获取表单内值

  首先在组件内声明变量，例如：`formElem`，然后把input标签放在form表单中

    <form ref={in => this.formElem=in} >
      <input type='text' name='desc' />
    </form>

  然后使用FormData对象

    let formData = new FormData(formElem)

  再使用formData对象通过name来获取value值

    console.log(formData.get('desc'))

- e.currentTarget.value

  通过点击事件传值

    <input type="text" onMouseLeave ={this.onMouse.bind(this)}

  通过下面的函数来取值

    private onMouse(e: React.MouseEvent<any>){
      console.log(e.currentTarget.value);
    }