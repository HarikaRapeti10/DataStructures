'use strict';
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
        this.previous=null
    }


}
class LinkedList {
    constructor() {
        this.head = null
    }
  
}

class Stack extends LinkedList{
    constructor(){
        super()
    }
    push(ele){
        var newNode = new Node(ele);
        if(this.head == null){
            this.head = newNode;
           // console.log('came here',this.head)
        }else{
            let currentnode = null
            let prevNode = null
            let nextNode = null
            currentnode = this.head
            while(currentnode.next){
                currentnode = currentnode.next
            }
            currentnode.next = newNode
            newNode.previous = currentnode
        }
      //  console.log(newNode)
       
    }
    pop(){
         let currentnode = null
            currentnode = this.head
             let prevNode = null
            let nextNode = null
            while(currentnode.next){
                currentnode = currentnode.next
            }
            prevNode = currentnode.previous
            if(prevNode!=null){
                prevNode.next = null
            }
            console.log(currentnode.element,'is removed')
            return currentnode;
           
           
    }
    peek(){
        if(this.head == null){
            console.log('it is empty')
        }else{
            let currentnode = null
            currentnode = this.head
            while(currentnode.next){
                currentnode = currentnode.next
            }
            console.log(currentnode.element,'is top element')
            return currentnode;
        }
       
    }
}

class Queue extends LinkedList{
    constructor(){
        super()
    }
    enqueue(ele){
        var newNode = new Node(ele)
        if(this.head == null){
            this.head = newNode
        }else{
            let currentnode =  this.head
            while(currentnode.next){
                currentnode = currentnode.next
            }
            currentnode.next = newNode
            newNode.previous = currentnode
           
        }
    }
    dequeue(){
        let currentnode = this.head
        if(this.head== null){
            console.log('it is empty')
        }else{
            let nextNode = null
            nextNode = this.head.next
            if(nextNode !=null){
                this.head = nextNode
                nextNode.prev = null
            }
           
        }
   
        console.log(currentnode.element,'is removed')
        return currentnode
       
       
    }
    front(){
          let currentnode = this.head
        if(this.head == null){
            console.log('queue is empty')
        }else{
            console.log(this.head.element,'is front element')
           return this.head
        }
       
    }
}

var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(10)
stack.push(4)
stack.push(10)
stack.push(5)
stack.push(10)
stack.pop()
stack.getAllNodes()
stack.peek()

var queue = new Queue()
queue.enqueue(1)
queue.enqueue(7)

queue.enqueue(4)
queue.enqueue(9)
queue.enqueue(3)
queue.getAllNodes()
queue.dequeue()
queue.dequeue()
queue.front()
