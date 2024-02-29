"use strict";
let userNames = ['admin', 'Ahsan', 'Mohsin', 'Ali', 'Ahmed'];
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log(`We need to find some users!`);
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username}, thank u for logging in again`);
        }
    }
}
console.log(`For non empty username:`);
greetUsers(userNames);
userNames = [];
console.log(`For empty usernames:`);
greetUsers(userNames);
//export{};
