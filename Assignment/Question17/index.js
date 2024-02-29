"use strict";
let guest_list = ['Ali', 'Elon Musk', 'Ahsan', 'Albert Einstein', 'Abraham Lincoln', 'Zia Khan'];
// Can invite only two people 
console.log("Hi I can invite only two people for dinner.");
//Each time you pop a name from your list, print a message to that person.
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry ${remove_guest}, I cant invite you to dinner`);
}
// letting remaining guests know they’re still invited.
for (let guest of guest_list) {
    console.log(`Hello ${guest} you are still invited`);
}
//List at the end
guest_list.pop();
guest_list.pop();
console.log(`list at the end: ${guest_list}`);
