// components/movie-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    movies: Array,
  },
  // 外部样式类
  externalClasses: ['f-class'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMore() {
      wx.navigateTo({
        url: '/pages/more-movie/more-movie',
      })
      console.log(111)
    }
  }
})
