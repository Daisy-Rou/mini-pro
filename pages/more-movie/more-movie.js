// pages/more-movie/more-movie.js
const baseUrl = getApp().gBaseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250:[],
    movies: [],
    _type: ''
  },

  /**
   * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    const type = options.type
    this.data._type = type
    // 正在热映
    wx.request({
      url: baseUrl + type,
      data: {
        start: 0,
        count: 10
      },
      success: (res) => {
        this.setData({
          movies: res.data.subjects
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {
    wx.showNavigationBarLoading()
    wx.request({
      url: baseUrl + this.data._type,
      data: {
        start: this.data.movies.length,
        count: 10
      },
      success: (res) => {
        let list = this.data.movies.concat(res.data.subjects)
        this.setData({
          movies: list
        })
        wx.hideNavigationBarLoading()
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },

    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.request({
      url: baseUrl + this.data._type,
      data: {
        start: 0,
        count: 10
      },
      success: (res) => {
        this.setData({
          movies: res.data.subjects
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
    // wx.startPullDownRefresh()
    // setTimeout(() => {
    //   wx.stopPullDownRefresh()
    // })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})