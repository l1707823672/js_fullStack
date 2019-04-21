- MVVM 前端新贵 
Model 数据 Page({data:{
    legends:[]
}})
View 视图
wxml
VM  {{}}  wx:for .... 

- MVC 经典的web开发模式
Model =>SQL
View  =>静态页面
Controller  =>路由，


- WebServer 软件程序
web服务器硬件运行webserver程序的
IP http协议 
http://127.0.0.1:3000
端口不只一个服务
3306 MYSQL 
80 Web服务
http
    .createServer(function(request,response){
        response.end('Hello World');
    })
    .listen(3000)