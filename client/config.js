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
window.changelogDate = [1714919256888];
// SET CHANGELOG TO YOUR CURRENT DATE AFTER MAKING A CHANGE! TO GET YOUR DATE, PUT Date.now() ON YOUR CONSOLE
window.changelog = ["Welcome to PolyTonk V2.2", "Player of the month: Incognitoes", "Added 4 new tanks (Machine Gun, Destroyer, Negev, and Annihilator)", "Added a player chat system (press C on your keyboard to open the chat)", "Added a new game-mode (GROWTH)", "Currently working on adding/balancing tanks."];
