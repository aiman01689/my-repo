"use strict";
const make_shirt = (size, message) => {
    console.log(`Size: ${size}, Message: ${message}`);
};
//Call the function.
let size = "medium";
let message = "Stars cant shine without darkness";
make_shirt(size, message);
make_shirt("large", "Stars cant shine without darkness");
