Person 由prototype 属性来解决它自身构造之外的原型上的属性或者方法
原型对象会有它的构造函数 Person.prototype.constructor 属性
第三者 ？  实例 
实例 跟Person 有什么关系， Person.prototype 有关系


js 实例跟类其实不是JAVA 等语言的血缘关系
zl 实例 是怎么来的呢？
new Person () 出来的
1. Person 函数运行new 的方式， this=>new Object();
2. zl 怎么拿到 Person.prototype 原型对象上定义的方法_proto_ 属性
3. 方法有prototype 属性,值为对象 开支
4. 任何对象都有_proto_指向它的原型对象
5. 原型对象上有 constrctor 属性指向谁它的构造函数


原型链 
