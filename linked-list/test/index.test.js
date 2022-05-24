var Llist = require('../linked_list');
var Node = require("../node");
const assert = require("assert");


describe("These are the linked list tests",()=>{
    
    it("We should be able to insert kate and pete to the lits  and return a size of 3", function(){
        let ll =  new Llist();
        ll.insertAtHead("kate");
        ll.insertAtHead("Pete");
        ll.insertAtHead("Smith");
      
        
            
            // console.log(ll.display());
            
        assert.equal(ll.count(),3);

    })

    it("Should be able to return the last node which in our case is Sam", ()=>{
        let ll = new Llist();

        ll.add_("Drake");
        ll.add_("Pete");
        ll.add_("Sam");

        let actual = ll.last_node();
        // console.log(actual);
        
        let expected = "Sam"

        assert.strictEqual(actual.data,expected)
    });

    it("Should be able to return the first node which in our case is Victor", ()=>{
        let ll = new Llist()
        ll.add_("Sam");
        ll.add_("Victor");
        ll.add_("Paul");
        ll.add_("Brian");

        let actual = ll.get_first_node();        
        let expected = "Sam";

        assert.strictEqual(actual.data,expected)
    });

    it("Should be able to display a list of names in the linked list", ()=>{

        let ll = new Llist()
        ll.add_("Jon");
        ll.add_("Jill");
        ll.add_("Rory");

        // ll.display()

        let expected ="jon \n Jill \n Roory"
     

    });

    it("We should be able to add names to the linked list  and clear the linked list return the size of zero after clearing the names",()=>{
        let ll = new Llist()
        ll.add_("Jon");
        ll.add_("Jill");
        ll.add_("Rory");
        ll.add_("Sam");
        ll.add_("Victor");
        ll.add_("Paul");
        ll.add_("Brian");
        console.log(`Size before clearing ${ll.count()}`);
        ll.clear()
        console.log(`Size After clearing ${ll.count()}`);

        let expected = 0
        let actual = ll.count();
        assert.strictEqual(expected,actual)

    })

    it("return the node at a current index",()=>{
        let ll  = new Llist();

        ll.add_("Rory");
        ll.add_("Sam");
        ll.add_("Victor");
        ll.add_("Paul");

        let expected =  new Node("Paul")
        let actual = ll.get_at_index(2)
        
        
        assert.deepStrictEqual(expected,actual);

    })

});