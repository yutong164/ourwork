const app = getApp()


Page({
  data: {
    text: "上传记录",
    contents: ""
  },
  onLoad: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }


    var _this = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'query',
      // 传给云函数的参数
      data: {
        tag: 1
      },
      success: function (res) {
        console.log(res.result)
        _this.setData({
          contents: res.result.data[0].content
        })
      },
      fail: console.error
    })
  }
})