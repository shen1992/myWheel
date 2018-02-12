var arr = ['shen', 'kong', 'hehe']

function remove(arr, val) {
  var index = arr.indexOf(val)
  arr.splice(index, 1)
}

remove(arr, 'shen')

console.log('arr', arr)