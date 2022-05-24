var Stack = require('../stack_node');
var Node = require("../node");
const assert = require("assert");


describe("These are the linked list tests", () => {

    it("We should be able to insert Kate, Pete and Vicki to the list and return a size of 3", function () {
        let stack = new Stack();
        stack.put("Pete");
        stack.put("Vicki");
        stack.put("Kate");

        stack.display();

        let actual = stack.length()
        let expected = 3;
        assert.equal(actual, expected);

    })

    it("We should be able to take once and expect a size of 2", function () {
        let stack = new Stack();
        stack.put("Pete");
        stack.put("Vicki");
        stack.put("Kate");
        stack.take();
        stack.display();

        let actual = stack.length()
        let expected = 2;
        assert.equal(actual, expected);

    })

    it("Our size should equal 0 even if we take from an empty list.", function () {
        let stack = new Stack();
        stack.put("Pete");

        stack.take();
        stack.take();
        stack.display();

        let actual = stack.length()
        let expected = 0;
        assert.equal(actual, expected);

    })

})