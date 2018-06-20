'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import { isWorkspaceExisted } from '../storage/storage'
import { regularWinOptions, chooseWorkspaceWinOptions } from '../common/js/window-options'

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

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  ipcMain.on('workspace-check', (event) => {
    event.returnValue = options.name === 'chooseWin'
  })
}

app.on('ready', () => {
  isWorkspaceExisted().then((flag) => {
    if (flag) {
      createWindow(regularWinOptions)
    } else {
      createWindow(chooseWorkspaceWinOptions)
    }
  })
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
