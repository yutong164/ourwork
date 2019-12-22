Page({
  data:{

  },
  pulse: function () {
    wx.navigateTo({ url: '/pages/heart/heart', }) 
  },
  indoor: function () { 
    wx.navigateTo({ url: '/pages/wifi_station/tianqi/tianqi', }) 
    },
  outdoor: function () {
    wx.navigateTo({ url: '/pages/outdoors/outdoors', })
  },
})