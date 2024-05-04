window.beta = false;
window.servers = [{
  wsLink: (window.top.location.protocol == "https:" ? "wss://" : "ws://") + window.top.location.host + "/server",
  name: "FFA ",
}, {
  wsLink: "wss://polytonk2tdm.onrender.com/server",
  name: "2TDM ",
}, {
  wsLink: "wss://polytonkgrowth.onrender.com/server",
  name: "GROWTH ",
}, {
  wsLink: "wss://polytonkgrowth2tdm.onrender.com/server",
  name: "GROWTH 2TDM ",
}];
// Year, Month, Full Date
window.changelogDate = [1712796955062];
// SET CHANGELOG TO YOUR CURRENT DATE AFTER MAKING A CHANGE! TO GET YOUR DATE, PUT Date.now() ON YOUR CONSOLE
window.changelog = ["Welcome to PolyTonk V2.2", "Player of the month: Incognitoes", "Added two new game-modes  (GROWTH) and  (GROWTH 2TDM)", "Currently working on adding/balancing tanks.",];
