//your code here
function minCost(arr) {
    for(var i=0;i<arr.length;i++){
        for(var j=i;i<arr.length;j++){
            if(arr[j]<arr[i]){
                var temp=arr[i];
                arr[j]=arr[i];
                arr[j]=temp;
            }
        }
       minCost1(arr);
    }
   }
   function minCost1(arr){
    if(arr.lengh>1){
        arr[1]=arr[0]+arr[1];
        arr.shift();
        minCost(arr);
    }
    else{
        console.log(arr[0]);
		return;
    }
   }
   
   /*Do not change the code below */
   
   var readline = require("readline").createInterface(process.stdin);
   
   let inputArr = [];
   var lineNumber = -1;
   var inputSize;
   
   //multipleline input from User
   readline.on("line", readInputs);
   
   function readInputs(line) {
     inputArr.push(line);
     lineNumber++;
     //Exit Condition
     if (lineNumber == 0) {
       logic("s" );
       readline.close();
       
     }
   }
   
   function logic(input) {
     let str = JSON.parse(inputArr[0].trim());
     minCost(str);
   }
   
