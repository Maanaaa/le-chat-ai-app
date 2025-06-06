const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });
    app.setName('Le Chat - App');
    win.loadFile(path.join(__dirname, '../public/index.html'));
}

app.whenReady().then((createWindow));

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


