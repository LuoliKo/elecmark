'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
// import { isWorkspaceExisted } from '../storage/storage'
import { regularWinOptions } from '../common/js/window-options'
// import HexoShell from '../common/js/hexo-shell'
import execa from 'execa'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow (options) {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow(options)
  // hexoShell = new HexoShell()

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  ipcMain.on('window-minimize', () => {
    mainWindow.minimize()
  })

  ipcMain.on('window-close', () => {
    app.quit()
  })

  ipcMain.on('new-article', (e, ...arg) => {
    execa.shell(`hexo new ${arg[0]} "${arg[1]}"`, {cwd: 'F:\\blog-workspace\\blog'})
      .then(result => {
        e.sender.send('new-article-result', true)
        console.log(result.stdout)
      })
      .catch(err => {
        e.sender.send('new-article-result', false)
        console.log(err)
      })
  })
}

app.on('ready', () => {
  createWindow(regularWinOptions)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
