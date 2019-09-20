// pages/new/new.js

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    url:"/pages/test/test",
      TodayNewCon:{
        name:"heartcon",
        comment: "年抛| 高级硅水离子 \n直径：14.0mm | 含水量: 38%\nURLENS新品plume流羽系列上市\n花纹像羽毛一样美丽精致超有辨识度\n11.9极小染色无黑圈设计完美改变瞳色 \n5月出游季活动，热销款硅水凝胶",
        imageUrl: ["https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/con1.jpg?sign=744251a99478b5407687d47db3a0e8dd&t=1557127542",  ],
        imagestore:"https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/all/%E7%AE%AD%E5%A4%B4.png?sign=f0c26fafe02c87179472c4eb1b3e9c93&t=1557129800",
        ifstar: true
      },
      detailsList:[
        {
          brand: "heartcon",
          style: "布蕾灰",
          imagePath: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/pp.jpg?sign=d6bd6de8b777d8123a8bc7b6a003d87b&t=1557127729",
          ifmiscegenation: true,
          
        },
        {
          brand: "heartcon",
          style: "金灿绿二代",
          imagePath: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/B/b1.jpg?sign=8734d5bd24ee974c992675c7ba1383df&t=1557127608",
          ifmiscegenation: true,
        },
        {
          brand: "heartcon",
          style: "银墨",
          imagePath: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/ii.jpg?sign=fa218fcb66cf429e2a3d885fd5dc0c56&t=1557127685",
          ifmiscegenation: true,
        },
        {
          brand: "heartcon",
          style: "梨花巧",
          imagePath: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/oo.jpg?sign=d7faa88ccc6ea4679dce2221170fa088&t=1557127709",
          ifmiscegenation: false,
        },
        {
          brand: "heartcon",
          style: "珍珠橙",
          imagePath: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/P/ll.jpg?sign=fa9ac6a20c4333d7cf1fe5adec550497&t=1557127719",
          ifmiscegenation: false,
        },
      ]  
  },

  click_swiper:function(e){
    var url =e.currentTarget.dataset.url
   
        wx:wx.navigateTo({
          url: "/pages/test/test",
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
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

  },
  
  previewimage:function(e){
    var index = e.currentTarget.dataset.index;
    var imageUrl = this.data.TodayNewCon.imageUrl;
    wx:wx.previewImage({
      current: imageUrl[index] ,
      urls:imageUrl,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})