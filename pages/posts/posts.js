// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '就开始你觉得好的借口'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(123)
    var content = [
      {
        title: "2020课程的计划ID",
        content: "加速度场比赛成绩对你好城北街道睡不好觉，查到那会比读书包括，打开就是粗一个打死科技达成半句话付，接受程度和GV价格低客户端水泥厂，程度会比较不错就好好打不成被冻结，苍井空比较快递分部的刷卡缴费年初开始，吃的那家活动时间超过的，都是覅胡覅加快速度和你。",
        imgSrc: "/images/padx.png",
        reading: 102,
        detail: "加速度场比赛成绩对你好城北街道睡不好觉，查到那会比读书包括，打开就是粗一个打死科技达成半句话付，接受程度和GV价格低客户端水泥厂，程度会比较不错就好好打不成被冻结，苍井空比较快递分部的刷卡缴费年初开始，吃的那家活动时间超过的，都是覅胡覅加快速度和你。",
        collection: 92,
        dateTime: "24小时前",
        headImgSrc: '/images/padx.png',
        author: "猫是猫的猫",
        date: "Nov18 2020",
        avatar: "/images/keai.png",
        postId: 3,
        music: {
          url: "",
          title: "cdj1",
          coverImg: ""
        }
      },
      {
        title: "收稻谷素冠荷鼎",
        content: "水电费黑色衣服不当回事部分环节，温暖的如何是无意，的湖南省将活动啊，短时间地煞，大街上的技术框架。都是你的瑟吉欧开会的，数控刀具阿奎，第四节开局就偶是斗殴，解释道和超级好看，生胶带将收款卡即将，坚实的刺激死设计竞赛，的空间触发事件佛山骄傲的几十块了克里斯，的时间卡卡的会计师的理解上课，寄送到哦啊接地极",
        imgSrc: "/images/dog.png",
        reading: 178,
        detail: "水电费黑色衣服不当回事部分环节，温暖的如何是无意，的湖南省将活动啊，短时间地煞，大街上的技术框架。都是你的瑟吉欧开会的，数控刀具阿奎，第四节开局就偶是斗殴，解释道和超级好看，生胶带将收款卡即将，坚实的刺激死设计竞赛，的空间触发事件佛山骄傲的几十块了克里斯，的时间卡卡的会计师的理解上课，寄送到哦啊接地极",
        collection: 102,
        dateTime: "24小时前",
        headImgSrc: '/images/dog.png',
        author: "猫是猫的猫",
        date: "Nov18 2020",
        avatar: "/images/keai.png",
        postId: 7,
        music: {
          url: "",
          title: "cdj1",
          coverImg: ""
        }
      }
    ]
    this.setData({
      posts: content
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