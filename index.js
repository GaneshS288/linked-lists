import { LinkedList } from "./linked-list.js";

let newList = new LinkedList({
  value: 10,
  next: {
    value: 20,
    next: null,
  },
});

console.log(newList);

