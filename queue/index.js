import Queue from "./queue.js";

let queue = new Queue();

queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(2);
console.log(`We have enqueu 6,5,4,2`);

queue.display_all();

console.log( queue.front() +` Value ${queue.front()} is at the front of the queue`);
console.log( queue.back() +` Value ${queue.back()} is at the back of the queue`);

queue.dequeue()
console.log(`We have dequeud once and now we have`);


console.log(`This is what we have in our queue.`);
queue.display_all();
