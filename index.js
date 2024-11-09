import { LinkedList, node } from "./linked-list.js";

let list = new LinkedList();

list.prepend(new node("hello"));
list.prepend(new node("world"));
list.prepend(new node("coffe"));
list.prepend(new node("I don't drink"));


console.table(list);