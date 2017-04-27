/**
 * Created by shen on 2017/4/14.
 */
class Touch {
    constructor(element) {
        this.dom = element
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
            'right': function (bool) {
                that._judge(bool > 100)
            },
            'left': function (bool) {
                that._judge(bool < -100)
            },
            'up': function (bool) {
                that._judge(bool < -100)
            },
            'down': function (bool) {
                that._judge(bool > 100)
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
                strategies[direction](diffX)
            } else {
                strategies[direction](diffX)
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