export default function countdown() {
    const countDate = new Date("Dec 25, 2021 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000;
    const minutes = second * 60
    const hour = minutes * 60
    const days = hour * 24

    const textDay = Math.floor(gap / days)
    const textHour = Math.floor((gap % days) / hour) 
    const textMinutes = Math.floor((gap % hour) / minutes)
    const textSeconds = Math.floor((gap % minutes) / second) 

    
    document.getElementById("days").innerHTML = textDay
    document.getElementById("hours").innerHTML = textHour
    document.getElementById("minutes").innerHTML = textMinutes
    document.getElementById("seconds").innerHTML = textSeconds
    if (textHour < 10) {
        document.getElementById("hours").innerHTML = "0" + textHour
    } else if (minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + textMinutes
    } else if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + textSeconds
    }
    
}

setInterval(countdown, 1000)