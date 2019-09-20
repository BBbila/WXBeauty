// pages/new/new.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Beautycon: [
      {
        name: "soralens|西米升级绿",
        property: "年抛",
        imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/b2.jpg?sign=1ffc0410e55448d8c61603ca09e840dd&t=1557127794",
        imagecoverurl:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E6%92%AD%E6%94%BE1.png?sign=5eb3e2cdeea32d913d68ba306a8e6d7c&t=1559918767",
        aid: 21937443,
        avid: 21937443,
        cid: 36231922
      }, 
      {
        name: "fairrcon|习紫",
        property: "年抛",
        imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/b1.jpg?sign=5502b06cd67a49d6d13741f15fd42a9d&t=1557127782",
        imagecoverurl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E6%92%AD%E6%94%BE1.png?sign=5eb3e2cdeea32d913d68ba306a8e6d7c&t=1559918767",
        aid: 43490853,
        avid: 43490853,
        cid: 76216668
      },
      {
        name: "Q2Grils|艾克里里棕",
        property: "年抛",
        imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/b4.jpg?sign=a98d3cdde200f99056f4e6bd9cda8c59&t=1557127807",
        imagecoverurl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E6%92%AD%E6%94%BE1.png?sign=5eb3e2cdeea32d913d68ba306a8e6d7c&t=1559918767",
        aid: 43492019 ,
        avid: 43492019,
        cid:76218796

      },
      {
        name: "lemoncon|暮光粉",
        property: "年抛",
        imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/bb2.jpg?sign=267932106cb5987c168519fc5e479aa1&t=1557127858",
        imagecoverurl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E6%92%AD%E6%94%BE1.png?sign=5eb3e2cdeea32d913d68ba306a8e6d7c&t=1559918767",
        aid: 21937443,
        avid: 21937443,
        cid: 36231922
      },
      {
        name: "soralens|金粉赫木蓝",
        property: "年抛",
        imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/b5.jpg?sign=a6c86459090d320191d7fac4f0d632a9&t=1557127822",
        imagecoverurl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E6%92%AD%E6%94%BE1.png?sign=5eb3e2cdeea32d913d68ba306a8e6d7c&t=1559918767",
        aid: 11694230,
        avid: 11694230,
        cid: 19319517
      },
      {
        name: "soralens|钻石泪花金蓝",
        property: "年抛",
        imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/bb1.jpg?sign=aefa114cbdd7fb8e88db39332fd1b4b8&t=1557127841",
        imagecoverurl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E6%92%AD%E6%94%BE1.png?sign=5eb3e2cdeea32d913d68ba306a8e6d7c&t=1559918767",
        aid: 51360223,
        avid: 51360223,
        cid: 89904077
      }
    ]

  },


  f1: function(event)
{
  //event.currentTarget是获取了被点击页面的自定义属性的值
 var testId=event.currentTarget.dataset.testId
 var testavId = event.currentTarget.dataset.testavId
 var movieId=event.currentTarget.dataset.movieId

 //wx.navigateTo导航接口：保留当前页面，跳转到应用内的目标页
  wx.navigateTo({
    url: '/pages/details/details?aid='+ testId 
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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