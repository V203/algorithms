let Queue = require("./queue_node");

let queue = new Queue();


queue.enqueue("Ron");
queue.enqueue("James")
queue.enqueue("Keith")

queue.display();

console.log(`\n There are currently ${queue.length()} people in the queue \n`);

queue.dequeue();

console.log(`\n There are currently ${queue.length()} people in the queue \n`);

queue.display();
queue.dequeue();
queue.dequeue();

queue.display();
queue.display();
