var Node = require("./node.js");
module.exports = class Llist {

  constructor(head) {
    this.head = null;


  }


  add(par) {

    let node = new Node(par);

    if (this.start !== null) {
      this.start = node;
      this.end = this.start;

    } else {
      end.setNextNode(node);
      end = node;
    }

  }

  add_(par) {
    var end = null;
    let node = new Node(par);
    if (this.head === null) {
      this.head = node;
      this.end = this.head

    } else {
      var newEnding
      this.end.setNextNode(node)
      
      this.end = node
      

    }

  }


  count() {
    let size = 0

    let node = this.head
    while (node) {


      size++
      node = node.next;

    }


    return size;

  }

  display() {
    let node = this.head;

    while (node) {
      console.log(node.data)
      node = node.next;
    }
    // console.log(node.data);
  }

  last_node() {
    let node = this.head

    if (node) {
      while (node.next) {
        node = node.next

      }
    }
    return node
  }

  get_first_node() {
    return this.head

  }

  clear() {
    this.head = null
  }

  get_at_index(par) {
    let index_count = 0;
    let curr = this.head;
    while (curr.next !== null) {
      index_count++

      if (index_count === par)
        return curr.data;
      index_count++


      curr = curr.next

    }

    return curr

  }

  insertAtHead(par) {
    var newNode = new Node(par)
    // curr = null
    if (this.head == null) {
      this.head = new Node(par)
      return;

    }
    var curr = this.head

    newNode.next = null;
    var last = this.head
    while (curr.next != null) {

      curr = last;
      curr = curr.next;

      // return;

    }
    curr.next = newNode
    // newNode.next = null
  }






}

