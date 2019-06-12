#
在ES6中每一个模块即是一个文件，在文件中定义的变量，函数，对象在外部是无法获取的。
如果你希望外部可以读取模块当中的内容，就必须使用export来对其进行暴露

需要使用babel将es6编译为es5语法
在使用broswerify编译打包js


你可以导出所有的最外层函数、类以及var、let或const声明的变量。
ES6模块只支持静态导入和导出，你只可以在模块的最外层作用域使用import和export，
不可在条件语句中使用，也不能在函数作用域中使用import


ES6的导出分为名字导出和默认导出

名字导出可以在模块中导出多个声明。


//分别暴露
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
	return x * x;
}
export function add (x, y) {
	return x + y;
}
 
//------ main.js ------
import { square, add } from 'lib';
console.log(square(10)); //100
console.log(add(2,4));  //6


------------------
统一暴露

//------ lib.js ------
const sqrt = Math.sqrt;
function square(x) {
	return x * x;
}
function add (x, y) {
	return x + y;
}
export {sqrt, square, add}  以对象的形式暴露






也可以直接导入整个模块，此时的main.js模块将变成这样。
//------ main.js ------
import * as lib from 'lib';
console.log(lib.square(10)); //100
console.log(lib.add(2,4));  //6


用对象的解构赋值的方式进行引入



重命名export和import
为了解决导出命名冲突的问题，ES6为你提供了重命名的方法解决这个问题，当你在导入名称时可以这样做：
// 这两个模块都会导出以`flip`命名的东西。
// 要同时导入两者，我们至少要将其中一个的名称改掉。
import {flip as flipOmelet} from "eggs.js";
import {flip as flipHouse} from "real-estate.js";


同样，当你在导出的时候也可以重命名。你可能会想用两个不同的名称导出相同的值，这样的情况偶尔也会遇到：
function v1() { ... }
function v2() { ... }
 
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

-----上面的方式 导入的时候 需要使用解构赋值的方式


默认暴露

export default value    其中value可以是任意数据类型


引入的时候就可以 import xxx from 模块路径   xxx名字任意   因为默认暴露可以用任何变量接收

默认暴露只能有一个


默认导出（default export）
一个模块只能有一个默认导出，对于默认导出，
导入的名称可以和导出的名称不一致，这对于导出匿名函数或类非常有用。
//------ myFunc.js ------
export default function() {...};
 
//------ main.js ------
import myFunc from 'myFunc';
myFunc();
-------------------------------------------------------------------------------------

如果要输出多个变量可以将这些变量包装成对象进行模块化输出：

let myName="laowang";
let myAge=90;
let myfn=function(){
    return "我是"+myName+"！今年"+myAge+"岁了"
}
export {
    myName,
    myAge,
    myfn
}
/******************************接收的代码调整为**********************/
import {myfn,myAge,myName} from "./test.js";
console.log(myfn());//我是laowang！今年90岁了
console.log(myAge);//90
console.log(myName);//laowang





如果你不想暴露模块当中的变量名字，可以通过as来进行操作:
let myName="laowang";
let myAge=90;
let myfn=function(){
    return "我是"+myName+"！今年"+myAge+"岁了"
}
export {
    myName as name,
    myAge as age,
    myfn as fn
}
/******************************接收的代码调整为**********************/
import {fn,age,name} from "./test.js";
console.log(fn());//我是laowang！今年90岁了
console.log(age);//90
console.log(name);//laowang




也可以直接导入整个模块，将上面的接收代码修改为：
import * as info from "./test.js";//通过*来批量接收，as 来指定接收的名字
console.log(info.fn());//我是laowang！今年90岁了
console.log(info.age);//90
console.log(info.name);//laowang



默认导出（default export）
一个模块只能有一个默认导出，对于默认导出，导入的名称可以和导出的名称不一致
/******************************导出**********************/
export default function(){
    return "默认导出一个方法"
}
/******************************引入**********************/
import myFn from "./test.js";//注意这里默认导出不需要用{}。
console.log(myFn());//默认导出一个方法



可以将所有需要导出的变量放入一个对象中，然后通过default export进行导出
/******************************导出**********************/
export default {
    myFn(){
        return "默认导出一个方法"
    },
    myName:"laowang"
}
/******************************引入**********************/
import myObj from "./test.js";
console.log(myObj.myFn(),myObj.myName);//默认导出一个方法 laowang




同样也支持混合导出
/******************************导出**********************/
export default function(){
    return "默认导出一个方法"
}
export var myName="laowang";
/******************************引入**********************/
import myFn,{myName} from "./test.js";
console.log(myFn(),myName);//默认导出一个方法 laowang




如果导入的多个文件中，变量名字相同，即会产生命名冲突的问题，
为了解决该问题，ES6为提供了重命名的方法，当你在导入名称时可以这样做：
/******************************test1.js**********************/
export let myName="我来自test1.js";
/******************************test2.js**********************/
export let myName="我来自test2.js";
/******************************index.js**********************/
import {myName as name1} from "./test1.js";
import {myName as name2} from "./test2.js";
console.log(name1);//我来自test1.js
console.log(name2);//我来自test2.js




3、作为中转模块导出
有时候为了避免上层模块导入太多的模块，我们可能使用底层模块作为中转，直接导出另一个模块的内容如下：
//------ myFunc.js ------
export default function() {...};
 
//------ lib.js ------
export * from 'myFunc';
export function each() {...};
 
//------ main.js ------
import myFunc,{ each } from 'lib'





//只是把模块加载进来 但是不会引入它里面暴露的任何接口
import 'src/mylib'






