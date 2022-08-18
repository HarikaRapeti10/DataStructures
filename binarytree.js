class BinaryTree{
    constructor(){
        this.root = null
    }
    add(element){
        var newNode = new Node(element);
        if(this.root== null){
            this.root = newNode
        }else{
           this.addNode(this.root,newNode)
        }
    
    }
    inOrder() { 
        let node = this.root
        if(node !== null) 
        { 
            // console.log(node.element,'left =',node.leftChild.element,'right =',node.rightChild.element)
            this.inOrder(node.leftChild); 
             console.log(node.element); 
            this.inOrder(node.rightChild); 
        } 
  } 
    addNode(node,newNode){
      // console.log(node,newNode)
        if(newNode.element< node.element){
            if(node.leftChild== null){
                node.leftChild = newNode
            }else{
                this.addNode(node.leftChild,newNode)
            }
        } else if(node.rightChild== null){
                    node.rightChild = newNode
                }else{
                    this.addNode(node.rightChild,newNode)
                }

     console.log(node)
   }
}

class Node {
    constructor(element){
        this.element= element
        this.leftChild= null;
        this.rightChild= null
    }
}
binarytree = new BinaryTree();
binarytree.add(50)
binarytree.add(20)
binarytree.add(70)
binarytree.add(25)
//binarytree.inOrder()

// binarytree.add(60)
// binarytree.add(90)
// binarytree.add(10)
// binarytree.add(30)
// binarytree.add(80)
