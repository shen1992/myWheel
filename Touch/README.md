#### 判断移动端用户的手势，比如左右上下滑动
#### 在滑动结束后执行一个callback

#### 使用方法

````
<script src="index.js"></script>
<script>
    var element = document.querySelector('.page')
    var hello = function () {
        alert('sucess!')
    }
    var touch = new Touch(element)
    touch.onSwipe('right', hello)
</script>
````