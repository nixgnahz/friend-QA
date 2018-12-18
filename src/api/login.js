import wepy from 'wepy'

const login = (requestData) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: 'https://2zhuji.cn/index.php?g=Wap&m=Wxaapi&a=login',
      method: 'GET',
      data: requestData,
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      if (res.data.status == 1001) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export default login
