var btnEl = document.getElementById("btn-split");
var pplEl = document.querySelector("#np");
var amtEl = document.querySelector("#amt");
var resEl = document.querySelector(".s-amt");
btnEl.addEventListener("click", splitTheBill);
function splitTheBill() {
    console.log("Working btn");
    if (pplEl.value === "0" && amtEl.value === "0") {
        return;
    }
    var res;
    res = +amtEl.value / +pplEl.value;
    resEl.textContent = res.toString();
}
