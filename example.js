const Watcher = require('./index')

const source = {
  name: 'zezhipeng'
}
const data = new Watcher(source)

data.watch('name', console.log)

data.name = 'cjh' // { oldVal: 'zezhipeng', newVal: 'cjh }

console.log(source) // { name: 'cjh' }