function validator(target, validator, errorMsg) {
  return new Proxy(target, {
    _validator: validator,
    set(target, key, value, proxy) {
      let errMsg = errorMsg
      if (value === '') {
        alert(`${errMsg[key]}不能为空！`)
        return target[key] = false
      }
      let va = this._validator[key]
      if (!!va(value)) {
        return Reflect.set(target, key, value, proxy)
      } else {
        alert(`${errMsg[key]}格式不正确`)
        return target[key] = false
      }
    }
  })
}

const validators = {
  name(value) {
    return value.length > 6
  },
  password(value) {
    return value.length > 6
  },
  moblie(value) {
    return /^1(3|5|7|8|9)[0-9]{9}$/.test(value)
  },
  email(value) {
    return /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
  }
}

const errorMsg = { name: '用户名', password: '密码', moblie: '手机号码', email: '邮箱地址' }
const vali = validator({}, validators, errorMsg)
let registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let validatorNext = function* () {
    yield vali.name = registerForm.userName.value
    yield vali.password = registerForm.password.value
    yield vali.moblie = registerForm.phoneNumber.value
    yield vali.email = registerForm.emailAddress.value
  }
  let validator = validatorNext()
  validator.next()
  !vali.name || validator.next();//上一步的校验通过才执行下一步
  !vali.password || validator.next();
  !vali.moblie || validator.next();
})
