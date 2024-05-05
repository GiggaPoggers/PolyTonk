window.beta = false;
window.servers = [{
  wsLink: (function() {
    try {
      return (window.top.location.protocol == "https:" ? "wss://" : "ws://") + window.top.location.host + "/server";
    } catch (e) {
      // Handle the error gracefully
      console.error("Error accessing window.top.location:", e);
      // Default to the fallback URL
      return "wss://polytonk.onrender.com/server";
    }
  })(),
  name: "FFA",
}, {
  wsLink: "wss://polytonk2tdm.onrender.com/server",
  name: "2TDM",
}, {
  wsLink: "wss://polytonkgrowth.onrender.com/server",
  name: "GROWTH",
}];
// Year, Month, Full Date
window.changelogDate = [1712796955062];
// SET CHANGELOG TO YOUR CURRENT DATE AFTER MAKING A CHANGE! TO GET YOUR DATE, PUT Date.now() ON YOUR CONSOLE
window.changelog = ["Welcome to PolyTonk V2.2", "Player of the month: Incognitoes", "Added two new game-modes (GROWTH) and (GROWTH 2TDM)", "Currently working on adding/balancing tanks."];
