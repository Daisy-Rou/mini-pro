// 电影详情页pages/movie-detail/movie-detail.js
import { convertToCastString } from '../../utils/util'
const baseUrl = getApp().gBaseUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    _movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const mid = options.mid
    wx.request({
      url: baseUrl + 'subject/' + mid,
      success: (res) => {
        this.data._movie = res.data
        this.processMovieData(res.data)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  // 图片预览
  viewMovieImage(event) {
    const url = this.data.movie.images.large
    wx.previewImage({
      urls: [url],
    })
  },
  // 处理电影数据
  processMovieData(movie) {
    const data = this.data._movie
    data.directors = convertToCastString(movie.directors)
    data.casts = convertToCastString(movie.casts)
    data.types = movie.genres.join('、')
    this.setData({
      movie: data
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