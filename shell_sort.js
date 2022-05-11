let arr_builder = require("./arr_builder");
let {performance} = require("perf_hooks");

let shell_sort = (arr) => {
    let start = performance.now()
    let n = arr.length
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // console.log(`Gap outer :${gap}`);
        for (let i = gap; i < n; i += 1) {
            // console.log(`Gap inner :${gap}`);
            
            let temp = arr[i];
            // console.log(arr[i])

            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
                arr[j] = temp;
                // console.log(`gap ${gap}`);
                // console.log(`Arr[j] ${arr[j]}`);
                // console.log(`temp[j] ${temp}`);
        }


    }
    let end = performance.now();
    let run_time = end - start
    console.log(`Execution time : ${run_time.toFixed(3)}ms`);
    return arr
}

console.log(shell_sort(arr_builder(13,100)));

