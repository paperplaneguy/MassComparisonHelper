const { app, dialog, BrowserWindow, ipcMain, NodeEventEmitter } = require('electron')

function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
  	})

	win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	app.quit()
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

let file = ""
app.on('open-file', (event, arg) => {
	file = arg
})

ipcMain.on('query-save-location', (event, arg) => {
	event.returnValue = dialog.showSaveDialogSync({defaultPath: arg + ".mch"})
})

ipcMain.on('query-open-location', (event, _) => {
	event.returnValue = dialog.showOpenDialogSync({properties: ['openFile']})
})

ipcMain.on('query-open-with', (event, _) => {
	event.returnValue = file
})