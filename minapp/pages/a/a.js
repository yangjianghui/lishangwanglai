// pages/a/a.js

Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   array: [{
  //     message: '湿垃圾', text: "有害垃圾是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。", ol: "投放要求:", ul: ["●充电电池、纽扣电池、蓄电池投放时请注意轻放", "●油漆桶、杀虫剂如有残留请密闭后投放", "●荧光灯、节能灯易破损请连带包装或包裹后轻放", "●废药品及其包装连带包装一并投放"]
  //   }, {
  //       message: '干垃圾', text: "有害垃圾是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。", ol: "投放要求:", ul: ["●充电电池、纽扣电池、蓄电池投放时请注意轻放", "●油漆桶、杀虫剂如有残留请密闭后投放", "●荧光灯、节能灯易破损请连带包装或包裹后轻放", "●废药品及其包装连带包装一并投放"]
  //   }, {
  //       message: '可回收物', text: "有害垃圾是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。", ol: "投放要求:", ul: ["●充电电池、纽扣电池、蓄电池投放时请注意轻放", "●油漆桶、杀虫剂如有残留请密闭后投放", "●荧光灯、节能灯易破损请连带包装或包裹后轻放", "●废药品及其包装连带包装一并投放"]
  //   }, {
  //       message: '有害垃圾', text: "有害垃圾是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。", ol: "投放要求:", ul: [ "●充电电池、纽扣电池、蓄电池投放时请注意轻放",  "●油漆桶、杀虫剂如有残留请密闭后投放", "●荧光灯、节能灯易破损请连带包装或包裹后轻放", "●废药品及其包装连带包装一并投放"]
  //   }],
  // },
  data:{
    dataReq:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/category', 
      success(res) {
        console.log(res.data.data)
        that.setData({ 
          data: res.data.data
        })
      }
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