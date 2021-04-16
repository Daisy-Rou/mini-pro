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
   * 组件的开发者不应该决定
   * 应该由组件的使用者决定
   * 自定义事件
   */
  methods: {
    goTap(event) {
      // const pid = event.currentTarget.dataset.postId
      const pid = this.properties.res.postId
      // 自定义事件
      this.triggerEvent('posttap', {
        pid
      })
    },
    // goToDetail (event) {
    //   const pid = event.currentTarget.dataset.postId
    //   wx.navigateTo({
    //     url: '/pages/post-detail/post-detail?pid=' + JSON.stringify(pid),
    //   })
    // },
  }
})
