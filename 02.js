function season(str) {
  
  if (str === '春天') {
    console.log(str);
    console.log('spring')
  } else if (str === '夏天') {
    console.log('summer')
  } else if (str === '秋天') {
    console.log('autome')
  } else if(str === '冬天'){
    console.log('winter')
  } else{
    console.log('error')
  }
}

season('冬天')



let arr = ['北京','上海','广州','深圳']
arr.sort(function (a, b) {
  return a.localeCompare(b,'zh')
})
console.log(arr);

