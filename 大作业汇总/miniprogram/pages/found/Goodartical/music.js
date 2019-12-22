const myaudio = wx.createInnerAudioContext();
Page({

  data: {
    isplay: false,//是否播放
  },
  onShow: function () {
    myaudio.src = "http://m701.music.126.net/20191222134012/32de74888e5065bf582b323095abfc4d/jdyyaac/0359/5653/5358/436b16e782a9016b2257d28db7fe2389.m4a"
  },
  //播放
  play: function () {

    myaudio.play();
    console.log(myaudio.duration);
    this.setData({ isplay: true });
  },
  // 停止
  stop: function () {
    myaudio.pause();
    this.setData({ isplay: false });
  }



})
