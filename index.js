let http = require('http');

//Peticion -> Request

//Respuesta del servidor -> response
/*http.createServer((req,res)=>{
    console.log('El servidor se ha iniciado en el puerto 9000');
    res.write('Bienvenido a la página de prueba');
    res.end();
}).listen(9000);*/

http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html; charset=utf-8");
    if(req.url == '/'){
        res.setHeader("Content-Type","text/html");
        res.write("<h1>Hola mundo</h1>");
    }else if(req.url == '/usuarios'){
        res.setHeader("Content-Type","application/json; charset=utf-8");
        let users = [
            {name:"Carmona",val:"0"},
            {name:"Andrei",val:"10"}
        ]
        res.write(JSON.stringify(users));
    }
    res.end();
    
}).listen(8080);
