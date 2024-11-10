import { LinkedList } from "./linked-list.js";

let list = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list.prepend("hello");
list.prepend("world");
list.prepend("coffe");
list.prepend("I don't drink");
list2.append("ganesh");

console.log(list.pop());
console.log(list.pop());
console.log(list.head);
console.log(list2.pop());
console.log(list2.head);
console.log(list3.pop());
