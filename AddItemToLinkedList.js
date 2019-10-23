// insert element after given node
function addItemToLinkedList(node, item){
    // if the node isn't null
    if (node){
        // create a new node
       let newNode = new Node(item)
       // set the new node's next to equal the given node's next
       newNode.next = node.next
       // set the given node's next to equal the new node
       node.next = newNode 
    }
}
