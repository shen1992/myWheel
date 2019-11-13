var cluster = require('cluster')
var cpus = require('os').cpus()

// 创建子进程
cluster.setupMaster({
  exec: 'worker.js'
})

for (var i = 0; i < cpus.length; i++) {
  cluster.fork()
}