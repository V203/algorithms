  module.exports = function arr_builder(arr_length,_range){
    var temp= []
    for(let i = 0; i < arr_length; i++){
        temp[i] =  Math.floor( (Math.random() * _range)+ 1)
    }
    return temp;
}