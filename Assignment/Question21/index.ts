//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let book: {title: string; author: string; yearPublished: number} = {
    title: "Silent Patient",
    author: "Alex Michaelides",
    yearPublished: 2019
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);
