const current_users: string[] = ["Ayesha", "Amna", "Emaan", "Alishba", "Rameen", "Manahil"];

const new_users: string[] = ["Ayesha", "Alisha", "Ali", "Rameen", "Aina"];

function checkUserNames(current_users: string[],new_users: string[]): void {
    const lowercaseCurrentUsers = current_users.map(user => user.toLowerCase());

    for (const newUser of new_users){
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercaseCurrentUsers.includes(lowercasedNewUser)){
            console.log(`Username "${newUser}" is already taken. Please enter a new username.`)
        }else {
            console.log(`Username "${newUser} is available."`);
        }
    }
}

checkUserNames(current_users,new_users);