import CountDown from './countdown'

function alert() {
  console.log(1);
}

console.log('2');

new CountDown({endTime: '2018/02/19 10:10:00', container: '.container'})

