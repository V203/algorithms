let Node = require("./node");

module.exports = class{
    constructor(){
        this.head = null
        // this.tail = null
        this.size = 0;
    }


    enqueue(param){
        let node = new Node(param);
        if(this.head === null){
            this.head = node
            this.size++

        }
        else{
            let curr = this.head
            while(curr.next !== null){
                curr = curr.next
            }
            // console.log(node);
            this.size++
            curr.next = node
        }

    }

    display() {
        let node = this.head;
    
        while (node) {
          console.log(node.data)
          node = node.next;
        }        
      }
    

    dequeue(){
        if(this.head !== null){
        console.log(`${this.head.data} has left the queue.`);
        let node = this.head;
        this.head = node.next
        node = this.head
        
        this.size--
    }else{
         console.log("The queue is empty");
         return "The queue is empty"
    }
    }

    length(){
        return this.size
    }

}