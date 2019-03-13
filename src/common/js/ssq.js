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
  let redBallArr = loopBall(33)
  let loopNumber = loopNumbers(33)
  let Index
  for (let i = 0; i < 6; i++) {
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
  let blueBallArr = loopBall(16)
  let loopNumber = loopNumbers(16)
  let Index
  for (let i = 0; i < 1; i++) {
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

const countBall = function (redBallArr, blueBallArr, zhu) { // 整理红球和篮球
  let red = []
  let redD = []
  let redT = []
  let blue = []
  let blueD = []
  let blueT = []
  for (let key in redBallArr) {
    let Obj = redBallArr[key]
    if (Obj.status === 1) {
      red.push(Obj.code)
    } else if (Obj.status === 2) {
      redD.push(Obj.code)
    } else if (Obj.status === 3) {
      redT.push(Obj.code)
    }
  }
  for (let key in blueBallArr) {
    let Obj = blueBallArr[key]
    if (Obj.status === 1) {
      blue.push(Obj.code)
    } else if (Obj.status === 2) {
      blueD.push(Obj.code)
    } else if (Obj.status === 3) {
      blueT.push(Obj.code)
    }
  }
  let ballObj = {}
  ballObj.red = red
  ballObj.red_d = redD
  ballObj.red_t = redT
  ballObj.blue = blue
  ballObj.blue_d = blueD
  ballObj.blue_t = blueT
  ballObj.play_type = 'p'
  ballObj.zhu = zhu
  return ballObj
}

const calZhu = function (redNum, blueNum) {
  let result = 1
  let rZhu = 0
  let bZhu = 0
  let redN = 6
  let blueN = 1
  if (redNum < 6 || blueNum < 1) {
    return 0
  }
  if (redNum === 6 && blueNum === 1) {
    result = 1
  } else {
    if (redNum === 6) {
      rZhu = 1
    } else {
      let r1 = calNumberJieCheng(redNum)
      let r2 = calNumberJieCheng(redN)
      let r3 = calNumberJieCheng(redNum - redN)
      rZhu = r1 / (r2 * r3)
    }
    if (blueNum === 1) {
      bZhu = 1
    } else {
      let b1 = calNumberJieCheng(blueNum)
      let b2 = calNumberJieCheng(blueN)
      let b3 = calNumberJieCheng(blueNum - blueN)
      bZhu = b1 / (b2 * b3)
    }
    return Math.floor(bZhu * rZhu)
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
