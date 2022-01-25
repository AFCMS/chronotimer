var deadline = new Date("Jan 24, 2022 15:37:25").getTime()

document.getElementById("start_button").addEventListener("click", endTimer)

function endTimer() {
	deadline = new Date()
}

function formatTime(t) {
	var days = Math.floor(t / (1000 * 60 * 60 * 24))
	var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
	var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
	var seconds = Math.floor((t % (1000 * 60)) / 1000)
	return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

var x = setInterval(function() {
	var now = new Date().getTime()
	var t = deadline - now
	document.getElementById("main_timer").innerHTML = formatTime(t)
		if (t < 0) {
			clearInterval(x)
			document.getElementById("main_timer").innerHTML = "EXPIRED"
		}
}, 1000)