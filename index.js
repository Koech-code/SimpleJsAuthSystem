var arr=[];
var yourId=parseInt(prompt("Create your user Id: "))
console.log(yourId)
var res=arr.push(yourId)
console.log(arr)

var id=parseInt(prompt("Enter your ID: "));

if (arr.includes(id)){
  console.log("Your in!!!")
} else{
  console.log("Id not found")
}