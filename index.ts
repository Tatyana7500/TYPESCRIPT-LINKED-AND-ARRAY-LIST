import Arraylist from "./Arraylist";
import Linkedlist from "./Linkedlist";

const myArraylist = new Arraylist([1, 2, 3]);
console.log(myArraylist.getSize());

const myLinkedlist = new Linkedlist([1, 2, 3]);
console.log(myLinkedlist.getSize());
console.log(myLinkedlist.clear());
console.log(myLinkedlist.getSize());
