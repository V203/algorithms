var Node = require("./node.js");


let List = () => {
    var start_node = null;
    var current_node = null;
    let add = (par) => {
        var node = new Node(par);

        if (start_node == null) {
            start_node = node;

            current_node = start_node;


        } else {
            current_node.setNextNode(node);
            current_node = node;

        }



    }

    let clear = () => {
        start_node = null
        return start_node = null
    }


    let display = () => {
        var newNode = start_node;
        while (start_node !== null) {

            console.log(newNode.data);
            newNode = newNode.next
            if (newNode == null) {
                break;
            }
        }
    }

    let get_last_node = () => {
        return current_node.data
    }


    let remove_selected = (par) => {
        var num = 0
        var last_node = start_node;
        if (last_node) {
            while (last_node.next) {
                last_node = last_node.next

            }

            return last_node.data

        }


    }
    let count = () => {
        let size = 0

        var loop_node = start_node
        while (true && loop_node !== null) {

            // console.log(loop_node.data);
            size++
            loop_node = loop_node.getNextNode();
            if (loop_node === null) {
                break;

            }
        }


        return size;

    }

    let exists = (par) => {
        var ourNode = start_node;
        while (ourNode.getData() !== par) {
            // console.log(ourNode.getNextNode().getData());
            // ourNode = ourNode.next
            ourNode = ourNode.getNextNode()
            
            
        }
        // return ourNode.data
        if (ourNode.data === par) {
           return true
        }else {
            return
        }
    }

    let get_first_node = () => {
        return start_node.data
    }





    return {
        add,
        count,
        clear,
        display,
        remove_selected,
        exists,
        get_first_node,
        get_last_node
    }


}


const list = List();

list.add("Azie");
list.add("Vuyisa");
list.add("Andre");
list.add("Makho");
list.add("Mbuyi");




console.log(list.exists("Vuyisdda"));

// console.log()
