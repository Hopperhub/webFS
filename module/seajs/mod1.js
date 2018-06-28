// 定义模块
/* 
  require 引入其他模块
    - html 引入模块 -> use()
    - 模块引入模块 -> require

  exports 导出
  module 批量导出
*/
define(function (require, exports, module) {
    // module code

    // exports.a = 12;

    // exports.show = function () {
    //     console.log(123);
    // }

    module.exports = {
        b: 1,
        c: 2,
        sum(a, b) {
            console.log(a + b);
        }
    }
});