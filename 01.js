// - 练习
// 输入：一个数字
// 输出：如果大于10,输出gt，如果小于10,输出lt,如果等于10,输出eq

function panduan(a){
  if(a<10){
    console.log('lt')
  }
  else if(a>10){
    console.log('gt')
  }else{
    console.log('eq');
  }
}

panduan(10)

// 输入：1-6中的一个数字
// 输出：英文月份名称

function month(a){
  switch(a){
    case 1:console.log('January');break
    case 2:console.log('February');break
    case 3:console.log('March');break
    case 4:console.log('April');break
    case 5:console.log('May');break
    case 6:console.log('June');break
  
  }
}

month(4)




function season(str){
  switch(str){
    case '春天':console.log('spring');break
    case '夏天':console.log('summer');break
    case '秋天':console.log('automn');break
    case '冬天':console.log('winter');break
  }
}

season('春天')

// if-else if-else

function season(str){
  if(str = '春天'){
    console.log('spring')
  }
  else if(str = '夏天'){
    console.log('summer')
  }
  else if(str = '秋天'){
    console.log('autome')
  }
  else{
    console.log('winter')
  }
}
season('冬天')