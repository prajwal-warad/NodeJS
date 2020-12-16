// const { default: fetch } = require("node-fetch");
const fetch=require('node-fetch')


fetch('https://api.github.com/search/repositories?q={{input from text}}').then(response=>{
    console.log(response);
    return response.json();
})
.then(response=>{
    var repo=response.items.filter((disp=>disp.full_name==="nodejs/node"))
    console.log(repo);
});

