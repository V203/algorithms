let {performance} = require("perf_hooks");
let seq_search = (ourArr,param) => {
  var strt = performance.now();
    
    for(var i = 0; i < ourArr.length;i++){
        
        if(ourArr[i] === param) {
          let end = performance.now();
            
          console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`);
          return   `${param} found at postition ${ourArr.indexOf(ourArr[i])}`;

        }

    }
    let end = performance.now();
    console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`);
    return `${param} not found`;
} 


var ourArr = [1,2,3,4,5,6,7,8,9]
var nums = 9;
console.log(seq_search(ourArr,nums) );

    
    
// let end = performance.now();
// console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`);