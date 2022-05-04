let arr_builder = require("./arr_builder");
let {performance} = require("perf_hooks");


let inserion_sort = (arr)=>{
    let start = performance.now()
    var  inner
    var temp

    for (let outer = 1; outer <= arr.length-1 ;outer++ ){
        temp = arr[outer]
        inner = outer

        while (inner > 0 && (arr[inner-1] >= temp)) {
            arr[inner] = arr[inner -1]
            --inner
    }
    arr[inner] = temp

}
let end = performance.now()
let run_time = end - start
console.log(`Execution Time : ${run_time.toFixed(3)}`)
    return arr;
    
    
}

console.log(inserion_sort(arr_builder(10,99)));