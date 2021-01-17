/*
Question 8
    Assume there is a json object of this format 
    var obj = {
    “id” : 4, “name” : “abc”,
    “id” : 10, “name” : “ab2”,
    “id” : 5, “name” : “abc3”,
    “id” : 6, “name” : “abc5”
    }
    Write a code to sort the object by id 

*/
// function compare(obj){
//     for(var i in obj){
//         if(i.obj < )
//     }
// }

var obj = {
    "id": 4, "name": "abc",
    "id": 10, "name": "ab2",
    "id": 5, "name": "abc",
    "id": 6, "name": "abc"
}

var newObj = [];
let min = 100;
let myName = "";
let myI = 0;
for (let j = 0; j < obj.length; j++) {
    for (let i = 0; i < obj.length; i = i + 2) {
        if (min > obj[i].id) {
            min = obj[i].id;
            myName = obj[i + 1].name;
            myI = i;
        }
    }
    newObj.push(min, myName);
    delete obj[myI].id;
    delete obj[myI + 1].name;
}
console.log(newObj);