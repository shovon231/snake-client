let connection;

// const setupInput = (conn) => {
//   connection = conn;
// };

let commands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
  if (commands[key]) {
    //console.log(`you pressed ${key}`);
    connection.write(commands[key]);
  }
};

module.exports = { setupInput };
