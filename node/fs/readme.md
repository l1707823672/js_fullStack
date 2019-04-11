node 让js 来到了后端

服务器，Linux 
文件系统操作 fs 
连接数据库 db
没有DOM 
文件读取 要花时间的 定位文件参数1，打开文件，将文件内容读取到内存中 输出到命令行
花时间 js异步 
callback
fs.readFile(path,'utf8',function(err,data){})
2.promise 
分开，Promise 是类 用于处理耗时异步问题的类，为了防止回调地狱，看到耗时问题就用出一个Promise实例
resolve 将控制权交给then 将结果resolve(data)
reject 失败 catch(e){}