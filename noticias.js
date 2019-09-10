/*

	Develop in Monday / 09/09/2019
	Studing by : Tiago Ribeiro Santos
	email : tiago.programador@hotmail.com

	Develop  in Node.JS Interpreter;

	obs: O seguinte código cria um servidor que escuta na porta 3000,
	e retorna um html quando o cliente fizer uma requisição no servidor.

*/


/*Require função javascript importar biblioteca,outras páginas..

Incorporando a biblioteca http para receber requisição */
var http = require('http');

//Criando servidor. para receber request/response (Cria servidor)
var server = http.createServer(function(req,res){
	//O parametro res,retorna um html para o cliente.
	//Conforme o cliente acessa o servidor o servidor retorna um html.
	res.end("<html><title>Portal de Noticias</title><body>Portal de Notícias </body></html>");
	res.end("<script>var i = 0; while(i < 2 ){ window.alert(`Bem vindo!`); i+=1; }</script>");
});

//Servidor escuta na porta 3000.
server.listen(3000);
