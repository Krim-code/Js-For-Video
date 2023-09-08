console.log(window)
newWin=window.open("https://itstep.org", "StepWin",
 "resizable");

newWin.resizeTo(500,500);
newWin.moveTo(50,50);
newWin.close()


console.log(navigator.getBattery())

console.log(navigator.connection)

console.log(navigator.languages)

console.log(screen.width)
console.log(screen.availWidth)