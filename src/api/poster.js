import wepy from "wepy";

async function drawPoster(token, id, uuid, portrait) {
  const res = await wepy.request({
    url: `https://2zhuji.cn/index.php?g=Wap&m=Wxa&a=get_param_qr&token=${token}`,
    method: 'POST',
    data: {
      width: 450,
      page: 'pages/answer',
      scene: `id=${id}&ud=${uuid}`
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
  const query = res.data.data
  return new Promise ((resolve) => {
    wepy.request({
      url: `https://2zhuji.cn//index.php?g=Wap&m=Outerapi&a=buildImage&wxaapi=1`,
      method: 'POST',
      data: {
        'reply_pic': {
          'portrait': portrait,
          'background': {
            'img': '#000',
            'bg_size': {
              'content': 0
            }
          },
          'content': {
            '0': {
              'type': 'img',
              'url': 'http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/9/8/6/5c0766b404f4c.jpg',
              'x': '0',
              'y': '0',
              'width': 'bg_width',
              'height': 'bg_height'
            },
            '1': {
              'type': 'img',
              'url': query,
              'x': '300',
              'y': '320',
              'width': '100',
              'height': '100'
            },
            '2': {
              'type': 'img',
              'url': '%userpic',
              'x': '100',
              'y': '320',
              'width': '100',
              'height': '100',
              'shape': 'circle'
            }
          }
        }
      }
    }).then((res) => {
      if (res.data.url) resolve(res.data.url)
    })
  })
}

export default drawPoster
