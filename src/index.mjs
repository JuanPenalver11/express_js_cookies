import express from 'express'
import router from './router.mjs';
import cookieParser from 'cookie-parser';
//cookieParser is a function that parse the cookies information so it can be utilize 


const app = express();
app.use(express.json());
app.use(cookieParser('perro'));
//cookieParser needs to appear before our router 
//to guarantee that all the routes cookie are parsed. 
//cookieParser accepts arguments  -> for instance signature 
// signature is a cookie that is signed 
app.use(router)


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`PORT in ${PORT}`)
});
//app.get es lo que va a producir la cookie sin la cookie no puedes acceder a, en este caso, usersData
//para poder acceder a /api/users primero tienes que pasar por /
app.get("/", (request, response)=>{
    //example of simple cookie 
    response.cookie('salutation', 'Hola', {maxAge:60000 * 60, signed: true})
    //cookie get 3 arguments name, value and options > 
    //maxAge fix the cookie's life span - after that time it is deleted
    //maxAge comes in milisecond
    //if you use signed property you need to make sure to have a secret pass through cookieParser

    response.status(201).send({msg: 'Hello World'})
})

//1. First we are going to start with cookies and their importance. 
// cookies are important as the server is stateless, which means that the server doesn't remember what browser 
// realise whatever request. 
// Cookies are important has they can saveguard an identifier that the broswer has create for our user. 
// Then, the server will be able to match the request id with the broswer id. 