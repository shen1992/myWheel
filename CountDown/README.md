## 一个用js写的倒计时组件

#### 使用方法

- 把组件引入，传入参数

```
import CountDown from 'nw-countdown'

new CountDown({endTime: '2018/05/20 17:22:00', container: '.container', isMs: true})
``` 

#### API

##### 传入参数
- endTime(string or num):倒计时的结束时间
  + 支持字符串："2018/05/20 17:22:00"
  + 也支持num型毫秒格式：1589966520000
  
##### 可选参数
- container(selector):选择把组件append到哪个元素中，支持选择器，如".container","#containenr","body"
  + 如果不传，则默认append到body
  
- isMs(Boole): 是否展示分秒，默认为false

- callback(function): 倒计时结束之后的回调函数 

#### 扩展

为了使组件更通用，提供了一些class给使用者扩展

- .con:整个倒计时的最外层容器
- .box:单个容器元素
- .box_num:数字
- .box_unit单位

如果对样式有特殊需求，重写以上class即可



