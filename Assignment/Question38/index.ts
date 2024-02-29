function describe_city(city: string, country: string = "Unknown Country"):void{
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi", "Pakistan");
describe_city("Newyork");
describe_city("Berlin", "Germany");
