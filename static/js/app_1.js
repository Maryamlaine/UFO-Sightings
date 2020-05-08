// from data.js
var tableData = data;

// Select the table
var table = d3.select("table");

// Select tbody
var tbody = d3.select("tbody");

//Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country, shape, duration,comments)
tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDateElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputDateValue = inputDateElement.property("value");

  // Print the value to the console
  console.log(inputDateValue);

  // console.log(tableData);
var filteredDate = tableData.filter(ufo => ufo.datetime === inputDateValue);

// Print the filteredDate to the console
console.log(filteredDate);


//Clear tbody
tbody.html('')
filteredDate.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});
};