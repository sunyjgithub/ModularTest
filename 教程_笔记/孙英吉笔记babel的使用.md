**babel-preset-env简介**

最初，为了让开发者能够尽早用上新的JS特性，babel团队开发了babel-preset-latest。
这个preset比较特殊，它是多个preset的集合(es2015+)，并且随着ECMA规范的更新更增加它的内容。
比如，当前(2018.06.02)，它包含的preset包括：es2017、es1016、es2015。
到了明年，可能它包含的preset就包括：es2018、es2017、es2016、es2015。

随着时间的推移，babel-preset-latest 包含的插件越来越多，这带来了如下问题：
1.加载的插件越来越多，编译速度会越来越慢；
2.随着用户浏览器的升级，ECMA规范的支持逐步完善，编译至低版本规范的必要性在减少
（比如ES6 -> ES5），多余的转换不单降低执行效率，还浪费带宽。
因为随着浏览器对ECMA规范的支持逐步完善，慢慢的浏览器支持es6语法  
那么就没有必要在用插件将es6的语法，转化为es5的语法


首先，安装依赖。

npm install babel-cli --save-dev
npm install babel-preset-env --save-dev

举个例子
index.js 中的一句代码
async function foo () {}
如果我们的代码是打算跑在node@8.9.3版本上
因为node@8.9.3已经支持了async/await
如果是低版本的node  就不支持这个语法 需要进行转换


修改下 .babelrc，加上配置参数"target"，
target：表示我们需要支持哪些平台+哪些版本。这里声明我们要支持的是node版本为8.9.3。 
  {
    "presets": [
      ["env", {
        "targets": {
          "node": "8.9.3"
        }
      }]
    ]
  }
再次进行转码，结果如下。几乎没有变化，
因为node最新版本支持 async/await，因此不需要额外的兼容代码。

我的理解 ：babel读取这个文件 发现你的代码将来是运行在8.9.3的环境上的，
babel要知道8.9.3的node支持哪些语法，对于这些支持的语法，babel就不会做额外的处理
对于那些不支持的语法 ，babel就会利用特定的插件将其转化为当前环境支持的方式









