const observe = require('callbag-observe')

class Watcher {
  constructor(data) {
    this._val = data
  }

  _defineObj (key, sink) {
    const pattern = {
      get() {
        return this._val[key]
      },
      set(val) {
        sink(1, ({ oldVal: this._val[key], newVal: val }))
        this._val[key] = val
      }
    }

    Object.defineProperty(this, key, pattern)
  }

  _source (key) {
    return (start, sink) => {
      Object
        .keys(this._val)
        .map(key => this._defineObj(key, sink))
    }
  }

  watch (key, operation) {
    observe(operation)(this._source(key))
  }
}

module.exports = Watcher
