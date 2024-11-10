import { LinkedList } from "./linked-list.js";

let list = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list.prepend("hello");
list.prepend("world");
list.prepend("coffe");
list.prepend("I don't drink");
list2.append("ganesh");

console.log(list.tail());
console.log(list2.tail());
console.log(list3.tail());
