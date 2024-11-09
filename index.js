import { LinkedList, node } from "./linked-list.js";

let list = new LinkedList();

list.append(new node("hello"));
list.append(new node("world"));

console.log(list);