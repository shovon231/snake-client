const net = require("net");
const stdin = require("process");
const { setupInput } = require("./play");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });
  let interval = 0;
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: snk`);
    setInterval(() => {
      //conn.write("Move: up");
    }, 500);

    setTimeout(() => {
      conn.write("Move: left");
    }, 1000);
    setTimeout(() => {
      conn.write("Move: down");
    }, 2000);
    setTimeout(() => {
      conn.write("Move: right");
    }, 3000);
  });

  // Define encoding
  conn.setEncoding("utf8");
  conn.on("data", (stream) => console.log(stream));

  return conn;
};

module.exports = { connect };
