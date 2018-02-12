export default class CountDown {
  constructor(option) {
    this.isMs = option.isMs
    this.container = document.querySelector(option.container || 'body')
    this.endTime = option.endTime
    this.callBack = option.callBack
    this.dayEndShow = option.dayEndShow || true
    this.colon = option.colon
    this.init()
  }

  init() {
    this.render()
    this.bindEvent()
  }

  render() {
    if (this.colon) {
      this.renderColonFormat()
      return
    }
    this.renderTimeFormat()
  }

  renderTimeFormat() {
    let el = document.createElement('div')
    el.classList.add('con')
    el.style.fontSize = 0
    el.innerHTML = `
      <div class="box" style="display: inline-block" id="day">
        <div id="t_d" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">天</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_h" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">时</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_m" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">分</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_s" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">秒</span>
      </div>
      <div class="none box" id="ms" style="display: none;">
        <div id="t_ms" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="font-size: 12px;">分秒</span>
      </div>
    `
    this.container.appendChild(el)
    if (this.isMs) {
      document.querySelector('#ms').style.display = 'inline-block'
    }
  }

  renderColonFormat() {
    let el = document.createElement('div')
    el.classList.add('con')
    el.style.fontSize = 0
    el.innerHTML = `
      <div class="box" style="display: inline-block">
        <div id="t_h" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">:</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_m" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">:</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_s" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px" id="lastColon"></span>
      </div>
      <div class="none box" id="ms" style="display: none;">
        <div id="t_ms" class="box_num" style="display: inline-block;font-size: 12px"></div>
      </div>
    `
    this.container.appendChild(el)
    if (this.isMs) {
      document.querySelector('#ms').style.display = 'inline-block'
    }
  }

  bindEvent() {
    if (this.colon) {
      this.colonFormatEvent()
      return
    }
    this.timerFormatEvent()
  }

  timerFormatEvent() {
    let {endTime, colon} = this
    if(typeof endTime !== "number") {
      endTime = new Date(endTime).getTime()
    }
    let time = endTime - new Date().getTime(),
      day    = Math.floor(time / 1000 / 60 / 60 / 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 / 24),
      hour   = Math.floor(time / 1000 / 60 / 60 % 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 % 24),
      minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
      second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
      ms     = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100)

    ms = (ms === 0 && second !== 0) ? `1${ms}` : `0${ms}`

    document.querySelector('#t_d').innerHTML = day
    document.querySelector('#t_h').innerHTML = hour
    document.querySelector('#t_m').innerHTML = minute
    document.querySelector('#t_s').innerHTML = second
    document.querySelector('#t_ms').innerHTML = ms

    if (day <= 0) {
      document.querySelector('#day').style.display = 'none'
    }

    if (day <= 0 && this.dayEndShow) {
      document.querySelector('#ms').style.display = 'inline-block'
    }

    let timer = setTimeout(() => {
      this.bindEvent()
    }, 1)

    if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0  && ms <= 0) {
      clearTimeout(timer)
      this.callBack && this.callBack()
    }
  }

  colonFormatEvent() {
    let {endTime, isMs} = this
    if(typeof endTime !== "number") {
      endTime = new Date(endTime).getTime()
    }
    let time = endTime - new Date().getTime(),
      hour   = Math.floor(time / 1000 / 60 / 60) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 ),
      minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
      second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
      ms     = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100)

    ms = (ms === 0 && second !== 0) ? `1${ms}` : `0${ms}`
    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second

    document.querySelector('#t_h').innerHTML = hour
    document.querySelector('#t_m').innerHTML = minute
    document.querySelector('#t_s').innerHTML = second
    document.querySelector('#t_ms').innerHTML = ms

    if (hour <= 0 || isMs) {
      document.querySelector('#lastColon').innerHTML = ':'
      document.querySelector('#ms').style.display = 'inline-block'
    }

    let timer = setTimeout(() => {
      this.colonFormatEvent()
    }, 1)

    if (hour <= 0 && minute <= 0 && second <= 0  && ms <= 0) {
      clearTimeout(timer)
      this.callBack && this.callBack()
    }
  }
}