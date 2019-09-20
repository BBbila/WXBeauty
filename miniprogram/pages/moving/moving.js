//对util.js引用
const util = require("../../utils/util")
const db = require('../../utils/db')
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imageUrlindex: "/image/icons/箭头1.png",
    imageUrlorder: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E8%AE%A2%E5%8D%95.png?sign=9413b3559720d6b4860d87b3a38458d9&t=1559918416",
    imageUrlmoving: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E5%BF%83%E8%B7%B3%E5%BF%83%E5%8A%A8.png?sign=bb98b0afc3be17f02539a355bb4e5063&t=1559918440",
    imageUrlebrr: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E5%B0%B4%E5%B0%AC.png?sign=301407066cbd00c04f0808340cc20767&t=1559918578",
    imageUrlcaomei:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E8%8D%89%E8%8E%93.png?sign=21bfe24414dd90a0b44932c4bb731201&t=1560179782",

    userInfo: null,
    movingList: [],
    isSelectAllChecked: false,
    isCartEdit: false,
    cartCheckMap: {},
    cartTotal: 0,
  },
  onTapLogin(event) {

    this.setData({
      userInfo: event.detail.userInfo
    })

    this.getCart()
  },

  getCart() {
    wx.showLoading({
      title: '加载...',
    })

    const cartCheckMap = this.data.cartCheckMap
    db.getCart().then(result => {
      wx.hideLoading()

      const data = result.result

      if (data.length) {
        this.setData({
          cartTotal: 0,
          movingList: data
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      wx.showToast({
        icon: 'none',
        title: '失败了😶'
      })
    })
  },

  //声明onTapCheck事件
  onTapCheck(event) {
    const checkId = event.currentTarget.dataset.id
    const cartCheckMap = this.data.cartCheckMap
    let isSelectAllChecked = this.data.isSelectAllChecked
    const movingList = this.data.movingList
    let cartTotal = 0

    if (checkId === 'selectAll') {
      isSelectAllChecked = !isSelectAllChecked
      movingList.forEach(product => {
        cartCheckMap[product.productId] = isSelectAllChecked
      })
    } else {
      cartCheckMap[checkId] = !cartCheckMap[checkId]
      isSelectAllChecked = true
      movingList.forEach(product => {
        if (!cartCheckMap[product.productId]) {
          // not all product selected
          isSelectAllChecked = false
        }
      })
    }

    cartTotal = this.updateTotalPrice(movingList, cartCheckMap)

    this.setData({
      cartTotal,
      isSelectAllChecked,
      cartCheckMap
    })
  },

  updateTotalPrice(movingList, cartCheckMap) {
    let checkout = 0
    movingList.forEach(product => {
      if (cartCheckMap[product.productId]) checkout += product.price * product.count
    })

    return util.priceFormat(checkout)
  },

//定义onTapEditCart事件（编辑收藏夹）
  onTapEditCart() {
    if (!this.data.isCartEdit) {
      this.setData({
        isCartEdit: true
      })
    } else {
      this.updateCart()
    }
  },
  adjustCartProductCount(event) {
    const dataset = event.currentTarget.dataset
    const adjustType = dataset.type
    const productId = dataset.id
    const cartCheckMap = this.data.cartCheckMap
    let movingList = this.data.movingList
    const productToAdjust = movingList.find(product => product.productId === productId) || {}

    if (adjustType === 'add') {
      productToAdjust.count++
    } else {
      if (productToAdjust.count >= 2) {
        productToAdjust.count--
      } else {
        delete cartCheckMap[productId]
        movingList = movingList.filter(product => product.productId !== productId)
      }
    }

    const cartTotal = this.updateTotalPrice(movingList, cartCheckMap)

    this.setData({
      cartTotal,
      movingList,
    })
    if (!movingList.length) {
      this.updateCart()
    }

  },

  //定义updateCart函数，更新收藏夹
  updateCart() {
    wx.showLoading({
      title: '加载...',
    })

    const movingList = this.data.movingList

    db.updateCart(movingList).then(result => {
      wx.hideLoading()

      const data = result.result

      if (data) {
        this.setData({
          isCartEdit: false
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      wx.showToast({
        icon: 'none',
        title: '失败了😶'
      })
    })
  },
//定义onTapCheckout事件
  onTapCheckout() {
    if (this.data.cartTotal == 0) {
      wx.showToast({
        icon: 'none',
        title: '请选择商品',
      })
      return
    }
    wx.showLoading({
      title: 'Loading...',
    })

    const cartCheckMap = this.data.cartCheckMap
    const movingList = this.data.movingList
    const productsToCheckout = movingList.filter(product => cartCheckMap[product.productId])
    const cartToUpdate = movingList.filter(product => !cartCheckMap[product.productId])

    db.addToOrder({
      list: productsToCheckout,
      isCheckout: true
    }).then(result => {
      wx.hideLoading()

      const data = result.result

      if (data) {
        wx.showToast({
          title: 'Succeed',
        })

        this.setData({
          movingList: cartToUpdate
        })

        this.getCart()
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      wx.showToast({
        icon: 'none',
        title: '失败了',
      })
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
      })

      this.getCart()

    }).catch(err => {
      console.log('Not Authenticated yet');
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