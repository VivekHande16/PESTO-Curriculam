class Stack2 {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    //Push to the top of stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
        console.log(`${element} added to ${this.count - 1}`);
        return this.count - 1;
    }

    //Pop the top element
    pop() {
        //It stack is empty
        if(this.count == 0) return undefined;
        //If stack is not empty
        else {
            let deleteItem = this.items[this.count - 1];
            this.count--;
            console.log(`${deleteItem} deleted`);
            return deleteItem;
        }
    }
}

const stack2 = new Stack2();


class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    check(str){
        
        if(str.charAt(this.count) == '{' || str.charAt(this.count) == '(' || str.charAt(this.count) == '[') {
            this.items[this.count] = str.charAt(this.count);
            console.log(`${this.count} : ${str.charAt(this.count)}`);
            this.count++;
        }

        if(this.items[this.count] == '}' )  {
            if(this.items[this.count - 1] == '{')
            this.count--;
        }
        if(this.items[this.count] == ')' )  {
            if(this.items[this.count - 1] == '(')
            this.count--;
        }
        if(this.items[this.count] == ']' )  {
            if(this.items[this.count - 1] == '[')
            this.count--;
        }

    }

    check2(){
        console.log(this.count);
        if(this.count == 0) return true;
        else return false;
    }
    

    
}

const stack = new Stack();
const str = "[()]";
stack.check(str);
console.log(stack.check2());


let arr = keys.split('.');
let length = arr.length;
for(let i=0;i<length;i++){
      let key = arr[i];
      let val = obj[`${key}`];
      if(obj===undefined || obj===null){
           return obj;
      }
      obj=val;
}
return obj;