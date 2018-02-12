/**
 * Created by shenyuan on 17/12/4.
 */
function filterRepeat(arr1, arr2) {
  var result = [];
  arr1.forEach((item) => {
    if (arr2.every(i => i.uid !== item.uid)) {
    result.push(item)
  }
});
  return result;
}