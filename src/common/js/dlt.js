const loopBall = function (num) { // 生成初始数据
  let ballArr = []
  for (let i = 1; i <= num; i++) {
    let ballObj = {}
    ballObj.code = i
    ballObj.status = 0
    ballArr.push(ballObj)
  }
  return ballArr
}
const loopNumbers = function (num) {
  let numberArr = []
  for (let i = 0; i < num; i++) {
    numberArr.push(i)
  }
  return numberArr
}
const randNum = function (num) { //  生产随机数
  var r = Math.floor(Math.random() * (num))
  return r
}

const randRedBall = function () { // 随机红球
  let redBallArr = loopBall(35)
  let loopNumber = loopNumbers(35)
  let Index
  for (let i = 0; i < 5; i++) {
    let m = loopNumber.length
    Index = randNum(m) // 产生随机数，作为数组索引
    let ballIndex = loopNumber[Index] // 从数字数组中取出对应的数字，作为索引
    let Obj = redBallArr[ballIndex]
    Obj.status = 1
    redBallArr[ballIndex] = Obj
    loopNumber.splice(Index, 1) // 从数字数组中删除数字
  }
  return redBallArr
}

const randBlueBall = function () { // 随机蓝球
  let blueBallArr = loopBall(12)
  let loopNumber = loopNumbers(12)
  let Index
  for (let i = 0; i < 2; i++) {
    let m = loopNumber.length
    Index = randNum(m) // 产生随机数，作为数组索引
    let ballIndex = loopNumber[Index] // 从数字数组中取出对应的数字，作为索引
    let Obj = blueBallArr[ballIndex]
    Obj.status = 1
    blueBallArr[ballIndex] = Obj
    loopNumber.splice(Index, 1) // 从数字数组中删除数字
  }
  return blueBallArr
}

const countBall = function (redBallArr, blueBallArr) { // 整理红球和篮球
  let red = []
  let red_d = []
  let red_t = []
  let blue = []
  let blue_d = []
  let blue_t = []
  for (let key in redBallArr) {
    let Obj = redBallArr[key]
    if (Obj.status === 1) {
      red.push(Obj.code)
    }
  }
  for (let key in blueBallArr) {
    let Obj = blueBallArr[key]
    if (Obj.status === 1) {
      blue.push(Obj.code)
    }
  }
  let ballObj = {}
  ballObj.red = red
  ballObj.red_d = red_d
  ballObj.red_t = red_t
  ballObj.blue = blue
  ballObj.blue_d = blue_d
  ballObj.blue_t = blue_t
  ballObj.play_type = 'p'
  return ballObj
}

const calZhu = function (ballArr) { // 计算注数
  let result = 0
  for (let i = 0; i < ballArr.length; i++) {
    let zhuNum = 0
    let codeinfo = ballArr[i]
    let redDNum = 0
    let blueDNum = 0
    let redNum = codeinfo.red.length
    let blueNum = codeinfo.blue.length
    if (redDNum > 4 || blueDNum > 1) {
      zhuNum = 0
    } else if (redDNum > 0 && redNum + redDNum < 6) {
      zhuNum = 0
    } else if (blueNum < 2) {
      zhuNum = 0
    } else if (blueNum < 2) {
      zhuNum = 0
    } else if (redNum + redDNum < 5 || blueNum + blueDNum < 2) {
      zhuNum = 0
    } else {
      var rA = 5 - redDNum
      var rResult = 1
      if (rA === 1) {
        rResult = redNum
      } else {
        if (redNum > rA) {
          var r1 = calNumberJieCheng(redNum)
          var r2 = calNumberJieCheng(rA)
          var r3 = calNumberJieCheng(redNum - rA)
          rResult = Math.floor(r1 / (r2 * r3))
        }
      }
      var bA = 2 - blueDNum
      var bResult = 1
      if (bA === 1) {
        bResult = blueNum
      } else {
        if (blueNum > bA) {
          var b1 = calNumberJieCheng(blueNum)
          var b2 = calNumberJieCheng(bA)
          var b3 = calNumberJieCheng(blueNum - bA)
          bResult = Math.floor(b1 / (b2 * b3))
        }
      }
      zhuNum = rResult * bResult
    }
    result = result + zhuNum
  }
  return result
}

const calNumberJieCheng = function (num) { // 计算阶乘
  if (num < 1) {
    return 0
  }
  var n = 1
  for (var i = 1; i <= num; i++) {
    n = Math.floor(n * i)
  }
  return n
}

module.exports = {
  loopBall: loopBall,
  randNum: randNum,
  randRedBall: randRedBall,
  randBlueBall: randBlueBall,
  countBall: countBall,
  calZhu: calZhu
}
