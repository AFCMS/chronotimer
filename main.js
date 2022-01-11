const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			//preload: path.join(__dirname, 'preload.js')
		},
	})

	mainWindow.setMenu(null)

	mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
}).then(() => {
	//new Notification({ title: "Help", body: "chronotimer" }).onclick(() => console.log("msg")).show()
	new Notification({ title: "Help", body: "chronotimer" }).show()
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})