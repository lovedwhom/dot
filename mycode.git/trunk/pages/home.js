/**
 * Created by Administrator on 2017/5/25 0025.
 */

define(function(require, exports, module){

    // alert('1');
    exports.show =function (opt) {
        var template =require('./home.html');
        template = doT.template(template);
        opt.body.html(template(''));
        // $(document.body).append('<div>seaJS的second模块被正常加载。</div>')

        $('#container').on('click','p',function () {
            var _that = this;
            // console.log(111)
            // console.log(this.id);
            // try{
            //     window.location.herf = 'index.html#page=' + _that.id;
            // }catch(e){
            //     console.log(e);
            // }

            window.location.href='index.html#page=test1'
        })
    }
});