

Page({

goBaidu: function () {
    wx.navigateTo({
      url: '/pages/out/out', 
      success: function () {
      }, //成功后的回调；
      fail: function () { }, //失败后的回调；
      complete: function () { } //结束后的回调(成功，失败都会执行)
    })
},

  /**
   * 页面的初始数据
   */
  data: {
   
   

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   // console.log(options.aid)
    this.setData({
      mid:options.aid,
      /*mavid:options.avid,
      mcid:options.cid*/
    })
    var that = this

wx.request({
  //request的请求发给B站
  url: "https://api.bilibili.com/x/web-interface/view?aid=" + options.aid ,   
//小程序在接受到server端返回的HTTP response之后，进行解析，把其中的关键信息抽取出来封装成一个js对象，传给success回调函数进行处理
  success:function(res)
  {
    console.log(res)
    if(res.statusCode==200){
      that.setData({
        testdetails: res.data
      })
      wx.hideNavigationBarLoading()
    }
  },
  fail: function ()
  {
  },
  complete: function ()
  {
  }
  })

  wx.showNavigationBarLoading()
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
    return{
      title: "邀你观看：" + this.data.testdetails.data.title
    }
  }
})