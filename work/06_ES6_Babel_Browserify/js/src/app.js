//方式1：通过解构赋值的方式将模块1引入

//import {msg,foo} from './module1'
//console.log(msg);
//foo();

//导入的时候可以直接重新命名
//import {msg as msg1,foo as foo1} from './module1'
//console.log(msg1);
//foo1();

//方式2 通过直接导入整个模块
//import * as moudle1 from './module1';

//console.log(moudle1);
//console.log(moudle1.msg);
//console.log(moudle1.foo())


//对于默认导出 可以通过任意名称接收
//import xxx from './module2'
//xxx();

//一个是默认暴露 另一个是名称暴露 不可以通过解构赋值的方式进行导入 会报错
//import {xxx, bar2} from './module2'
//xxx();
//bar2();

//可以通过这种方式进行引入
//import xxx, {bar2} from './module2'
//xxx();
//bar2();

// import {fn,age,name} from "./module3";
// console.log(fn());//我是laowang！今年90岁了
// console.log(age);//90
// console.log(name);//laowang



// import module4 from './module4'
// console.log(module4);   //输出undifined

import * as module4 from './module4'
console.log(module4);
module4.fun3();



