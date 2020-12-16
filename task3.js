const fetch=require('node-fetch')


fetch('http://api.nobelprize.org/v1/prize.json')
.then(response=>response.json())
.then(data=>{console.log(data.prizes.filter((fill =>fill.year>=2000 && fill.year<2020 && fill.category==="chemistry")))})

// fetch('https://api.github.com/search/repositories?q={{input from text}}').then(response=>{
//     console.log(response);
//     return response.json();
// })
// .then(response=>{
//     console.log(response);
// });
// var obj;
// let abc=fetch('http://api.nobelprize.org/v1/prize.json')
// .then(res=>res.json())
// .then(data=>obj=data)
// .then(()=>console.log(obj))
// .then(data=>console.log(data));

// console.log(obj);
// async function getData(){
//     let response=await
//     fetch('http://api.nobelprize.org/v1/prize.json');
//     let data=await response.json()
//     return data;
// }
// async function main(){
//     const dataset=await getData();
//     return dataset;
// }
// var abc=main();
// console.log(abc);
