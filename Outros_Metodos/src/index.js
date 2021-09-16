// Importar o express
const { response, request } = require("express");
const express = require ("express");
// Criando a instancia (objeto)
const App = express();

// Manda e recebe uma requisição
App.get('/Projetos' , (request, response) => {

    return response.json([
        "Projeto1",
        "Projeto2",
        "Projeto3"
    ]);

});

App.post('/Projetos2' , (request,response) => {

    return response.json([

        "Projeto 1",
        "Projeto 2",
        "Projeto 3",
        "Projeto 4"
    ]);

})

App.put('/Projetos3' , (request,response) => {
    
    return response.json([

        "Projeto 5",
        "Projeto 6",
        "Projeto 7",
        "Projeto 8"

    ]);
})

App.delete('/Projetos4' , (request,response) => {

    return response.json([

        "Projeto 1",
        "Projeto 2",
        "Projeto 3",

    ]);

})

App.listen(3333 , () => {

    console.log("+----------------+");
    console.log("| PAI TA ON !!!! |");
    console.log("+----------------+");

});