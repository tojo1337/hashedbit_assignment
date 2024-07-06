function swapTheme() {
    let doc = document.getElementById("app");
    let but = document.getElementById("swap");
    if(doc.className==="day" && but.className==="button_day"){
        doc.className = "night";
        but.className = "button_night";
    }else {
        doc.className = "day";
        but.className = "button_day";
    }
}