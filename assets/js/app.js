var audio = document.getElementById("alarma");
var alarmas = [];


window.onload = () => {

    setInterval(() => {

        var time = new Date();

        var hour = time.getHours();
        var minute = time.getMinutes();


        printHour(hour);
        printMinute(minute);
        printAmPm(hour);

        triggerAlarm(hour, minute);

        blinkDots();

    }, 750);
}

document.querySelector("#newAlarm").addEventListener("click", () => {

    var timeBox = document.getElementById("alarmBox");

    if (timeBox.style.display === "none") {
        timeBox.style.display = "flex";
    } else {
        timeBox.style.display = "none";
    }

});

function ringAlarm() {
    audio.play();
}

function printHour(hour) {
    if (hour < 10) {
        document.querySelector("#hora").innerHTML = ("0" + hour);
    } else {
        document.querySelector("#hora").innerHTML = (((hour + 11) % 12 + 1));
    }
}

function printMinute(minute) {
    if (minute < 10) {
        document.querySelector("#minuto").innerHTML = ("0" + minute);
    } else {
        document.querySelector("#minuto").innerHTML = minute;
    }
}

function printAmPm(hour) {
    if (hour > 12) {
        document.querySelector("#am").classList.add("off");
        document.querySelector("#am").classList.remove("on");
        document.querySelector("#pm").classList.add("on");
        document.querySelector("#pm").classList.remove("off");
    } else if (hour < 12) {
        document.querySelector("#am").classList.add("on");
        document.querySelector("#am").classList.remove("off");
        document.querySelector("#pm").classList.add("off");
        document.querySelector("#pm").classList.remove("on");
    }
}

function blinkDots() {
    if (document.querySelector(".dots").classList.contains("on")) {
        document.querySelector(".dots").classList.remove("on");
        document.querySelector(".dots").classList.add("off");
    } else if (document.querySelector(".dots").classList.contains("off")) {
        document.querySelector(".dots").classList.remove("off");
        document.querySelector(".dots").classList.add("on");
    }
}

function triggerAlarm(hour, minute) {

    var hr;
    var mn;

    if (hour < 10) {
        hr = ("0" + hour);
    } else {
        hr = hour;
    }

    if (minute < 10) {
        mn = ("0" + minute);
    } else {
        mn = minute;
    }

    for (var i = 0; i <= alarmas.length; i++) {
        if (alarmas[i] == (hour + ":" + minute)) {
            ringAlarm();
        }
    }
}

document.querySelector("#setAlarm").addEventListener("click", () => {

    var time = document.getElementById("timeBox").value;
    console.log(time);
    alarmas.push(time);
    console.log(alarmas);
});