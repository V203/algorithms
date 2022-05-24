export default class Queue{

    ourArr = [];

    front(){
        return this.ourArr[0];
    }

    back(){
        return this.ourArr[this.ourArr.length-1];
    }

    enqueue(elem){
        this.ourArr.push(elem)
    }

    dequeue(){
        this.ourArr.shift()

    }

    display_all(){
        this.ourArr.forEach(elem => console.log(elem))
    }


        

}