//对util.js引用
const util =require("../../utils/util")
const db = require("../../utils/db")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    imageUrlindex: "/image/icons/箭头1.png",
    imageUrlorder: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E8%AE%A2%E5%8D%95.png?sign=9413b3559720d6b4860d87b3a38458d9&t=1559918416",
    imageUrlmoving: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E5%BF%83%E8%B7%B3%E5%BF%83%E5%8A%A8.png?sign=bb98b0afc3be17f02539a355bb4e5063&t=1559918440",
    imageUrlebrr:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E5%B0%B4%E5%B0%AC.png?sign=301407066cbd00c04f0808340cc20767&t=1559918578",
    imageUrlBack: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/reward/backback.jpg?sign=da739c90fdd95fdfc63023145ba0d761&t=1559695963",

    userInfo: null,
    orderList:[],
//订单列表

  
  },




  onTapLogin(event) {

    this.setData({
      userInfo: event.detail.userInfo
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
    util.getUserInfo().then(userInfo => {
      this.setData({
        userInfo
      }),
      this.getOrders()

    }).catch(err => {
      console.log('Not Authenticated yet');
    })
  },
  getOrders() {
    wx.showLoading({
      title: '加载...'
    })

    db.getOrders().then(result => {
      wx.hideLoading()

      const data = result.result

      if (data) {
        this.setData({
          orderList: data
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      wx.showToast({
        icon: 'none',
        title: '发生错误',
      })
    })
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