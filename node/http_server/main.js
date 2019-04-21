{/* <script src="./http"></script> */}
// require 关键字 引入一个模块，COMMONJS
const http = require('http');
let i=0;
http
    .createServer(function(request,response){
        response.end(`Hello World!${++i}`);
    })
    .listen(3000);


// request 用户 N  Web Server一直在 3000端口上伺服
// request 就能找到店，每位用户到达，触发 事件 ，调用createServer回调函数，request 用户身份，response ？ 响应请求 http 响应后就断开