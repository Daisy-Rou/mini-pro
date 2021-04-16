// pages/movies/movies.js
const baseUrl = getApp().gBaseUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchList: [],
    searchResult: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 不要在自定义组件发请求
    // 正在热映
    wx.request({
      url: baseUrl + 'in_theaters',
      data: {
        start: 5,
        count: 3
      },
      success: (res) => {
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })
    // 即将上映
    wx.request({
      url: baseUrl + 'coming_soon?start=8&count=3',
      success: (res) => {
        this.setData({
          comingSoon: res.data.subjects
        })
      }
    })
    // top250
    wx.request({
      url: baseUrl + 'top250?start=6&count=3',
      success: (res) => {
        this.setData({
          top250: res.data.subjects
        })
      }
    })
    // API地址
  },
  // 跳转到更多电影页
  onGotoMore(event){
    const type = event.currentTarget.dataset.type || event.detail.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },
  // 搜索
  onSearchMovie(event) {
    this.setData({
      searchResult: true
    })
    wx.request({
      url: baseUrl + 'search',
      data: {
        q: event.detail.value
      },
      success: (res) => {
        const searchList = res.data.subjects
        this.setData({
          searchList
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  // 取消搜索
  onCancelSearch() {
    this.setData({
      searchResult: false
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