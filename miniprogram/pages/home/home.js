// pages/home/home.js
//连接数据库

const db = require("../../utils/db.js")
const util = require("../../utils/util.js")

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrlsweet:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E7%94%9C%E7%94%9C%E5%9C%88.png?sign=ad76e9836a0322b87c06b5b3d7a5c48b&t=1559918070",
    navbar: ['自然款', '混血款', '花纹款'],
    currentTab: 0,
  
    videoUrlpropagate:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/video/BeautyCon/1.mp4?sign=94da25aacd0e4a451f6d2108a35a9495&t=1559890287",
    videoUrlpropagate1: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/video/BeautyCon/3.mp4?sign=64208f854f5b61cc40ca76aee7eaa33b&t=1559893402" ,
    videoUrlpropagate2: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/video/BeautyCon/0.mp4?sign=2bee2f7ee77add4a311b0e6a0258fdcf&t=1559892095",

   
  },
  // 导航切换监听
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   this.getProductList();
   this.getProductList1();
   this.getProductList2();
  },

//连接数据库product
  getProductList() {
    wx.showLoading({
      title: '正在加载...',
    })
    db.getProductList().then(result => {
    console.log(result)
    wx.hideLoading()
    const productList = result.data
    //让钱保留两位数字呈现
      productList.forEach(product => product.price = util.priceFormat(product.price))
    //将云数据库中的数据赋值给我们 data 变量。若整个过程中存在调用错误，将错误信息打印出
      if (productList.length) {
      this.setData({
        productList
      })
    }
  }).catch(err => {
    console.error(err)
    wx.hideLoading()
  })
  },

  //连接数据库product1
  getProductList1() {
    wx.showLoading({
      title: '正在加载...',
    })

    db.getProductList1().then(result => {
      console.log(result)
      wx.hideLoading()

      const data = result.data
      //让钱保留两位数字呈现
      data.forEach(product => product.price = parseFloat(Math.round(product.price * 100) / 100).toFixed(2))
      //将云数据库中的数据赋值给我们 data 变量。若整个过程中存在调用错误，将错误信息打印出
      if (data.length) {
        this.setData({
          productList1: data
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()
    })
  },

  //连接数据库product2
  getProductList2() {
    wx.showLoading({
      title: '正在加载...',
    })

    db.getProductList2().then(result => {
      console.log(result)
      wx.hideLoading()

      const data = result.data
      //让钱保留两位数字呈现
      data.forEach(product => product.price = parseFloat(Math.round(product.price * 100) / 100).toFixed(2))
      //将云数据库中的数据赋值给我们 data 变量。若整个过程中存在调用错误，将错误信息打印出
      if (data.length) {
        this.setData({
          productList2: data
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()
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