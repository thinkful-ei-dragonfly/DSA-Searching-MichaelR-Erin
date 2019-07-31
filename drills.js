function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

// 1. How many searches?
// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 3, 5, 6, 8
// 6, 8
// 8

// it would take 3 recursive calls to find 8.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 12, 14, 15, 17, 18
// 17, 18
// 18
// return -1

// 16 is not in the array, returns -1


// 4. Searching in a BST

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }

  dsfPostOrder(){
    if (this.left) {
        this.left.dsfPostOrder();
    }
    if (this.right) {
        this.right.dsfPostOrder();
    }
    console.log(this.key);
  }

  dsfPreOrder(){
    console.log(this.key);
    if (this.left) {
        this.left.dsfPreOrder();
    }
    if (this.right) {
        this.right.dsfPreOrder();
    }
  }

  dsfInOrder(){
    if (this.left) {
        this.left.dsfInOrder();
    }
    console.log(this.key);
    if (this.right) {
        this.right.dsfInOrder();
    }
  }

  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }

    /* If the tree already exists, then start at the root, 
       and compare it to the key you want to insert.
       If the new key is less than the node's key 
       then the new node needs to live in the left-hand branch */
    else if (key < this.key) {
        /* If the existing node does not have a left child, 
           meaning that if the `left` pointer is empty, 
           then we can just instantiate and insert the new node 
           as the left child of that node, passing `this` as the parent */
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        /* If the node has an existing left child, 
           then we recursively call the `insert` method 
           so the node is added further down the tree */
        else {
            this.left.insert(key, value);
        }
    }
    // Similarly, if the new key is greater than the node's key 
     //  then you do the same thing, but on the right-hand side */
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
}
}
// pre order 35 25 15 14 19 27 89 79 91 90
// post order 14 19 15 27 25 79 90 91 89 35

// post order 5 7 6 9 11 10 8
// pre order 5 7 6 9 8 11 10

const BST = new BinarySearchTree();
// BST.insert(35);
// BST.insert(25);
// BST.insert(15);
// BST.insert(14);
// BST.insert(19);
// BST.insert(27);
// BST.insert(89);
// BST.insert(79);
// BST.insert(91);
// BST.insert(90);
// BST.dsfPostOrder();

// BST.insert(5);
// BST.insert(7);
// BST.insert(6);
// BST.insert(9);
// BST.insert(11);
// BST.insert(10);
// BST.insert(8);
// BST.dsfPreOrder();

// BST.insert(25)
// BST.insert(15)
// BST.insert(50)
// BST.insert(10)
// BST.insert(24)
// BST.insert(35)
// BST.insert(70)
// BST.insert(4)
// BST.insert(12)
// BST.insert(18)
// BST.insert(31)
// BST.insert(44)
// BST.insert(66)
// BST.insert(90)
// BST.insert(22)
// BST.dsfInOrder();

class _Node {
  constructor(value) {
      this.value=value,
      this.next=null
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
   if (this.first === null) {
       return;
   }
   const node = this.first;
   this.first = this.first.next;
    //if this is the last item in the queue
   if (node === this.last) {
       this.last = null;
   }
   return node.value;
}

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
}

BST.insert(5, 'Captain Picard')
BST.insert(3, 'Commander Riker')
BST.insert(2, 'Lt. Cmdr. Worf')
BST.insert(1, 'Lieutenant security officer')
BST.insert(4, 'Lt. Cmdr. LaForge')
BST.insert(6,'Commander Data')
BST.insert(8, 'Lt. Cmdr. Crusher')
BST.insert(7, 'Lieutenant Selar')

function dsfPreOrder(tree){
  let array = [];

  array = [...array, tree]

  if (tree.left) {
    array = [...array, dsfPreOrder(tree.left)]
      // tree.left.dsfPreOrder();
  }
  if (tree.right) {
    array = [...array, dsfPreOrder(tree.right)]
      // tree.right.dsfPreOrder();
  }

  return array;
}

// console.log(dsfPreOrder(BST))


function nextOfficer(tree, values = []){
  const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = dsfPreOrder(tree)[0];
        // console.log(node);
        queue.enqueue(node);
        console.log(queue.length)
        while (queue.first) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
}

// console.log(nextOfficer(BST))

// 7. Max profit

// input: [128, 97, 121, 123, 98, 97, 105]
// output: 26 profit, buy monday, sell wednesday


function maxProfit(array){
    if (!array.length) {
        return 0;
    }
    let buy = array[0];
    let sell = array[0];
    let profit = 0;
    for(let i=1; i<array.length; i++){
        sell = array[i];
        if (sell > buy) {
            buy = sell;
        }
        if (sell - buy > profit) {
            profit = sell - buy;
        }
    }
    return profit;
}

//sample input
const library = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
  ];

function findBook(lib, dewey, title) {
    let start = 0, end = lib.length;
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        if (lib[middle].dewey === dewey) {
            if (lib[middle].title === title) {
                return lib[middle];
            }
            for (let i = middle + 1; lib[idx].dewey == dewey; i++) {
                if (lib[i].title == title) {
                    return lib[i];
                }
            }
            for (let i = middle - 1; lib[idx].dewey == dewey; --idx) {
                if (lib[i].title == title) {
                    return lib[i];
                }
            }
            return null;
        }
        if (lib[middle].dewey < dewey) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        return null;
    }
}

console.log(findBook(library, '005.44684', 'Windows Vista for Dummies'));