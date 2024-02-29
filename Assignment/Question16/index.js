"use strict";
let guest_list = ["Elon Musk", "Albert Einstein", "Abraham Lincoln"];
//informing people that you found a bigger dinner table.
for (let guest of guest_list) {
    console.log(`Hi ${guest} we found a bigger dinner table`);
}
//• Add one new guest to the beginning of your array.
let new_guest = "Ali";
guest_list.unshift(new_guest);
console.log(guest_list);
//Add one new guest to the middle of your array
let new_guestinmid = "Ahsan";
guest_list.splice(2, 0, new_guestinmid);
console.log(guest_list);
//add one new guest to the end of your list.
let new_guestatend = "Zia Khan";
guest_list.push(new_guestatend);
console.log(guest_list);
//New invitation Message 
console.log("NEW INVITATION MESSAGE:");
for (let guest of guest_list) {
    console.log(`Hello ${guest} you are invited to dinner`);
}
