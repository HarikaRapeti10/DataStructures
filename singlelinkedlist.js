use strict';


class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }


}
class LinkedList {
    constructor() {
        this.head = null
    }
    addNode(val) {
        var node = new Node(val)
        if (this.head == null) {
            this.head = node
        } else {
            let currentnode = null
            currentnode = this.head
            while (currentnode != null) {
                if (currentnode.next == null) {
                    currentnode.next = node
                    break;
                } else {
                    currentnode = currentnode.next
                }
            }
        }
          console.log(node.element)

    }
    getAllNodes() {
        let length = 0
        let currentnode = null
        if (this.head == null) {
            console.log('it is empty')
        } else {
            currentnode = this.head
            while (currentnode != null) {
                length =length+1
                console.log('.............', currentnode.element,length)
                currentnode = currentnode.next;
            }
        }
    }
    removeNode(val) {
        let currentnode = null
        let previousNode = null


        if (this.head == null) {
            console.log('there is no node with element', val)
        } else {
            currentnode = this.head
            if (currentnode.element == val) {
                this.head = currentnode.next

            } else {
                console.log(currentnode)
                while (currentnode != null) {
                    if (currentnode.element == val) {
                        previousNode.next = currentnode.next
                    }
                    previousNode = currentnode
                    currentnode = currentnode.next
                }
            }


        }
        this.getAllNodes()
    }
    removeNodeAt(index){
        let length = 0;
        let prevNode = null
        let currentNode = null;
       
        currentNode = this.head
        while(currentNode!= null){
            length=length+1
            if(length==index){
                if(prevNode!=null){
                    prevNode.next = currentNode.next
                }else{
                    this.head = null
                }
            }
            prevNode = currentNode
            currentNode=currentNode.next
        }
         this.getAllNodes()
    }
   
    addNodeAt(ele,index){
        let length = 0
        let previousNode = null
        let currentnode = null
           var node = new Node(ele)
            currentnode = this.head
            while (currentnode != null) {
                length =length+1
                if(length == index){
                   if(previousNode!=null){
                        let temp = previousNode.next
                        previousNode.next = node
                        currentnode = node
                        currentnode.next = temp
                   }else{
                       this.head = node
                       this.head.next = currentnode
                   }
               
                }
                 previousNode = currentnode
                 currentnode = currentnode.next;
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


linkedlist.getAllNodes()

linkedlist.removeNode(9)
linkedlist.addNodeAt(27,6)
linkedlist.removeNodeAt(8)