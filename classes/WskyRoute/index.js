const EventEmitter = require('node:events')

class WskyRoute extends EventEmitter {
  path = undefined
  method = 'GET'
  public = false

  constructor(path, options) {
    super()
    if (!path) throw new Error("WskyRoute 'path' field is a required parameter.")
    this.path = path
    if (options) {
      this.method = options.method || 'GET'
      this.public = options.public == undefined ? false : options.public
    }
  }

  handle (data) {
    this.emit('route_match', data)
  }
}

module.exports = { WskyRoute }