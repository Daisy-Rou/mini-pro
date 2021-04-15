// pages/posts/posts.js
// 导入
// var postData = require("../../data/posts-data")
// console.log(postData)
// 导入
import {postList} from '../../data/posts-data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '就开始你觉得好的借口',
  },
  goToDetail (event) {
    const pid = event.currentTarget.dataset.postId || event.detail.pid
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + JSON.stringify(pid),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.setData({
      postList
    })
    // 同步设置缓存
    wx.setStorageSync('flag', 3)
    // 清除缓存
    // wx.removeStorageSync('flag')
    // // 清空所有缓存
    // wx.clearStorageSync()
    // 读取缓存同步
    // const flag  = wx.getStorageSync('flag')
    // 读取缓存异步
    const flag = await wx.getStorage({
      key: 'flag',
      // 1111 老版小程序获取异步数据
      // success(value) {
      //   console.log(value.data)
      // }
    })
    // 22222 新版小程序获取异步数据
    // flag.then(value => {
    //   console.log(value.data)
    // })
    // 33333 async await
    console.log(flag.data)
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