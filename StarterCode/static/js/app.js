// from data.js
var tableData = data;

// from data.js
var tableData = data;
//Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each ufo report object
tableData.forEach(function (uforeport) {
    console.log(uforeport);
});

// // Step 2:  Use d3 to append one table row `tr` for each ufo report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function (uforeport) {
    console.log(uforeport);
    const row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function (uforeport) {
    console.log(uforeport);
    var row = tbody.append("tr");

    for (key in uforeport) {
        console.log(key, uforeport[key]);
    }
});

// // Step 4: Use d3 to append 1 cell per ufo report value (columns)
data.forEach(function (uforeport) {
    console.log(uforeport);
    var row = tbody.append("tr");

    for (key in uforeport) {
        console.log(key, uforeport[key]);
        //     // Append a cell to the row for each value in the ufo report object
        const cell = row.append("td");
    }
});

// Select the submit button
const submit = d3.select("#submit");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    const inputElement = d3.select("#ufo-form-input");

    // Get the value property of the input element
    const inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData;

    //filter the data by ufo type
    const filteredData = tableData.filter(bit => bit.uforeport === inputValue);

    console.log(filteredData);