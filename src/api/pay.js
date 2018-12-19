import wepy from 'wepy'

const pay = (session, token, requestData) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: `https://2zhuji.cn/index.php?g=Wap&m=Wxaapi&a=payment&session_3rd=${session}&token=${token}`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: requestData
    }).then((res) => {
      if (res.data.status == 1001) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export default pay
