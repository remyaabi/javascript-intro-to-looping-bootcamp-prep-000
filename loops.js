var stringArray=[];
var n=10;
function forLoop(stringArray){
   for(var i=0; i<25; i++){
       let s = i === 1? "I am 1 strange loop." : `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
       stringArray.push(s);
   }
  
}
function whileLoop(n){
  var flag="notdone";
  while(n>0){
    console.log("The number is : "+ n)
    n--
  }
  if (n===0){
    flag="done";
  }
  return flag;
}

function doWhileLoop(stringArray){
  console.log(stringArray);
  do{
    console.log(stringArray.pop());
  }while(stringArray.length > 0 && maybeTrue())
  
}

function maybeTrue() {
  return Math.random() >= 0.5
}