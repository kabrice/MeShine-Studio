$.ui.plugin.add("draggable", "smartguides", {
    start: function(event, ui) {
        var i = $(this).data("draggable"), o = i.options;
        i.elements = [];
        $(o.smartguides.constructor != String ? ( o.smartguides.items || ':data(draggable)' ) : o.smartguides).each(function() {
            var $t = $(this); var $o = $t.offset();
            if(this != i.element[0]) i.elements.push({
                item: this,
                width: $t.outerWidth(), height: $t.outerHeight(),
                top: $o.top, left: $o.left
            });
        });
    },
    stop: function(event, ui) {
        $(".objectx").css({"display":"none"});
        $(".objecty").css({"display":"none"});
    },
    drag: function(event, ui) {
        var inst = $(this).data("draggable"), o = inst.options;
        var d = o.tolerance;
        $(".objectx").css({"display":"none"});
        $(".objecty").css({"display":"none"});
        var x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
            y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height,
            xc = (x1 + x2) / 2, yc = (y1 + y2) / 2;
        for (var i = inst.elements.length - 1; i >= 0; i--){
            var l = inst.elements[i].left, r = l + inst.elements[i].width,
                t = inst.elements[i].top, b = t + inst.elements[i].height,
                hc = (l + r) / 2, vc = (t + b) / 2;
            var ls = Math.abs(l - x2) <= d;
            var rs = Math.abs(r - x1) <= d;
            var ts = Math.abs(t - y2) <= d;
            var bs = Math.abs(b - y1) <= d;
            var hs = Math.abs(hc - xc) <= d;
            var vs = Math.abs(vc - yc) <= d;
            if(ls) {
                ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
                $(".objectx").css({"left":l-d-4,"display":"block"});
            }
            if(rs) {
                ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
                $(".objectx").css({"left":r-d-4,"display":"block"});
            }

            if(ts) {
                ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
                $(".objecty").css({"top":t-d-4,"display":"block"});
            }
            if(bs) {
                ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
                $(".objecty").css({"top":b-d-4,"display":"block"});
            }
            if(hs) {
                ui.position.left = inst._convertPositionTo("relative", { top: 0, left: hc - inst.helperProportions.width/2 }).left - inst.margins.left;
                $(".objectx").css({"left":hc-d-4,"display":"block"});
            }
            if(vs) {
                ui.position.top = inst._convertPositionTo("relative", { top: vc - inst.helperProportions.height/2, left: 0 }).top - inst.margins.top;
                $(".objecty").css({"top":vc-d-4,"display":"block"});
            }


        };
    }
});
$('.other-objects').draggable({
    containment: 'parent',
    smartguides:".other-objects",
    tolerance:5
});