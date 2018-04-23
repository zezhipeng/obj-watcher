# obj-watcher

The watcher method watches for a property to be assigned a value and runs a function when that occurs.



## example



```javascript
const source = {
  name: 'zezhipeng'
}
const data = new Watcher(source)

data.watch('name', console.log)

data.name = 'cjh' // { oldVal: 'zezhipeng', newVal: 'cjh }

console.log(source) // { name: 'cjh' }

```






