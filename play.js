const { connect } = require("./client");
const { setupInput } = require("./input");
console.log("Connecting ...");
let connection = connect();
// setup interface to handle user input from stdin

setupInput(connection);
