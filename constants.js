//IP, PORT, player's name/initials.

const IP = "localhost";
const PORT = 50541;
const USERNAME = "SNK";

//The movement keys (W, A, S, D) and Key mapping for message
let commands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  q: "Say:  hey",
  z: "Say:  hello",
  x: "Say:  bye",
};
module.exports = {
  IP,
  PORT,
  USERNAME,
  commands,
};
