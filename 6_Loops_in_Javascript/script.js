for(let i=0;i<5;i++){

    if(i==2) continue;
    console.log(i,i*2);
    if(i==4) break;
}

let i=0;
while(i<10){
    console.log(i);
    i++;
}
4
i=0;

do{
    console.log(i);
    i++;
}while(i<8);


const person = {
    name:"Riyaz",
    age:23,
    company : "coding shuttle"
};

for(let key in person){
    console.log(key,person[key]);
}

const a = [1,2,"riyaz",3];

for(let c of a){
    console.log(c);
}

const food = "Apple";
for(let c of food){
    console.log(c);
}