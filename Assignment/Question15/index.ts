let guest_list = ["Elon Musk", "Albert Einstein", "Abraham Lincoln"];

let guestwhocantmake = "Albert Einstein"
console.log(`${guestwhocantmake} cant make it to dinner`)

let new_Guest = "Zia Khan"
let idexguestwhocantmake = guest_list.indexOf(guestwhocantmake)

if (idexguestwhocantmake !== -1)
{
    guest_list[idexguestwhocantmake] = new_Guest
}

console.log("New invitation message")
guest_list.forEach((guest) => 
{console.log(`Dear ${guest} You are cordially invited to a dinner party`)}
)