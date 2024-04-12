exports.botNames = [
  "PolyBot 1 🤖",
  "PolyBot 2 🤖",
  "PolyBot 3 🤖",
  "PolyBot 4 🤖",
  "PolyBot 5 🤖",
];
exports.getBotName = function () {
  return exports.botNames[Math.floor(Math.random() * exports.botNames.length)];
};

//,"PolyBot 🤖"
