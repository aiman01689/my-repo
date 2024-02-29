function make_shirt(size: string = "Large", message: string = "I love Typescript"):void 
{
    return console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt();
make_shirt("medium");
make_shirt("Small", "Programmers are loopy");