var http = require('http');
var url = require('url');
var querystring = require('querystring');
var Cookies = require('cookies');
var static = require('node-static');
var file = new static.Server('.');


function accept(req, res) {
  var cookie = new Cookies(req, res), count;
  if(!cookie.get("count")){
    cookie.set("count", "0");
    count = 0;
  };
  if (req.url.indexOf("check") !== -1) {  
    count = +cookie.get("count"); 
    var isNum = req.url.search(/\w*\d+\w*/);
    var answer="В этой строке нет цифр. Строку с цифрами отправляли "+ count + " раз.";
    if (isNum!=-1) {  
      count++;
      answer = "В этой строке есть цифры. Строку с цифрами отправляли "+ count + " раз."; 
      cookie.set("count", count);     
    };
    
    res.end(answer);
  } else {
    file.serve(req, res); 
  }

}



http.createServer(accept).listen(8080);
