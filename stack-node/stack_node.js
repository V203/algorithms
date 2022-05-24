let Node = require("./node");

module.exports = class {

    constructor() {
        this.head = null
        this.size = 0
    }

    put(param) {
        let node = new Node(param);
        if (this.head === null) {
            this.head = node
            this.increase();
        }
        else {
            let curr = this.head
            this.increase()
            while (curr.next !== null) {

                curr = curr.next


            }
            curr.next = node
        }



    }





    take() {

        if (this.head === null || this.head.next === null) {
            this.decrease()
            return this.head = null
        } else if (this.size) {

        }

        let curr = this.head;
        while (curr.next.next !== null) {
            curr = curr.next;

        }
        curr.next = null;
        this.decrease();
        return this.head;
    }





    display() {
        let node = this.head;

        while (node) {
            console.log(node.data)
            node = node.next;
        }
        // console.log(node.data);
    }

    length() {

        return this.size
    }

    decrease() {
        if (this.size > 0 ) {
            this.size--
        }
    }

    increase(){
        this.size++
    }


}