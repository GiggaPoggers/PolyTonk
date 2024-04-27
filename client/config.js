window.beta = false;
window.servers = [{
  wsLink: (window.top.location.protocol == "https:" ? "wss://" : "ws://") + window.top.location.host + "/server",
  name: "FFA",
}, {
  wsLink: "wss://polytonk2tdm.onrender.com/server",
  name: "2TDM",
}];
// Year, Month, Full Date
window.changelogDate = [1712796955062];
// SET CHANGELOG TO YOUR CURRENT DATE AFTER MAKING A CHANGE! TO GET YOUR DATE, PUT Date.now() ON YOUR CONSOLE
window.changelog = ["Welcome to PolyTonk V2"];
