var user = {
  name: ''
}

Object.defineProperty(user, 'inputValue', {
  configurable: true,
  enumerable: true,
  get: function() {
    return document.getElementById('foo').value
  },
  set: function(value) {
    document.getElementById('foo').value = value
  }
})