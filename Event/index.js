function events() {
  if (!this.event_list) {
    this.event_list = {}
  }

  this.MaxEventListNum = this.MaxEventListNum || undefined

  this.defaultMaxEventListNum = 10
}

event.prototype.on = function(eventName, content) {
  
}

event.prototype.emit = function() {}

event.prototype.once = function() {}

event.prototype.removeAllListner = function() {}

event.prototype.getListenerCount = function() {}