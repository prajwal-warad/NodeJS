const fetch=require('node-fetch');

fetch('https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json')
.then(response => response.json())
.then(data => {
    // data.forEach(post=>{let flight_fill=post.Statistics.Flights.Delayed;
    // console.log(flight_fill)
    let delayarr=[];
    let divertarr=[];
    let cancelarr=[];
    let ontimearr=[];
    let totalarr=[];
    for(let i=0;i<data.length;i++){
        delayarr.push(data[i].Statistics.Flights.Delayed)
        divertarr.push(data[i].Statistics.Flights.Diverted)
        cancelarr.push(data[i].Statistics.Flights.Cancelled)
        ontimearr.push(data[i].Statistics.Flights['On Time'])
        totalarr.push(data[i].Statistics.Flights.Total)
    }
    let delaysum=delayarr.reduce(function(a,b){
        return a+b
    },0)

    let divertsum=divertarr.reduce(function(a,b){
        return a+b
    },0)

    let cancelsum=cancelarr.reduce(function(a,b){
        return a+b
    },0)

    let ontimesum=ontimearr.reduce(function(a,b){
        return a+b
    },0)

    let totalflsum=totalarr.reduce(function(a,b){
        return a+b
    },0)

    console.log(delaysum)
    console.log(cancelsum)
    console.log(ontimesum)
    console.log(divertsum)
    console.log(totalflsum)
    if(delaysum+cancelsum+ontimesum+divertsum==totalflsum){
        console.log("Sum is equal to total value")
    }
    else{
        console.log("They are not equal")
    }

})
    // let flight_filter = data.map(item => item['Statistics'].Flights)
    
    
// })


