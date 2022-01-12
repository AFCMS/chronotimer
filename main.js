const {app, BrowserWindow, Notification} = require('electron')
const path = require('path')

function createWindow () {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			//preload: path.join(__dirname, 'preload.js')
			devTools: true,
		},
	})
	//mainWindow.openDevTools()

	mainWindow.setMenu(null)

	mainWindow.setIcon(path.join(__dirname, "icon.png"))

	mainWindow.loadFile('index.html')
}

app.on('ready', function() {
	createWindow()
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
	//new Notification({
	//	title: "Help",
	//	body: "chronotimer",
	//	icon: path.join(__dirname, "icon.png")
	//}).show()
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})