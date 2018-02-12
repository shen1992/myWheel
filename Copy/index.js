/**
 * Created by shenyuan on 17/12/21.
 */
function shallowClone(copyObj) {
  var obj = {}
  for (var i in copyObj) {
    obj[i] = copyObj[i]
  }
  return obj
}

var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = shallowClone(x);
console.log(y.b.f === x.b.f);


function deepClone(source) {
  if(!source || typeof source !== 'object'){
    throw new Error('error arguments', 'shallowClone');
  }

  var targetObj = source.constructor === Array ? [] : {};

  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].construct === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
}

// JOSN对象中的stringify可以把一个js对象序列化为一个JSON字符串，parse可以把JSON字符串反序列化为一个js对象，通过这两个方法，也可以实现对象的深复制
// 在序列化JavaScript对象时，所有函数和原型成员会被有意忽略

function deepClone(source){
  return JSON.parse(JSON.stringify(source));
}


var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  func: function(){
    return 1;
  }
};
var o2 = deepClone(o1);
console.log(o2); // => {arr: [1,2,3], obj: {key: 'value'}}