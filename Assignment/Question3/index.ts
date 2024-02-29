let personName = "Aiman";
//LowerCase
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
//UpperCase
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
//TitleCase
let Name = personName.split(" ");
let titleName = " "
for (let i = 0; i < Name.length; i++) {
    titleName +=Name[i].charAt(0).toUpperCase() +Name[i].slice(1).toLowerCase()+" "
};
console.log(titleName);