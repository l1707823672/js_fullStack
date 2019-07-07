var http = require('http');
var server =http.createServer(function(q,res){
  // 响应头re
  res.writeHead(301,{'Location':'http://itbilu.com/'});
  console.log(res._header);
  res.end();
});

server.listen(3000);