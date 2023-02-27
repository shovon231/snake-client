const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  let intervalID;
  conn.on("connect", () => {
    intervalID = setInterval(() => {
      //conn.write("Move: up");
    }, 1000);
  });
  setTimeout(() => {
    clearInterval(intervalID);
  }, 3000);
  return conn;
};

module.exports = { connect };
