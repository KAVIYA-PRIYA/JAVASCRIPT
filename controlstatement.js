//for loop
/*sum=0
for(var i=0;i<10;i++){
    sum+=i;

}
console.log(sum)
//while loop
var i=0
while(i<10)
{
    i++;
    console.log(i)
}
//do while
var i=0
var sum=0
do{
    i++;
    sum+=i;
}while(i<10);
console.log(sum)
arr=[10,20,30.5,"true",false]
console.log(arr.length)

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}----------->since array is as  sacme datatype since herethough diff datatype prints awe diidnt mention any datatype

//for in loop---wrks based on index value
//var takes the index value
arr=[10,"string","kec",10,true]
for(const index in arr)
{
    console.log("The value present in",index ,"is" ,arr[index])
}
//for of ->to access the elemt directly
arr=[10,"string","kec",10,true]
for(const value of arr){
    console.log(value)
}
//for each
arr=[10,"string","kec",10,true]
arr.forEach(value=>{
    console.log(value)
})*/
var kec=new Object()
kec["fees"]="100000"
kec["accomodation"]="good"
kec["food"]="pretty decent"
console.log(kec)
for(key in kec )
{
    console.log(key,kec[key])
}