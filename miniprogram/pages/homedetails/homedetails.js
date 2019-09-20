//引用db.js
const db = require("../../utils/db.js")
const util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrldo:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E5%8B%BE%E5%8B%BE.png?sign=c395b21395f9933d6fa6e2a88ea47350&t=1559998817",
    imageUrlcomment:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E8%AF%84%E8%AE%BA.png?sign=78c4e4dc0d096f33ca95d8ed136bb53b&t=1559999093",    

  },
//跳转页面
  onTapReviewEntry() {
    if (this.data.product.reviewCount) {
      const product = this.data.product
      wx.navigateTo({
        url: `/pages/seereview/seereview?productId=${product._id}&price=${product.price}&name=${product.name}&image=${product.image}`,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductDetail(options.id)
   
 
  },

 

  getProductDetail(id)
  {
  wx.showLoading({
    title: '来了来了...',
  })

    db.getProductDetail(id).then(result => {

    wx.hideLoading()
    const data = result.result

      data.price = util.priceFormat(data.price)

    if (data) {
      this.setData({
        product: data
      })
    } else {
      setTimeout(() => {
        wx.navigateBack()
      }, 2000)
    }
  }).catch(err => {
    console.error(err)
    wx.hideLoading()

    setTimeout(() => {
      wx.navigateBack()
    }, 2000)
  })
},

buy(){
  wx.showLoading({
    title: 'Purchasing...',
  })
  const productToBuy = Object.assign({
    count: 1
  }, this.data.product)

  productToBuy.productId = productToBuy._id

  //调用db.js中加入订单的这个函数
  db.addToOrder({
    list: [productToBuy]
  }).then(result => {
    wx.hideLoading()

    const data = result.result

    if (data) {
      wx.showToast({
        title: 'Succeed'
      })
    }
  }).catch(err => {
    console.error(err)
    wx.hideLoading()

    wx.showToast({
      icon: 'none',
      title: '发生错误了😶'
    })
  })
},
  addToCart() {
    wx.showLoading({
      title: '加载...',
    })

    db.addToCart(this.data.product).then(result => {
      wx.hideLoading()

      const data = result.result

      if (data) {
        wx.showToast({
          title: '成功咯😎'
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      wx.showToast({
        icon: 'none',
        title: '发生错误了😶'
      })
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