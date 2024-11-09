import { LinkedList, node } from "./linked-list.js";

let list = new LinkedList();
let list2 = new LinkedList();

list.prepend(new node("hello"));
list.prepend(new node("world"));
list.prepend(new node("coffe"));
list.prepend(new node("I don't drink"));
list2.append(new node("ganesh"))

console.table(list);
console.log(list.head)
console.log(list2.head)