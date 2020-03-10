App({
  
  onLaunch(options) {
    console.log('onlaunch')
    console.log(options);
  },
  onShow(options) {
    // 切前台/或者刚运行
    console.log('onShow');
    console.log(options);
  },
  onHide() {
    console.log('onHide');
  },
  onError(err) {
    console.log(err)
  },
  onPageNotFound() {

  },
  globalData: {
    msg: 'hello'
  },
  abc: {

  },
  
});