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
    _titleArr: ['正在热映', '即将上映', '豆瓣Top250']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMore() {
      let type = ''
      const title = this.data._titleArr
      switch (this.properties.title) {
        case title[0]:
          type = 'in_theaters'
          break;
        case title[1]:
          type = 'coming_soon'
          break;
        case title[2]:
          type = 'top250'
          break;
        default:
          break;
      }
      this.triggerEvent('moretap', {
        type
      })
      // wx.navigateTo({
      //   url: '/pages/more-movie/more-movie',
      // })
      // console.log(111)
    }
  }
})
