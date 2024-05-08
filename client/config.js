window.servers = [{
  wsLink: (function() {
    try {
      return (window.top.location.protocol == "https:" ? "wss://" : "ws://") + window.top.location.host + "/server";
    } catch (e) {
      // Handle the error gracefully
      console.error("Error accessing window.top.location:", e);
      // Default to the fallback URL
      return "wss://polytonk-wl6i.onrender.com/server";
    }
  })(),
  name: "FFA",
}, 
// {
//   wsLink: "wss://polytonk2tdm.onrender.com/server",
//   name: "2TDM",
// }, 
// {
//   wsLink: "wss://polytonkgrowth.onrender.com/server",
//   name: "GROWTH",
// }
];
// Year, Month, Full Date
window.changelogDate = [1714919256888];
// SET CHANGELOG TO YOUR CURRENT DATE AFTER MAKING A CHANGE! TO GET YOUR DATE, PUT Date.now() ON YOUR CONSOLE
window.changelog = ["Welcome to PolyTonk V2.4", "Player of the month: Incognitoes", "Added 8 new tanks (Machine Gun, Destroyer, Negev, Annihilator, Vanguard, Archer, Crossbow, and Cannon)", "Added a player chat system", "Removed game-modes temporaraly due to hosting issues.", "Currently working on adding/balancing tanks."];
