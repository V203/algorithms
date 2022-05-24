module.exports =  class Node{
    constructor(data){
        this.data = data
        this.next = null
    }

    setNextNode(node){  
        
        this.next = node;

    }
    getData(){
        return this.data
    }
    getNextNode(){
        return this.next
    }
}