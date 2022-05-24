export default class Stack {
    ourArr = [];
    top = 0;

    clear(){
        this.top = 0;
    }

    length(){
        return this.top;
    }

    peek(){
        return this.ourArr[this.top-1];
    }

    push(elem){
        this.ourArr[this.top++]=elem;
    }
    pop(){
       return this.ourArr[--this.top]
    }

    display(){
         return this.ourArr
    }

    length(){
        return this.top
    }

}