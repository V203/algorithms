const arr_builder = require("./arr_builder"); 
let {performance} = require("perf_hooks")

var strt = 0;
var end = 0;
let merg_sort = (array) => {
     strt = performance.now();
    let merge = (left, right) => {
        let array = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                array.push(left.shift())
            } else {
                array.push(right.shift())
            }
        }
         end = performance.now()
        return [...array, ...left, ...right]
    }
    console.log(`Execution Time : ${(end - strt).toFixed(3)}ms`)
    
    
    let half = array.length / 2
    if (array.length <= 1) {
        return array;
    }

    let left = array.splice(0, half)
    const right = array
    
    return merge(merg_sort(left),merg_sort(array)) ;;
    
}



console.log(merg_sort(arr_builder(20,99)))