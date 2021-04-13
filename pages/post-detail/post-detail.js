// pages/post-detail/post-detail.js
import { postList } from '../../data/posts-data'
const app = getApp()
console.log(app.test)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false,
    isPlaying: false,
    // 不做数据绑定前面加_
    _pid: null,
    _postsCollected: {}, // 文章收藏状态
    _mgr: null,
  },
  // 收藏
  async onCollect() {
    // 假设为收藏->收藏
    // 那篇文章被收藏
    // 多篇文章被收藏
    const postsCollected = this.data._postsCollected
    postsCollected[this.data._pid] = !this.data.collected
    this.setData({
      collected: !this.data.collected
    })
    wx.setStorageSync('posts_collected', postsCollected)
    wx.showToast({
      title: this.data.collected ? '收藏成功' : "取消收藏",           
    })
    // 3333 async await
    // const result = await wx.showModal({
    //   title: "是否确认收藏文章",
      // 1111 不论点击取消还是确定都会触发success回调
      // success(event) {
      //   console.log(event.confirm)
      // }
    // })
    // if (result.confirm) {
    //   // 逻辑 TODO
    // }
    // console.log('124', result)
    // 2222 Promise then
    // result.then(res => {
    //   console.log(res.confirm)
    // })
  },
  // 分享
  onShare() {
    wx.showActionSheet({
      itemList: ['分享到QQ', '分享到微信', '分享到朋友圈'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 音乐播放
  onPlayMusic() {
    const mgr = this.data._mgr
    postList.forEach((item, index) => {
      if (item.postId === this.data._pid) {
        const music = postList[index].music
        mgr.src = music.url
        mgr.title = music.title
        mgr.coverImgUrl = music.coverImg
      }
    })
    // 用全局变量来保存音乐的播放状态
    app.gPlayingMusic = true
    app.gPlayingPostId = this.data._pid
    this.setData({
      isPlaying: true
    })
  },
  currentPostPlayMusic() {
    if (app.gPlayingMusic) {
      if (app.gPlayingPostId === this.data._pid) {
        return true
      }
      return false
    }
    return false
  },
  // 音乐暂停
  onStopMusic() {
    const mgr = this.data._mgr
    // 停止
    // mgr.stop()
    // 暂停
    mgr.pause()
    // 音乐停止 显示play状态图片
    // 音乐播放 显示stop状态图片
    app.gPlayingMusic = false
    app.gPlayingPostId = -1
    this.setData({
      isPlaying: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const pid = JSON.parse(options.pid)
    this.data._pid = pid
    // 从缓存中读取收藏状态
    const postsCollected = wx.getStorageSync('posts_collected') || {}
    this.data._postsCollected = postsCollected
    let collected = postsCollected[options.pid]
    if (collected === undefined)  {
      collected = false
    }

    this.setData({
      collected,
      isPlaying: this.currentPostPlayMusic()
    })
    postList.forEach(item => {
      if (item.postId === pid) {
        this.setData({
          postList: item
        })
      }
    })
    // 获取音乐播放对象
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    // 监听背景音频播放事件
    mgr.onPlay(this.onPlayMusic)
    // 监听背景音频停止事件
    mgr.onStop(this.onStopMusic)
    // 监听背景音频暂停事件
    mgr.onPause(this.onStopMusic)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '哈喽'
        })
      }, 2000)
    })
    return {
      title: '哈喽一1',
      path: '/pages/post-detail/post-detail?pid=3',
      promise
    }
  }
})