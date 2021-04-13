// components/post/index.js
// 自定义组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res: Object
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
    goToDetail (event) {
      const pid = event.currentTarget.dataset.postId
      wx.navigateTo({
        url: '/pages/post-detail/post-detail?pid=' + JSON.stringify(pid),
      })
    },
  }
})
