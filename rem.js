// 设置 rem 函数
function setRem() {
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  // 得到html的Dom元素
  const htmlDom = document.getElementsByTagName('html')[0];
  // 设置根元素字体大小
  // if (htmlWidth < 800) {
  //   htmlWidth = 800
  // }
  // htmlDom.style.fontSize = htmlWidth / 120 + 'px';
  if (htmlWidth < 1200) {
    htmlWidth = 1200
    // document.documentElement
  } else if (htmlWidth > 1450) {
    htmlWidth = 1450
  }
  htmlDom.style.fontSize = htmlWidth / 84 + 'px'
  return htmlWidth / 84
}

export default setRem

// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }
