const { app, BrowserWindow } = require('electron') 
 
function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
   
  win.loadURL('http://localhost:3000/'); // when webpack-dev-server is running
}

app.on('ready', createWindow);
