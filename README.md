# algorithms



```
A array builder: first parameter specifies the length of the array
Second parameter is for max range of numbers eg 1-100
Usage arr_builder(10,100) output ==> [12,43,56,78,99,1,5,3]


module.exports = function arr_builder(arr_length,_range){
    var temp= []
    for(let i = 0; i < arr_length; i++){
        temp[i] =  Math.floor( (Math.random() * _range)+ 1)
    }
    return temp;// <==== Temp will contain randomly generated array
}

```
