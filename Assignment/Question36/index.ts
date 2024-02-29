const make_shirt = (size: string, message: string):void =>
{
    console.log(`Size: ${size}, Message: ${message}`);
}

//Call the function.
let size: string = "medium";
let message: string = "Stars cant shine without darkness";

make_shirt(size, message);
make_shirt("large","Stars cant shine without darkness");