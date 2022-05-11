let seq_search = (ourArr,param) => {
    
    for(var i = 0; i < ourArr.length;i++){
        
        if(ourArr[i] === param) {
            

          return   `${param} found at postition ${ourArr.indexOf(ourArr[i])}`;

        }

    }
    return `${param} not found`;
} 




var ourArr = [1,2,3,4,5,6,7,8,9]
var nums = 9;
console.log(seq_search(ourArr,nums) );

    
    
