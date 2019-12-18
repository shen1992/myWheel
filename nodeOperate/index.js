/**
 * 删除文件，默认是根路径
 * @params {string} fileName 文件名，如果有文件夹需带上
 */

function deleteFile(fileName) {
  if (fs.existsSync(path.resolve(process.cwd(), `./${targetImg}`))) {
    fs.unlinkSync(path.resolve(process.cwd(), `./${targetImg}`))
  }
}

