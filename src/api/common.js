import wepy from 'wepy'

function toast(title = '温馨提示', icon = 'none', duration = 1000) {
  wepy.showToast({
    title,
    icon,
    duration
  })
}

export {
  toast
}
