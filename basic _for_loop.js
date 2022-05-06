const arr_builder = require("./arr_builder");
let { performance } = require("perf_hooks");


let basic_for_loop = (arr) => {
    let start = performance.now()
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1
        console.log(arr[i]);
    }
    let end = performance.now()
    console.log(`Execution Time : ${end - start} ms`);
    return arr

}
let arr = arr_builder(1000, 100)
console.log(arr);

console.log(basic_for_loop(arr));