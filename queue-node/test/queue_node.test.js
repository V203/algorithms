let Node = require("../node");
let Queue = require("../queue_node");
let assert = require("assert")


describe("Stack queue implementing Nodes Test.", () => {

    it("Should be able to add Vince to the queue and vince should be first in the queue.", () => {
        let queue = new Queue();
        queue.enqueue("Vince");
        queue.enqueue("Pete");
        queue.enqueue("Doyle");
        queue.enqueue("Ray");

        let expected = new Node("Vince")
        let actual = queue
        actual.display()

        // assert.strictEqual(actual, expected)

    })

    it("Should be able to enqueue five people to the queue and dequeue twice and return the size of 3 people in the queue", () => {
        let queue = new Queue();
        queue.enqueue("Vince");
        queue.enqueue("Pete");
        queue.enqueue("Vivo");
        queue.enqueue("Ron");
        queue.enqueue("Nick");


        queue.dequeue()
        queue.dequeue()

        console.log();

        let actual = queue.length()
        let expected = 3

        assert.strictEqual(actual, expected)

    })

    it("We should return a message if we try to dequeue When the queue is empty.", () => {
        let queue = new Queue();

        queue.enqueue("Ron");
        queue.enqueue("Nick");

      
        queue.dequeue();
        queue.dequeue();
        
        let actual = queue.dequeue()
        let expected = "The queue is empty"

        assert.strictEqual(actual, expected)

    })




})