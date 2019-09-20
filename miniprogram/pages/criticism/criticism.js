
// pages/criticism/criticism.js
const db = require('../../utils/db')
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrlphoto:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E5%9B%BE%E7%89%87.png?sign=81de8ec88c3d94aa106a803df0809e7a&t=1561080896",
    product: {},
    reveiwContent: '',
    userInfo: null,
    previewImages: [],//用户上传图片列表
  },

  //从本地相册选择图片
  chooseImage() {
    wx.chooseImage({
      count: 3,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({
          previewImages: res.tempFilePaths
        })
      }
    })
  },
//预览图片
  previewImage(event) {
    const target = event.currentTarget
    const src = target.dataset.src

    wx.previewImage({
      current: src,
      urls: [src]
    })
  },

  //定义一个将用户选择的图片上传到云端
  uploadImage(callback) {
    //先获取到用户选择的图片列表
    const previewImages = this.data.previewImages
    //建立一个空数组用于存储图像的id
    const images = []
//遍历整个图像的地址，将id放在image的列表中
    if (previewImages.length) {
      let imageCount = previewImages.length
      for (let i = 0; i < imageCount; i++) {
        db.uploadImage(previewImages[i]).then(result => {
          images.push(result.fileID)
          if (i === imageCount - 1) {
            callback && callback(images)
          }
        }).catch(err => {
          console.log('err', err)
        })
      }
    } else {
      callback && callback(images)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用共享库中的获取用户信息函数，并分别设置调用成功与失败的行为。
    util.getUserInfo().then(userInfo => {
      this.setData({
        userInfo
      })

      this.setProduct(options)
    }).catch(err => {
      console.log('Not Authenticated yet')
    })
  },
  setProduct(options) {
    let product = {
      productId: options.productId,
      name: options.name,
      price: options.price,
      image: options.image
    }
    this.setData({
      product,
    })
  },
  //event.detail.value.trim() 可以获取输入的信息，而 trim() 代表去除前后的空格
  onInput(event) {
    this.setData({
      reviewContent: event.detail.value.trim()
    })
  },
//添加（把评论添加至数据库）的函数事件,再添加图片也上传到云端中
  addReview(event) {
    let content = this.data.reviewContent
    if (!content) return

    wx.showLoading({
      title: 'Submiting...'
    })

    this.uploadImage(images => {
      db.addReview({
        username: this.data.userInfo.nickName,
        avatar: this.data.userInfo.avatarUrl,
        content,
        productId: this.data.product.productId,
        images,
      }).then(result => {
        wx.hideLoading()

        const data = result.result

        if (data) {
          wx.showToast({
            title: 'Succeed'
          })

          setTimeout(() => {
            wx.navigateBack()
          }, 1500)
        }
      }).catch(err => {
        console.error(err)
        wx.hideLoading()

        wx.showToast({
          icon: 'none',
          title: 'Failed'
        })
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