"use strict";
function make_shirt(size = "Large", message = "I love Typescript") {
    return console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("Small", "Programmers are loopy");
