//GLOBAL SCOPE->var is for global scope

/*sum=0
for( var i=0;i<10;i++){
    sum+=i;

}
console.log(sum)
//LOCAL SCOPE------>let is for local scope
sum=0

for(let i=0;i<10;i++){
    sum+=i;
    console.log(i)
}
console.log(i)
var a=10
{
    let a=9//in the interior only a value prints
    let b=5
    console.log(a)
}
console.log(a)//once it exit the local scope the value which is in the global is printed
//Hoisting-variable hoisting
console.log(a) ->undefined

var a=10
console.log(a)
var a*///reference error
//function hoisting
fun()
function fun(){
    console.log("hello")
}
//fun()


