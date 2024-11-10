import { LinkedList } from "./linked-list.js";

let list = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list.prepend("hello");
list.prepend("world");
list.prepend("coffe");
list.prepend("I don't drink");
list2.append("ganesh");

console.log(list.contains("coffe"));
console.log(list.contains("hello"));
console.log(list.contains("heheheh"));
console.log(list2.contains("ganesh"));
console.log(list2.contains("heheheh"));
console.log(list3.contains("hello"));
