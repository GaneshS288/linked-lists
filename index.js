import { LinkedList } from "./linked-list.js";

let list = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list.prepend("hello");
list.prepend("world");
list.prepend("coffe");
list.prepend("I don't drink");
list2.append("ganesh");

list.insertAt("inserted", 4)
list2.insertAt("inserted", 1);
list3.insertAt("inserted", 0)
console.log(list.toString());
console.log(list2.toString());
console.log(list3.toString());
