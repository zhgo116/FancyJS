
个人学习使用，翻版必究



Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。


Schema  ：  一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力

Model   ：  由Schema发布生成的模型，具有抽象属性和行为的数据库操作对

Entity  ：  由Model创建的实体，他的操作也会影响数据库

NodeJS中的基本数据类型都属于Schema.Type，另外Mongoose还定义了自己的类型

    //举例：
    var ExampleSchema = new Schema({
      name:String,
      binary:Buffer,
      living:Boolean,
      updated:Date,
      age:Number,
      mixed:Schema.Types.Mixed, //该混合类型等同于nested
      _id:Schema.Types.ObjectId,  //主键
      _fk:Schema.Types.ObjectId,  //外键
      array:[],
      arrOfString:[String],
      arrOfNumber:[Number],
      arrOfDate:[Date],
      arrOfBuffer:[Buffer],
      arrOfBoolean:[Boolean],
      arrOfMixed:[Schema.Types.Mixed],
      arrOfObjectId:[Schema.Types.ObjectId]
      nested:{
        stuff:String,
      }
    });


Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.



exports导出单个对象 不需要new

module.exports作为模块导出  可以使用new


ejs语法

用<%...%>包含js代码
用<%=...%>输出变量 变量若包含 '<' '>' '&'等字符 会被转义
用<%-...%>输出变量 不转义
用<%- include('user/show') %>引入其他模板 包含 ./user/show.ejs
用<%# some comments %>来注释，不执行不输出
<%% 转义为 '<%'
<% ... -%> 删除新的空白行模式?
<%_ ... _%> 删除空白符模式




