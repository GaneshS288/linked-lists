import { LinkedList } from "./linked-list.js";

let list = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list.prepend("hello");
list.prepend("world");
list.prepend("coffe");
list.prepend("I don't drink");
list2.append("ganesh");

console.table(list);
console.log(list.head);
console.log(list2.head);
console.log(list.size());
console.log(list2.size());
console.log(list.at(0));
console.log(list2.at(0));
console.log(list3.at(3));
console.log(list3.at(0));
