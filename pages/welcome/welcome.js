// pages/welcome/welcome.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  startJourney: function(event) {
    console.log(event)
    // 页面路由跳转 
    // 子页面 可返回
    // wx.navigateTo({
    //   url: '/pages/posts/posts',
    // })
    // 不可返回
    wx.redirectTo({
      url: '/pages/posts/posts',
    })
  },
  onViewTap: function(event) {
    console.log('view tap')
  },
  onTextTap: function(event) {
    console.log('text tap')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log('hhhhhhh')
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