// pages/post-detail/post-detail.js
import { postList } from '../../data/posts-data'
const app = getApp()
console.log(app.test)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: {},
    collected: false,
    // 不做数据绑定前面加_
    _pid: null,
    _postsCollected: {}
  },
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
    })
    postList.forEach(item => {
      if (item.postId === pid) {
        this.setData({
          postList: item
        })
      }
    })
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

  }
})