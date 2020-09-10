let rainfall = prompt("How many inches of rain fell?")
function starMaker (str, rainfall) {
    if (rainfall < 0)
    return false;
  else
    return str.repeat(rainfall);
}
console.log(starMaker("*", rainfall));
let bushelAmount = 50
function rainMaker (rainfall) {
    if (rainfall < 10) {
        bushelAmount = bushelAmount *.8
    }
    else if (rainfall >= 20) {
        bushelAmount = bushelAmount *.9
    }
    return bushelAmount
}
rainMaker(rainfall)
function finalAnswer () {
  let fertilizer = prompt("Did you use fertilizer?")
  if (fertilizer === "no") {
    return
  }
  if (fertilizer === "yes") {
    let premReg = prompt("Premium or regular")
    if (premReg === "regular") {
      bushelAmount = bushelAmount * 1.1
    }
    else if (premReg === "premium") {
      bushelAmount = bushelAmount * 1.15
    }
  }
}
finalAnswer ()
console.log("The yield should be", bushelAmount.toFixed(2), "bushels per acre.")