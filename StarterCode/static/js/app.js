// Select the submit button
const tableData = data;
const submit = d3.select("#filter-btn");

//buildtable function display data table
//tbody, update table
function buildTable(tableData) {
    let tbody = d3.select("tbody");
    tbody.html("");
    tableData.forEach((datarow) => {
        const row = tbody.append("tr");
        // for (key in datarow) {
        Object.values(datarow).forEach((value) => {
            const cell = tbody.append("td");
            cell.text(value);
            });
        });
    
}
console.log(tableData);

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    d3.event.preventDefault();
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
    console.log(filteredData);
}
submit.on("click", handleClick);



