// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  // 定义全局变量
  test: 1,
  globalData: {
    userInfo: null
  },
  // 歌曲播放状态
  gPlayingMusic: false,
  // 记录每首歌的播放状态
  gPlayingPostId: -1,
})
