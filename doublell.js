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
    removeNode(val){
        if(this.head ==null){
            console.log('it is empty')
        }else{
            let currentnode= null
            let prevnode = null
            let nextnode = null
            currentnode = this.head
            while(currentnode){
                if(currentnode.element == val){
                  prevnode = currentnode.previous
                  nextnode = currentnode.next
                  if(prevnode!=null){
                      prevnode.next = nextnode
                  }
                  if(nextnode!=null){
                      nextnode.previous = nextnode
                  }
                }
                currentnode = currentnode.next
             
            }
        }
        this.getAllNodes()
    }
   
 addNode(val) {
        var node = new Node(val)
        if (this.head == null) {
            this.head = node
        } else {
            let currentnode = null
            let prevnode = null
            currentnode = this.head
            while(currentnode.next){
                currentnode = currentnode.next
            }
            currentnode.next = node
            node.previous = currentnode
        }
        // console.log(node)

    }
   
    getAllNodes(){
        let length = 0
        if(this.head==null){
           console.log('it is empty')
        }else {
            let currentnode =null
            currentnode = this.head
            while(currentnode.next){
                   length = length+1
                console.log(currentnode)
                 currentnode = currentnode.next
             
            }
           
        }
    }
   
    addNodeAt(ele,index){
        let length =0
        var newNode = new Node(ele)
        if(this.head==null){
          //  this.head = newNode
        }else{
            let currentnode=null
            let prevnode = null
            let nextnode = null
            currentnode = this.head
            while(currentnode.next){
                if(length == index){
                    prevnode = currentnode.previous
                    newNode.previous = prevnode
                    newNode.next = currentnode
                    currentnode.previous =newNode
                    if(prevnode!=null){
                        prevnode.next = newNode
                    }else{
                        this.head = newNode
                    }
                }
                 currentnode = currentnode.next
                      length = length+1
            }
        }
      this.getAllNodes()
    }
}
var linkedlist = new LinkedList()
linkedlist.addNode(10)
linkedlist.addNode(11)
linkedlist.addNode(16)
linkedlist.addNode(19)
linkedlist.addNode(1)
linkedlist.addNode(17)
linkedlist.addNode(6)
linkedlist.addNode(9)
linkedlist.addNodeAt(27,0)
//linkedlist.removeAt(1)

//linkedlist.removeNode(1)
//linkedlist.getAllNodes()