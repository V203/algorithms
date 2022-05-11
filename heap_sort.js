const arr_builder = require("./arr_builder");
let {performance} = require("perf_hooks");


let heapy = (arr,n, i)=>{
        var largest = i;
        var l = 2 * i +1;
        var r = 2 * i +2;

        if(l < n && arr[l] > arr[largest]){
                largest = l;
        }

        if(r < n && arr[r] > arr[largest]){
                largest = r;
        }
        if(largest !== i){
                var swap = arr[i];
                arr[i] = arr[largest]
                arr[largest] = swap;
                        heapy(arr,n,largest);
        }
}

let heap_sort = (arr)=>{
        let start = performance.now()
        var n = arr.length;
        for(var i = Math.floor(n/2) -1; i >= 0; i--)
                heapy(arr,n,i);
                for(var i = n -1;i > 0;i--){
                        var temp = arr[0];
                        arr[0] = arr[i];
                        arr[i] = temp;

                        heapy(arr,i,0);
                }
                let end = performance.now()
                console.log(`Execution Time : ${end - start}ms`);
                return arr
}

console.log(heap_sort(arr_builder(10,100)));

