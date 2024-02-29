"use strict";
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Newyork");
describe_city("Berlin", "Germany");
