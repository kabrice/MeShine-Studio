var system = require('system');
var page = new WebPage();

var address = system.args[1];
var wait = parseInt(system.args[2]);
var iterations = parseInt(system.args[3]);

page.open(address, function(){
    (function snap(i){
        if(i < iterations){
            window.setTimeout(function(){
                page.render('capture/'+i+'.png');
                snap(++i);
            }, wait);
        }
        else{
            phantom.exit();
        }
    })(0);
});