const player={
    name:'swetha',
    age:25,
    greet: function() {

    console.log('hello ' +this.name)
    }

};
//destructure is used to directly getthe value of the varaiables in an object 
//classsic mode -> player.name
//destructutre mode:
const {q,w} = player;

console.log(q,w)
//we can alos use them in arrays 

const Hobbies =['swiming','batminton','carrom'];
//get the first two elements
const[a,b] = Hobbies;
console.log(a,b);
//get sec and third
var [,d,c]= Hobbies;
console.log(d,c);
//to get all values except first
var [,...h] = Hobbies;
console.log(h);