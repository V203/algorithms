const arr_builder = require("./arr_builder"); 
let {performance} = require("perf_hooks");

var strt = performance.now();
let quick_sort = (arr) => {
    
    var right = []
    var left = []
    var pivot = arr[0]
    if (arr.length === 0) {
        return []
        
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
        left.push(arr[i]);
        } else {
        right.push(arr[i]);
        }
    }
    return quick_sort(left).concat(pivot, quick_sort(right))
}
let end = performance.now();
console.log(`Execution Time : ${(end - strt).toFixed(3)}`);

console.log(quick_sort(arr_builder(20, 109)));