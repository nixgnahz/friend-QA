import wepy from 'wepy'
const baseUrl = 'https://1398400420487156.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/redpocket/default'

const fetch = (url, requestData) => {
  return new Promise((resolve, reject) => {
    let fetchTask = {
      url: baseUrl + url,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      }
    }
    if (requestData) {
      fetchTask.data = requestData
    }
    wepy.request(fetchTask).then((res) => {
      if (res.data.result == 0) {
        resolve(res.data.data)
      } else {
        reject(res.data)
      }
    })
  })
}

export default fetch
