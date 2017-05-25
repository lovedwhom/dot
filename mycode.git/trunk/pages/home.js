/**
 * Created by Administrator on 2017/5/25 0025.
 */

define(function(require, exports, module){

    // alert('1');
    exports.show =function (opt) {
        var template =require('./home.html');
        console.log(template);
        template = doT.template(template);
        opt.body.html(template(''));
        // $(document.body).append('<div>seaJS的second模块被正常加载。</div>')
    }
});