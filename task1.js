
var data=require('./battles.json');
// var mydata=JSON.parse(data);
// let count=0;

var result={'most_active':[],'attacker-outcome':[],'battle_type':[],'defender_size':[]};

var battletype=[];
for(let i=0;i<data.length;i++){
    battletype.push(data[i].battle_type);
}
for(let i=0;i<data.length;i++){
    if(battletype[i]==''){
        battletype.splice(i,1)

    }
}
// console.log(battletype)
var distbattletype=[...new Set(battletype)]
// console.log(distbattletype)
result.battle_type=(distbattletype)

let battlewin=0;
let battleloss=0;
for(let i=0;i<data.length;i++){
    if(data[i].attacker_outcome=='win'){
        battlewin++
    }
    else if(data[i].attacker_outcome=='loss'){
        battleloss++

    }
}
// console.log(battleloss)
// console.log(battlewin)
result.attacker_outcome={'win':battlewin,'loss':battleloss}
// console.log(result)
var defsize=[];
for(let i=0;i<data.length;i++){
    defsize.push(data[i].defender_size)
}

// for(let i=0;i<data.length;i++){
//     if(data[i].defender_size==='null'){
//         defsize.splice(i,1)
//     }
// }

function removeNull(defsize){
    return defsize.filter(x=>x!==null)
}
var newdefsize=removeNull(defsize)
var mindefsize=Math.min.apply(Math,newdefsize)
var maxdefsize=Math.max.apply(Math,newdefsize)


// console.log(newdefsize)
// console.log(mindefsize)
// console.log(maxdefsize)

var totdefsize=newdefsize.reduce(function(a,b){
    return a+b
},0)
// console.log(totdefsize)
var avgdefsize=totdefsize/defsize.length
// console.log(avgdefsize)
result.defender_size={'average':avgdefsize,'min':mindefsize,'max':maxdefsize}
// console.log(result)
// console.log(data)


var attackingarr=[]
for(let i=0;i<data.length;i++){
    attackingarr.push(data[i].attacker_king)
}
for(let i=0;i<attackingarr.length;i++){
    if(attackingarr[i]==''){
        attackingarr.splice(i,1);
    }
}

var amf=1;
var m=0;
var c;
for (let i=0;i<attackingarr.length;i++){
    for(let j=i+1;j<attackingarr.length;j++){
        if(attackingarr[i]==attackingarr[j]) m++
        if(amf<m){
            amf=m;
            c=attackingarr[i];
        }
    }
    m=0;
}
//c=name of activeking, amf=count
// console.log("active_king"+c+":"+amf)
// console.log(attackingarr)

 var defkingarr=[]
 for (let i=0;i<data.length;i++){
     defkingarr.push(data[i].defender_king)
 }

 for(let i=0;i<defkingarr.length;i++){
     if(defkingarr[i]==''){
         defkingarr.splice(i,1)
     }
 }
//  console.log(defkingarr)

var dmf=1; var n=0; var d;
for (let i=0;i<defkingarr.length;i++){
    for (let j=i;j<defkingarr.length;j++){
        if(defkingarr[i]==defkingarr[j]) n++
        if(dmf<n){
            dmf=n;
            d=defkingarr[i];
        }
    }
    n=0;
}
//d=name of def_king, dmf=freq
// console.log("def_king"+d+":"+dmf)
var regionarr=[]
for (let i=0;i<data.length;i++){
    regionarr.push(data[i].region)
}
// console.log(regionarr)
var rmf=1; var k=0; var r;
for (let i=0;i<regionarr.length;i++){
    for (let j=i;j<regionarr.length;j++){
        if(regionarr[i]==regionarr[j]) k++
        if(rmf<k){
            rmf=k;
            r=regionarr[i];
        }
    }
    k=0;
}
// console.log("regio"+r+":"+rmf)
//r=name of region, rmf=freq
var namearr=[]
for(let i=0;i<data.length;i++){
    namearr.push(data[i].name)
}
// console.log(namearr)
//every battle name is unique

result.most_active={'attacker_king':c, 'defender_king':d, 'region':r, 'name':"Every battle is different"}
console.log(result)















































const lst=[];
for(let i=0;i<data.length;i++){
    // console.log(data[i].attacker_king);
    lst.push(data[i].attacker_king)
}
// console.log(lst);
for(let i=0;i<lst.length;i++){
    if(lst[i]==''){
        lst.splice(i,1);
    }
}
// console.log(lst);

const distkings=[...new Set(lst)];
// console.log(distkings);

// let count=0;
// for (let i=0;i<data.length;i++){
//     if(data[i].defender_king==='Joffrey/Tommen Baratheon') count++;
// }
// console.log("Joffre/Tommen Baratheon:"+count);


// let rcount=0;
// for (let i=0;i<data.length;i++){
//     if(data[i].defender_king==='Robb Stark') rcount++;
// }
// console.log("Robb Stark:"+rcount)

// let bcount=0;
// for (let i=0;i<data.length;i++){
//     if(data[i].defender_king==='Balon/Euron Greyjoy') bcount++;
// }
// console.log("Balon/Euron Greyjoy:"+bcount)

// let scount=0;
// for (let i=0;i<data.length;i++){
//     if(data[i].defender_king==='Stannis Baratheon') scount++;
// }
// console.log("Stannis Baratheon :"+scount)


// var result={'most_active':[],'attacker-outcome':[],'battle_type':[],'defender_size':[]};


// var attacker_king=data
// function charcount(dtype,dname,dcount){
//     dcount=0;
//     for(let i=0;i<data[i].length;i++){
//         if(data[i].dtype==dname) dcount++;
//     }
//     console.log(dcount);
// }
// var stanum;
// charcount('attacker_king','Stannis Baratheon',stanum);


// console.log(data[1])

















// var attack=data.find(attack=>attack.attacker_king==="Joffrey/Tommen Baratheon");
// console.log(attack);


