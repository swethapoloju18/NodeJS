const player={
    name:'swetha',
    age:25,
    greet: function() {

    console.log('hello ' +this.name)
    }

};
// player.greet();
const Hobbies =['swiming','batminton'];
// console.log(Hobbies);
// console.log(Hobbies.map(hobby =>'Hobbies are'+hobby));
// for(let hobby of Hobbies){
//     console.log(hobby);
// }
//SPREAD Operator( it can alos be used in objects)
const hobbieCopied = [...Hobbies];
console.log('spread operator clones  the arrays or object data')
console.log(hobbieCopied);

//Rest operator
const arrayMerger =(...args)=>{
    return args
}
console.log('rest operator meergers with ...')
console.log(arrayMerger(1,2,3,4));
