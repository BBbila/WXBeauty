
//动画方法:生成动画的实例

let animation = wx.createAnimation({
  duration: 1000,
  timingFunction: '"linear"',
  delay: 0,
  transformOrigin: '"50% 50% 0"',
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrlB: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/reward/rewardBack.png?sign=68a513755846554c7a2edc1024171bc8&t=1559563517",
    imageUrlR: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/reward/rewardpic.png?sign=f62be550a48f8f0518a9bc9619211f4d&t=1559563544",
    imageUrlC: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/reward/reward_click.png?sign=e14661df925be1b3129b68d66abe20e9&t=1559562886",
    imageUrlBack: "https://6669-firstpro2019-83fpf-1259175764.tcb.qcloud.la/image/reward/backback.jpg?sign=da739c90fdd95fdfc63023145ba0d761&t=1559695963",

    rotateData:{},
    turning: false,//在动画转起来的时候不允许点击
  },
  start() {
   let _this = this;
   if (!this.data.turning){
     let rdm = 0;//随机度数
      rdm = Math.floor(Math.random() * 3600);//最大转10圈
      animation.rotate(rdm).step();
     this.setData({
       rotateData: animation.export(),
       turning:true,
     });
     //结果时间周期
     setTimeout(()=>{
       let num = rdm %360;
       function showModal(str) {
         wx.showModal({
           title: '恭喜你🙋 ',
           content: str +"(今天的抽奖机会已用完)",
           showCancel: true,
           cancelText: '我知道了',
           cancelColor: 'pink',
           confirmText: 'Okk',
           confirmColor: 'purple',
           success: function (res) {
             let animation = wx.createAnimation({
               duration: 1000,
               timingFunction: 'linear',
             });
             animation.rotate(0).step();
             _this.setData({
               rotateData: animation.export(),
             });
           },
           fail: function (res) { },
           complete: function (res) { },
         })
       }
       if (num <= 11.1 ||num >=349 && num <=360){
         showModal('二等奖');
       }
       else if(num<=45.5 && num >=11.1){
         showModal('四等奖');
       }
       else if (num <= 100.8 && num >= 45.5) {
         showModal('五等奖');
       }
       else if (num <= 169 && num >= 100.8) {
         showModal('八等奖');
       }
       else if (num <= 191.2 && num >= 169) {
         showModal('一等奖');
       }
       else if (num <= 225.5 && num >= 191.2) {
         showModal('三等奖');
       }
       else if (num <= 280.8 && num >= 225.5) {
         showModal('六等奖');
       }
       else if (num <= 349 && num >= 280.8) {
         showModal('七等奖');
       }
     },
     4000);
   } 
   
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
});

