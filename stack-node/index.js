var Stack = require('./stack_node');
var Node = require("./node");

let stack = new Stack();

stack.put("Phill");
stack.put("Jake");
stack.put("Bill");
stack.display(); 
stack.take();
console.log(`\n We take once from the stack and now we have ${stack.length()} people in the stack \n`);
stack.display();


stack.put("Ron");
stack.put("John");
stack.put("Vince");


console.log(`\n We place three people in the stack and noe we ${stack.length()} people in the stack.\n`);

stack.display();