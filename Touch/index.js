/**
 * Created by shen on 2017/4/14.
 */
class Touch {
    constructor(selector) {
        this.dom = document.querySelector(selector)
        this.checkDom()
        this.isRight = false
    }
    checkDom() {
        if(!this.dom) {
            throw Error('must require dom!')
        }
        return this
    }
    _judge(bool) {
        if(bool){
            this.isRight = true
            return
        }
        this.isRight = false
    }
    onSwipe(direction, fn) {
        let x0,
            y0;
        let that = this
        let strategies = {
            'right': function (bool, length) {
                that._judge(bool > length)
            },
            'left': function (bool, length) {
                that._judge(bool < -length)
            },
            'up': function (bool, length) {
                that._judge(bool < -length)
            },
            'down': function (bool, length) {
                that._judge(bool > length)
            }
        }
        this.dom.addEventListener('touchstart', function (e) {
            x0 = e.touches[0].clientX
            y0 = e.touches[0].clientY
        })
        this.dom.addEventListener('touchmove', function (e) {
            if(!x0 || !y0)return
            var moveX = e.touches[0].clientX
            var moveY = e.touches[0].clientY
            var diffX = moveX - x0
            var diffY = moveY - y0
            if(Math.abs(diffX) > Math.abs(diffY)) {
                strategies[direction](diffX, 100)
            } else {
                strategies[direction](diffY, 100)
            }
        })
        this.dom.addEventListener('touchend', function (e) {
            if(that.isRight) {
                fn && fn()
                that.isRight = false
                x0 = undefined
                y0 = undefined
            }
        })
    }
}