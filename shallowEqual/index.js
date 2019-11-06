/**
 * 浅比较就是只比较一层，深层次的对象嵌套不比较
 * @param {Any} objA 
 * @param {Any} objB 
 * @return {boolean}
 */

function shallowEqual(objA, objB) {
  // 过滤一些不是对象的比较
  if (Object.is(objA, objB)) return true

  if (
      typeof objA !== 'object' 
      || objA === null 
      || typeof objB !== 'object' 
      || objB === null
      ) {
        return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    // hasOwnProperty判断这个key是否objB也有
    if (!objB.hasOwnProperty(keysA[i]) || !Object.is(objB[keysA[i]], objA[keysA[i]])) {
      return false
    }
  }

  return true
}

// console.log(shallowEqual('foo', 'foo'))

console.log(shallowEqual({name: 'shen', age: 13}, {name: 'shen', age: 13}))