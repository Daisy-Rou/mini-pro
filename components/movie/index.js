// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到电影详情页面
    toMovieDetail(event) {
      const mid = this.properties.movie.id
      wx.navigateTo({
        url: '/pages/movie-detail/movie-detail?mid=' + mid,
      })
    }
  }
})
