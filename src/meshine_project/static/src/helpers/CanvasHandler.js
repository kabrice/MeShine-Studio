function dragboxAction(){
    $(document).ready(function () {
        //$('.moveable-control-box').hide()
        $("._5Azx_w").hide()
        $('._7WSEvA').hide()
        //handlerMouse('mouseover', $("._5Azx_w"))
        handlerMouse('click', $("._7WSEvA"))
        function handlerMouse(event, $domTarget) {
            $(".svg-arrg").on(event,
                function (e) {
                    $(".dragbox").show()
                    console.log('mouseenter')
                    let tRef = e.target.getBoundingClientRect()
                    let top0 = tRef.top
                    let left0 = tRef.left
                    let width0 = tRef.width
                    let height0 = tRef.height
                    let cv = document.getElementById('mycanvas').getBoundingClientRect()
                    let cvTop = cv.top
                    let cvTLeft = cv.left
                    let dbHoverTop = (top0 - cvTop)
                    let dbHoverLeft = (left0 - cvTLeft)
                    $domTarget.css({
                        'width': width0 + 'px',
                        'height': height0 + 'px',
                        'transform': ' translate(' + dbHoverLeft + 'px, ' + dbHoverTop + 'px)'
                    })
                    $domTarget.show()
                    if(event==='click'){
                       // $('.moveable-control-box').show()
                    }
                }).on('mouseleave',
                function () {
                    console.log('leave')
                    $("._5Azx_w").hide()
                })
        }
    })
}

export {
    dragboxAction
};