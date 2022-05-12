let {performance} = require("perf_hooks");
let binary_search = (arr, param)=>{
    var strt = performance.now();
    let lower_bound = 0;
    let upper_bound = arr.length-1;
    
    while(lower_bound <= upper_bound){
        var mid = Math.floor(lower_bound + upper_bound) / 2;
        if(arr[mid] < param){
         lower_bound =   mid + 1;

        }
        else if(arr[mid] > param){
          upper_bound =  mid-1;

        }
        else{
            let end = performance.now();
            console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`);
            return `${arr[mid]} fount at position ${mid}`
        }
    }
    let end = performance.now();
    console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`);
    
    return `Not found in the Array`;
}
var array = [1,2,3,4,66,78,99];
let param = 99;
console.log(binary_search(array,param));

// let {performance} = require("perf_hooks");
// var strt = performance.now();
// let end = performance.now();
// console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`);