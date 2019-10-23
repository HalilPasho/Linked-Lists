class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// create nodes
node1 = new Node(5)
node2 = new Node(3)
node3 = new Node(2)
node4 = new Node(7)
node5 = new Node(9)

// link the nodes together 
node1.next = node2 
node2.next = node3
node3.next = node4
node4.next = node5

