/**
 * Created by shen on 2017/4/14.
 */
class Touch {
    constructor(element, fn) {
        this.dom = element
        this.checkDom()
    }
    checkDom() {
        if(!this.dom) {
            throw Error('must require dom!')
        }
        return this
    }
    onSwipe(direction, fn) {
        let x0,
            y0
        this.dom.addEventListener('touchstart', function (e) {
            x0 = e.touches[0].clientX
            y0 = e.touches[0].clientY
        })
        var isRight = false
        this.dom.addEventListener('touchmove', function (e) {
            if(!x0 || !y0)return
            var moveX = e.touches[0].clientX
            var moveY = e.touches[0].clientY
            var diffX = moveX - x0
            var diffY = moveY - y0
            if(Math.abs(diffX) > Math.abs(diffY)) {
                if(diffX > 100 && direction == 'right') {
                    isRight = true
                } else if(diffX < -100 && direction == 'left'){
                    isRight = true
                }
            } else {
                if(diffY > 100 && direction == 'down') {
                    isRight = true
                } else if(diffY < -100 && direction == 'up') {
                    isRight = true
                }
            }
        })
        this.dom.addEventListener('touchend', function (e) {
            if(isRight) {
                fn && fn()
                isRight = false
                x0 = undefined
                y0 = undefined
            }
        })
    }
}