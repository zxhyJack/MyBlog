let arr = [1, 2, 3]
delete arr[1]

// arr.splice(1)
console.log(arr);

for(index in arr){
  console.log(arr[index])
}

let arr = [1,2,3]

arr.splice(1,1,5,6)
console.log(arr)  //[1,5,6,3]

let user = {
  name:'Jack',
  age:21
}

delete user.name

console.log(user)

let str = ' he llo '

console.log(str.replace(/(\s$)/g,''));
console.log(eval('[' + String(['1', '2', '3']) + ']')) // [1,2,3])
