const db = wx.cloud.database({
  env: 'firstpro2019-83fpf'
})

const util = require('./util')

//为了其他文件引入，需要输入引用的语句：
module.exports = {
  //输入调用数据库的元素
  getProductList() {
    return db.collection('product').get()
  },
  getProductList1() {
    return db.collection('product1').get()
  },
  getProductList2() {
    return db.collection('product2').get()
  },

  //在详情页中，我们需要每个商品的详情信息
  getProductDetail(id) {
    return wx.cloud.callFunction({
      name: 'productDetail',
      data: {
        id: id
      },
    })
  },

  //加入订单
  addToOrder(data) {
   
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addToOrder',
          data,
        })
      })
      .catch(() => {
        wx.showToast({
          icon: 'none',
          title: '先登录一下哦'
        })
        return {}
      })
 
  },

    //接受订单数据
  getOrders() {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getOrders',
        })
      })
      .catch(() => {
        wx.showToast({
          icon: 'none',
          title: '请先登录'
        })
        return {}
      })
  },
  addToCart(data) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addToCart',
          data,
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: '请先登录'
        })
        return {}
      })
  },
//加入收藏夹
  getCart() {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getCart',
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: '请先登录'
        })
        return {}
      })
  },
  //定义updateCart函数
  updateCart(list) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'updateCart',
          data: {
            list,
          },
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: '请先登录'
        })
        return {}
      })
  },
  //定义addReview
  addReview(data) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addReview',
          data,
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: '请先登录'
        })
        return {}
      })
  },
  //定义getReviews函数
  getReviews(productId) {
    return db.collection('review').where({
      productId,
    }).get()
  },
  //构建uploadImage函数
  uploadImage(imgPath) {
    return wx.cloud.uploadFile({
      cloudPath: `review/${util.getId()}`,
      filePath: imgPath,
    })
  },
}