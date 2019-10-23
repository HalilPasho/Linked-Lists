function printLinkedList(head){

    let currentNode = head
    // while currentNode is not null
    while (currentNode){
        // log current node's data
        console.log(currentNode.data)
        // iterate to the next node
        currentNode = currentNode.next
    }
}

