var modal, content, okbtn, cancelbtn, input, value, func1;

function alertmodal(t, e, n, o) {
  return new Promise((function(l, r) {
    document.getElementsByClassName("modal-content").length > 0 && modal.remove();
    modal = document.createElement("div");
    document.body.appendChild(modal);
    modal.innerHTML = `
      <div class='modal-content' style="display: flex; justify-content: center; align-items: center;">
        <div class='container' style="font-family: 'Odibee Sans', cursive; text-align: center;">
          <h1 style="color: white;">${t}</h1>
          <p style="font-size:25px; color: white; text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;">${e}</p>
          <div class='clearfix'>
            <button class='okbtn' style="margin: 0 auto; font-family: 'Odibee Sans', cursive;">OK</button>
          </div>
        </div>
      </div>
    `;
    modal.setAttribute("style", "position:fixed; z-index:100; left:0; top:0; width:100vw; height:100vh; padding-top:50px; background-color:rgba(0, 0, 0, 0.3);");
    (content = document.querySelector(".modal-content")).setAttribute("style", "background-color:#37467d; margin:5% auto 15% auto; border-radius:5px; width:30%; color: white; box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; ");
    document.querySelector(".container").style.padding = "16px";
    document.querySelector(".clearfix").style.textAlign = "center";
    okbtn = document.querySelector(".okbtn");
    void 0 !== n && (okbtn.innerHTML = n);
    okbtn.addEventListener("click", (function() {
      modal.remove();
      l();
    }));
    okbtn.setAttribute("style", "border: #475AA1; height:50px; outline: none; background-color:#5E78D6; color:#FFF; border-radius:5px; width:125px; font-size:16px; user-select:none; font-family: 'Odibee Sans', cursive; box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 0px inset; transition: width 0.3s; text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;");
    window.innerWidth <= 700 ? content.style.width = "60%" : window.innerWidth > 700 && window.innerWidth <= 950 && (content.style.width = "50%");
    okbtn.addEventListener("mouseover", (function() {
      okbtn.style.cursor = "pointer";
      okbtn.style.width = "140px"; // Adjust width when hovered
    }));
    okbtn.addEventListener("mouseout", (function() {
      okbtn.style.width = "125px"; // Restore original width when mouseout
    }));
    void 0 !== o && (window.onclick = function(t) {
      if (t.target == modal) return modal.remove();
    });
  }));
}
