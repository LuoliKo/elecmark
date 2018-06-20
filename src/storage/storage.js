import storage from 'electron-json-storage'

// check workspace is exist, return a Promise
export function isWorkspaceExisted () {
  return new Promise((resolve, reject) => {
    storage.has('workspace', (err, hasKey) => {
      if (err) throw err
      resolve(hasKey)
    })
  })
}
