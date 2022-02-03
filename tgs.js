
function Traficlight(lampu) {
    if (lampu == "red"){
        return "Stop";
    }
    else if (lampu == "yellow"){
        return "Be careful!"
    }
    else if (lampu == "green"){
        return "Go!";
    }
}

var lamp = Traficlight("yellow");
console.log(lamp);
