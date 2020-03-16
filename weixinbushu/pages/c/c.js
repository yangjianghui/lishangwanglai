// // pages/c/c.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })
// const app = getApp();

var index = {
  data: {
    last_index: 0,//上一回滚动的位置
    amplification_index: 0,//轮盘的当前滚动位置
    roll_flag: true,//是否允许滚动
    max_number: 8,//轮盘的全部数量
    speed: 300,//速度，速度值越大，则越慢 初始化为300
    finalindex: 5,//最终的奖励距离当前的位置！不是最后的几等奖！
    myInterval: "",//定时器
    max_speed: 40,//滚盘的最大速度
    minturns: 8,//最小的圈数为2
    runs_now: 0,
    prizeInfo: [
      {
        name: '恭喜思乡人获得',
        prize: '200运动币'
      },
      {
        name: '恭喜思乡人获得',
        prize: '200运动币'
      },
      {
        name: '恭喜思乡人获得',
        prize: '200运动币'
      },
    ],
    transformDeg: 0,
    transition: 'all 3s cubic-bezier(0.005, 1.340, 1.000, 0.865)',
    time: '999s'
  },
  startrolling: function () {
    let _this = this;
    _this.data.runs_now = 0;
    if (_this.data.roll_flag) {
      _this.data.roll_flag = false;
      _this.rolling();
    }
  },
  onShow: function () {
    this.data.min_height = getApp().globalData.windowheight;
    this.setData(this.data);
  },
  rolling: function (amplification_index) {
    var _this = this;
    this.data.myInterval = setTimeout(function () { _this.rolling(); }, this.data.speed);
    this.data.runs_now++;
    this.data.amplification_index++;
    var count_num = this.data.minturns * this.data.max_number + this.data.finalindex - this.data.last_index;
    if (this.data.runs_now <= (count_num / 3) * 2) {
      this.data.speed -= 30;
      if (this.data.speed <= this.data.max_speed) {
        this.data.speed = this.data.max_speed;
      }
    }
    else if (this.data.runs_now >= count_num) {
      clearInterval(this.data.myInterval);
      this.data.roll_flag = true;
    }
    else if (count_num - this.data.runs_now <= 10) {
      this.data.speed += 20;
    }
    else {
      this.data.speed += 10;
      if (this.data.speed >= 100) {
        this.data.speed = 100;
      }
    }
    if (this.data.amplification_index > this.data.max_number) {
      this.data.amplification_index = 1;
    }
    this.setData(this.data);

  },
  onLoad(opt) {
    console.log(opt)

  },
  loadCoupons() { // 加载获奖信息

  },
}
Page(index);
