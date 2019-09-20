// pages/hot/hot.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotconList:
    [
      {
        detailhotconlist:
            [
            {
              brand_style:"Soralens|金粉奶奶灰",
              imageUrl:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/p2.jpg?sign=d2ba4436813551a51e60b604dfc8ab9c&t=1557127424",
            },
            {
              brand_style: "Soralens|鱼子蓝",
              imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/p3.jpg?sign=6a00a2b535f266563ff7abb79560bad5&t=1557127437",
            },
            {
              brand_style: "idol|软桃棕",
              imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/p4.jpg?sign=449f19ee6c511e1f6a419974098db5f7&t=1557127448",
            },
            {
              brand_style: "idol|海洋金灰",
              imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/yy.jpg?sign=6580b4bee5818db11e4856320890fae7&t=1557127458",
            },
            {
              brand_style: "purelens|森林绿",
              imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/p6.jpg?sign=0431ca47c7f6106cd28e5e4d9345da0c&t=1557127471",
            },
        ]
      },
        {
          detailhotconlist:
          [
            {
            brand_style: "ustwo|哥布林绿",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A1.jpg?sign=8aff887601487cdfe8a07450848c5305&t=1557126929",
            },
            {
              brand_style: "ustwo|是蒂姆灰",
              imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A2.jpg?sign=b572706973f88ee8b4d921c07c348320&t=1557126946",
            },
              {
                brand_style: "ustwo|蛋壳棕",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A3.jpg?sign=a702d81c6af502c1449003d6c32f702b&t=1557126961",
              },
              {
                brand_style: "ustwo|小胖蓝",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A4.jpg?sign=09884812bb10192f30bbd534da3c4597&t=1557126973",
              },
             
          ]
        },
        {
          detailhotconlist: 
          [
              {
                brand_style: "recolook|哥布林绿",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A12.jpg?sign=eeee8b1261b58e329607cf7a37c1b326&t=1557126827",
              },
              {
                brand_style: "recolook|是蒂姆灰",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A13.jpg?sign=5bc1ad39a68840a99579fa7164d3bce2&t=1557126680",
              },
              {
                brand_style: "recolook|蛋壳棕",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/pp.jpg?sign=f5cc145386536d5b87cc73f05a404991&t=1557127488",
              },
              {
                brand_style: "recolook|小胖蓝",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A10.jpg?sign=ef0eeff54c21b2c92b7b17198fdefcf6&t=1557126903",
              },
              {
                brand_style: "recolook|小胖蓝",
                imageUrl: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/A11.jpg?sign=3ea42d82edc13cac08035bab6142e35a&t=1557126892",
              }
          ]
        },
 
    ],
    currentindex: 0

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      currentindex: this.data.hotconList.length - 1
    })
  },
  f0:function(event){
    this.setData({
      currentindex: this.data.hotconList.length - 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   *
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--
   * 页面每一次显示的时候，都会调用一次
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   * 每一次页面被隐藏的时候，被调用一次
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
    return {
      title: "每月推荐"
    }
  }
})