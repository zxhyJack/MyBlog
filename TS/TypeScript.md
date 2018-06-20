### 基本类型
#### 布尔值 boolean  true/false
`let isTrue: boolean = true`
#### 数字 number
所有数字都是浮点数，支持2、8、10、16进制
`let a: number = 0xf00d`
#### 字符串 string	
- `let name: string = 'Bob'`
- 模板字符串 定义多行文本和内嵌表达式
使用反引号包围字符串```,`以`${expr}`这种形式嵌入表达式
		`let sentence: string = 'hello ${name}',
		I am ${year} years old`

#### 数组 Array
定义方式有两种
- `let arr1: number[] = [1,2,3]; //元素类型后面加上[]`
- `let arr2: Array<number> = [1,2,3]; //使用数组泛型` 
#### 元组 Tuple
表示一个已知元素类型和数量的数组，各元素的类型不必相同
> let a: [string, number];
>  a = ['hah',10]; // ok
>  a = [10,'hah']; // error

#### 枚举 enum
> enum Color {
> RED,YELLOW,BLUE
> }
> let c: enum = Color.RED;
#### any
编程阶段还不确定变量是什么类型，不希望类型检查器对这些变量进行检查而是直接通过编译阶段
> let notSure: any = 4;
> notSure = 'hello everyone'
#### void
表示没有任何类型
- 函数没有返回值时，他的返回值类型是void
- void类型的变量，只能赋值为undefined和null
> let a: void = undefined;
#### undefined 和 null
本身的类型用处不大
> let u: undefined = undefined;
> let n:  null = null;
#### never
表示永远不存在值
#### 类型断言
当你比编译器更了解某个值的详细信息，指定变量的类型
- "尖括号"语法 
> let someValue: any = 'this is a string';
> let strLength: number = (<string>someValue).length;
- as语法
> let someValue: any = 'this is a string';
> let strLength: number = (someValue as string).length;

### 变量声明
变量声明有三种方式
- var
- let
- const
#### `var` 声明
var作用域 | 函数作用域：var 声明的变量可以在包含他们的函数外访问
#### `let` 声明
块作用域 | 词法作用域：在包含它们的块或for循环外是不能访问的
- 先声明再调用
> let a: number = 10;
> console.log(a);
- 不可以重复定义相同的变量名
> let a;
> let a; //error
#### `const` 声明
- 声明常量
- 作用域规则与`let`相同
#### 解构

### 接口
#### 介绍
描述JavaScript中对象拥有的各种各样的外形，也可以描述函数类型
类型检查器不会去检查属性的顺序，只要响应的属性存在并且类型正确就可以
> interface User {
> name: string;
> age:number;
> }
#### 可选属性
接口里面的属性不全都是必需的，给函数传入的参数对象只有部分属性赋值了
> interface User {
> name:string;
> addr?:string; // 不必要的属性加？
> }
#### 只读属性
- 一些对象属性只能在对象创建时修改其值，需要在属性名前用`readOnly`来指定只读属性
> interface Point {
> readonly x: number;
> readonly y: number;
> }
- `ReadonlyArray<T>` 把所有可变方法去掉了，可以保证数组创建后再也不被修改
> let a: numberp[] = [1,2,3,4];
> let ro: ReadonlyArray<number> = a;
> ro[0] = 12; //error
> ro.push(5) //error 
- `readonly` vs `const`
	- 修饰属性使用 `readonly`
	- 修饰变量使用 `const`	 
#### 额外的属性检查

#### 函数类型
为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
- 定义函数接口
> interface SearchFunc {
> (source: string, substring: string): boolean;
> }
- 使用函数接口
> let mySearch: SearchFunc;
> mySearch = function(src: string, sub: string) {
	> let result  = src.search(sub);
	> return result > -1;
> }
#### 可索引的类型
#### 类类型
#### 继承接口
- 接口可以互相继承
- 一个接口可以继承多个接口，创建 出多个接口的合成接口
> interface Shape {
	> color: string;
> }
> interface PenStroke {
	> penWidth: number;
> }
> interface Square extends Shape, PenStroke {
	> sideLength: number;
> }
> let square = `<Square>{}`
> square.color = 'blue';
> square.sideLength = 10;
> square.penWidth = 5.0;
> 
#### 混合类型
包含多种类型，即：一个对象可以同时作为函数和对象使用，并带有额外的属性
#### 接口继承类

