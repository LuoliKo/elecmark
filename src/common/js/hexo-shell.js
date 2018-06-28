const exec = require('child_process').exec

class HexoShell {
  constructor () {
    process.chdir('F:\\blog-workspace\\blog')
    console.log('cwd:' + process.cwd())
  }

  newArticle (layout, title) {
    exec(`hexo new ${layout} (${title})`, (err, stdout, stderr) => {
      if (err) throw err
      else console.log('success:' + stdout, stderr)
    })
  }
}

export default HexoShell
