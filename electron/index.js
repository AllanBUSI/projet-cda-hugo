const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: false
          }
    })

    win.loadURL('http://152.228.216.38/');
}

app.whenReady().then(() => {
    createWindow()
})