### 类
#### 类的定义和使用
- 定义，包括属性、构造函数、方法
> Class User {
	> name: string;
	> constructor(name: string) {
		> this.name = name;
	> }
	> sayHello() {
		> return 'hello,' + this.greeting;
	> }
> }
- 使用
> let user1 = new User('Jack');

#### 继承
使用继承来扩展现有的类
> class Animal {
	> move(distance: string) {
			> console.log(`animal moved ${distance}m`);
	> }
> }
> class Dog **extends** Animals {
	> bark() {
		> console.log('woog!');
	> }
> }
> let dog = new Dog();
> dog.bark();
> dog.move(10);
> dog.bark();

#### 修饰符
- 默认为`public` 如果不显式的定义修饰符，默认是`pubiic`,类内外均可访问
- `private`: 属性私有，只能在类的内部访问
- `protect`: 在类的内部访问，子类可以访问父类中`protect`修饰的属性
`protect` 修饰的方法可以被继承 
- `readonly`: 将属性设置为只读，只读属性必须在声明时或构造函数里被初始化
- 存取器 getters / setters
使用存取器来读取和设置私有属性的值
> class User {
> private name: string;
	> get name(): string {
		> return this.name;
	> }
	> set name(name: string) {
		> this.name = name;
	> }
> }
#### 静态属性 `static`
- 静态属性存在于类本身而不是类的实例上
- 实例属性存在于类的实例上

#### 抽象类 `abstract`
- 抽象类作为其他派生类的基类使用，一般不会直接被实例化
- 抽象类可以包含抽象的方法和具体的方法
- 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
- 抽象方法语法根接口方法类似，只定义方法签名不包含函数体
- 抽象方法必须包含`abstract`关键字并且可以包含访问修饰符
> abstract class Department {
	> constructor (public name: string){
	> }
	> printName(): void {
		> console.log('Department name: '+ this.name);
	> }
> abstract printMeeting(): void;
> }
> class AccountingDepartment extends Department {
	> constructor() {
		> super('Accounting and auditing');
	> }
	> printMeeting(): void {
		> console.log('The Accounting Department meets at 10 am');
	> }
	> generateReports(): void {
		> console.log('generating accounting reports....');
	> }
> }
> 

### 函数
函数是js应用程序的基础，是主要的定义行为的地方
#### 介绍
- 有名字的函数
- 匿名函数
> function add(a: number, b:number): number {
	> return a+b;
> }
> // 匿名函数
> let  myAdd: number = function (a: number, b: number): number {
	> return a + b;
> }
#### 函数类型
完整的函数类型包含两部分：
- 参数类型
- 返回值类型

#### 可选参数和默认参数
- Typescript 立的每个函数参数都是必须的，传递给函数的参数个数必须与函数预期的参数个数一致
- 可选参数 在参数名旁使用？可选参数必须跟在必须参数后面
> function buildName(firstName: string,  lastName: string) {
	> if(lastName) {
		> return firstName + ' ' + lastName;
	> }else {
		> return firstName
	> }
> }
> let result1 = buildName('Bob'); // work correctly
> let result2 = buildName('Bob', 'Adsms', 'Sr .'); // error
> let result3 = buildName('Bob', 'Adams'); // just right

- 默认参数 
如果不对其赋值或对其赋值为`undefined`，使用默认值，如果对其赋值，则使用用户传值，带默认值的参数不必放在必须参数的后面
> function buildName(firstName: string, lastName: 'Smith') {
		> return firstName + '' + lastName;
> }
> let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
> let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
> let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
> let result4 = buildName("Bob", "Adams");         // ah, just right

#### 剩余参数
- 当你不知道参数的数量时，可以采用剩余参数
- 剩余参数会被当作个数不限的可选参数，可以一个都没有，也可以同时有任意个。 
- 编译器创建参数数组，名字是省略号后面给定的名字，可以在函数体内使用这个数组
> function buildName(firstName: string, ...restOfName: string[]){
	> return firstName + ' ' + restOfName.join(" ") 
> } 
> let buildNameFun: (fname: string, ...rest: string[]) => string = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');

#### this

