const { create } = require('domain')
const { app, dialog, BrowserWindow, ipcMain, NodeEventEmitter } = require('electron')

let windows = new Set()

function createWindow () {
	const newWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
  	})
	windows.add(newWindow)

	newWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	app.quit()
})

app.on('activate', () => {
	if(BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

let file = ""
app.on('open-file', (event, arg) => {
	file = arg
	if(windows.size !== 0)
		createWindow()
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