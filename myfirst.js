/*var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080); */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
	database: "Books"
});

var sql="create table hello(id int, msg varchar(20));";

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(sql, function (err, result, fields) {
    if (err) {
		console.log("Some error!");
	}else{
    console.log(result[0].Tables_in_Books);
	}
  });
}); 
