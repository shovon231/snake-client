const net = require("net");
const { IP, PORT, USERNAME } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  let interval = 0;
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${USERNAME}`);
  });

  // Define encoding
  conn.setEncoding("utf8");
  conn.on("data", (stream) => console.log(stream));

  return conn;
};

module.exports = { connect };
