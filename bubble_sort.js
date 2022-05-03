const arr_builder = require("./arr_builder");
let {performance} = require("perf_hooks");


let b_sort = (param) => {
    var strt = performance.now();
    for (let i = 0; i < param.length; i++) {
        for(let j = 0; j < param.length; j++){

            if (param[j] < param[j - 1]) {
                var temp = param[j - 1];
                param[j - 1] = param[j];
                param[j] = temp;
            }
        }
    }
    let end = performance.now();
    console.log(`Execution Time : ${(end - strt).toFixed(3)}`);
    return param;
};

console.log(b_sort(arr_builder(50,100)));
