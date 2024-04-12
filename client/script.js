function embedded() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

if (embedded()) {
  alertmodal("", "Please open the game in a new tab.", (ok = "OK")).then(() => {
    window.open("#" + location.pathname);
  });
}
