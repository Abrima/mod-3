/*
     JavaScript Assignment A
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var cities = [
    'Abu Dhabi',
    'Abuja',
    'Cairo',
    '???',
    'Amman',
    'Islamabad',
    'Tokyo',
    'Beirut',
    '???',
    'Ottowa',
    'New Delhi',
    'Brasília'
];

var countries = [
    'UAE',
    'Nigeria',
    'Egypt',
    '???',
    'Jordan',
    'Pakistan',
    'Japan',
    'Lebanon',
    '???',
    'Canada',
    'India',
    'Brazil'
];

/******** Answers Section ********/

// 1. Create a for loop to iterate over 'cities'

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter variable to access both 'cities' and 'countries'

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")

// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!

// Step 1

for (var index = 0; index < 12; index++) {
    cities[index];
}


// Step 2

for (var index = 0; index < 12; index++) {
    if (cities[index] === "???" || countries[index] === "???") {
        index++;
    }
    console.log(cities[index], ", ", countries[index]);

}


// Step 3

for (var index = 0; index < 12; index++) {
    if (cities[index] === "???" || countries[index] === "???") {
        console.log("Oops!");
    }
    else {
        console.log(cities[index], ", ", countries[index]);
    }
}
