(function($) {
    $.fn.microgallery = function(options) {
        let opts = $.extend({}, $.fn.microgallery.defaults, options);
        return this.each(function() {
            let $this = $(this);
            let o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            let current		=1;
            let mode		=o.mode;
            let incfactor 	= 9;
            let _cnt 		= 0;
            let _all 		= $this.find('img').length;
            let autoplayTime;
            let playing 	= false;
            $this.find('img').each(function(){
            	//console.log("each");
                let theImage = new Image();
                $(theImage).on('load', function(){
                    //console.log("load");
                    ++_cnt;
                    if(_cnt === _all){
                        $.fn.build($this,o,mode,current,incfactor);
                        if(o.autoplay && o.cycle){
                            let f_slide 	= function(){$('.next',$this).click(function (e) {
                                
                            })}
                            playing			= true;
                            autoplayTime 	= setInterval(f_slide,o.autoplayTime);
                        }
                    }
                }).attr('src',$(this).attr('src'));
            });
            $(document).on('click', '.next', function(e){ 
                
                if(!$(this).hasClass('disabled')){
                    if(mode === 'single'){
                        $current 	= $('.images div:nth-child('+current+')',$this);
                        $next 		= $current.next();

                        let descText= '';
                        if($next.length){
                            descText 	= $('img',$next).attr('alt');
                            $current.hide();
                            $next.css('display','table-cell').addClass('imgg');
                            ++current;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                        else if(o.cycle){
                            $next 		= $('.images div:nth-child(1)',$this);
                            descText 	= $('img',$next).attr('alt');
                            $current.hide();
                            $next.css('display','table-cell').addClass('imgg');
                            current=1;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                        /*$('.description',$this).stop().animate({'bottom':'0px'},50,function(){
                            if(descText!=='') $('div',$(this)).html(descText).parent().animate({'bottom':'-40px'},200);
                        });*/
                    }
                    else{
                        $lastinset		= $('.images div:visible:last',$this);
                        let idxLast 	= $lastinset.index();

                        let $testnext 	= $('.images div:nth-child('+parseInt(idxLast+1+1)+')',$this);
                        if($testnext.length) {
                            $('.images div', $this).hide().slice(parseInt(idxLast + 1), parseInt(idxLast + incfactor + 1)).css('display', 'table-cell').addClass('imgg');
                        }else{
                            $('.images div',$this).hide().slice(0,incfactor).css('display','table-cell').addClass('imgg');
						}
                        $lastinsetnew	= $('.images div:visible:last',$this);
                        let idxLastnew 	= $lastinsetnew.index();
                        $firstinset		= $('.images div:visible:first',$this);
                        let idxFirst 	= $firstinset.index();
                        if(!o.cycle) $.fn.checkLimits4Thumbs($this,idxFirst+1,idxLastnew+1);
                    }
                }
            });
            $(document).on('click', '.prev', function(e){
                
                if(!$(this).hasClass('disabled')){
                    if(mode === 'single'){
                        $current 	= $('.images div:nth-child('+current+')',$this);
                        $prev 		= $current.prev();
                        let descText= '';
                        if($prev.length){
                            descText 	= $('img',$prev).attr('alt');
                            $current.hide();
                            $prev.css('display','table-cell').addClass('imgg');
                            --current;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                        else if(o.cycle){
                            let cnt_childs = $('.images div',$this).children().length;
                            $prev 		= $('.images div:nth-child('+cnt_childs+')',$this);
                            descText 	= $('img',$prev).attr('alt');
                            $current.hide();
                            $prev.css('display','table-cell').addClass('imgg');
                            current=cnt_childs;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                       /* $('.description',$this).stop().animate({'bottom':'0px'},50,function(){
                            if(descText!=='') $('div',$(this)).html(descText).parent().animate({'bottom':'-40px'},200);
                        });*/
                    }
                    else{
                        $firstinset			= $('.images div:visible:first',$this);
                        let idxFirst 		= $firstinset.index();
                        let cnt_childs 		= $('.images div',$this).children().length;
                        let cnt_lastset		= cnt_childs%incfactor;
                        if(idxFirst === 0)
                            $('.images div',$this).hide().slice(parseInt(cnt_childs-cnt_lastset),parseInt(cnt_childs)).css('display','table-cell').addClass('imgg');
                        else
                            $('.images div',$this).hide().slice(parseInt(idxFirst-incfactor),parseInt(idxFirst)).css('display','table-cell').addClass('imgg');

                        $lastinset			= $('.images div:visible:last',$this);
                        let idxLast 		= $lastinset.index();
                        $firstinsetnew		= $('.images div:visible:first',$this);
                        let idxFirstnew 	= $firstinsetnew.index();
                        if(!o.cycle) $.fn.checkLimits4Thumbs($this,idxFirstnew+1,idxLast+1);
                    }
                }
            });
/*			$(document).on('click', '.images div', function(e){
                e.stopPropagation();
                //only if in thumb mode
                if(mode === 'thumbs'){
                    /!* get the index of the clickable image *!/
                    let $theImage 	= $('img',$(this));
                    let idx 		= $(this).index();
                    current = idx+1;
                    let descText 	= $('img',$(this)).attr('alt');
                   /!* $('.description',$this).stop().animate({'bottom':'0px'},50,function(){
                        if(descText!=='') $('div',$(this)).html(descText).parent().animate({'bottom':'-40px'},200);
                    });*!/

                    $.fn.toggleMode($this,mode,current,o);
                    mode='single';
                    if(!o.cycle) $.fn.checkLimits($this,current);
                    $('.thumbview',$this).removeClass('single').addClass('grid');
                }

            });*/
            $(document).on('click', '.thumbview', function(e){
                
                (mode === 'single')?$(this).removeClass('grid').addClass('single'):$(this).removeClass('single').addClass('grid');
                $.fn.toggleMode($this,mode,current,o,incfactor);
                (mode === 'single')?mode='thumbs':mode='single';

                if (mode === 'single'){
                    if(!o.cycle)
                        $.fn.checkLimits($this,current);

                    $current 	= $('.images div:nth-child('+current+')',$this);
                    let descText 	= $('img',$current).attr('alt');
                    /*$('.description',$this).stop().animate({'bottom':'0px'},50,function(){
                        if(descText!=='') $('div',$(this)).html(descText).parent().animate({'bottom':'-40px'},200);
                    });*/
                }
                else{
                    //$('.description',$this).stop().animate({'bottom':'0px'},50);
                    $lastinset		= $('.images div:visible:last',$this);
                    let idxLast 	= $lastinset.index();
                    $firstinset		= $('.images div:visible:first',$this);
                    let idxFirst	= $firstinset.index();
                    if(!o.cycle) $.fn.checkLimits4Thumbs($this,idxFirst+1,idxLast+1);
                }
            });
            $(document).on('click', '.thumbview', function(e){
                
                if(playing){
                    $(this).removeClass('pause').addClass('play');
                    clearInterval(autoplayTime);
                    playing			= false;
                }
                else{
                    $(this).removeClass('play').addClass('pause');
                    $('.next',$this).click(function (e) {
                        
                    });
                    let f_slide 	= function(){$('.next',$this).click(function (e) {
						
                    })}
                    autoplayTime 	= setInterval(f_slide,o.autoplayTime);
                    playing			= true;
                }
            });
        });
    };

    $.fn.microgallery.defaults = {
        size		: 'small',	/*small,medium,large*/
        menu		: true,
        mode    	: 'single',
        cycle	: false,
        autoplay	: false,
        autoplayTime: 3000
    };
    $.fn.microgallery.sizes = {
        smallW		: 102,
        smallH		: 102,
        smallThumbW	: 30,
        smallThumbH	: 30,
        mediumW		: 162,
        mediumH		: 162,
        mediumThumbW: 50,
        mediumThumbH: 50,
        largeW		: 222,
        largeH		: 222,
        largeThumbW	: 70,
        largeThumbH	: 70
    };
    $.fn.build 				= function($this,o,mode,current,incfactor){
        $this.find('img').wrap('<div style="display:none"/>').show();
        //console.log('o.size', o.size);
        switch(o.size){
            case 'small'	:
                $this.addClass('smallGallery');
                break;
            case 'medium'	:
                $this.addClass('mediumGallery');
                break;
            case 'large'	:
                $this.addClass('largeGallery');
                break;
            default			:
                $this.addClass('smallGallery');
                break;
        }

        let $images = $('<div/>',{
            class	:	'images singleImg'
        });

        $this.find('div').each(function(){

            let $theImage = $('img',$(this));
            $.fn.resize($theImage,'thumbs',o);
            $images.append($(this));
        });

        $images.find('div:first').css('display','table-cell').addClass('imgg');

        let prevClass = 'disabled';
        if(o.cycle)
            prevClass = '';
        let autoplayHTML  = '';
        if(o.autoplay && o.cycle){

            autoplayClass = 'pause';
            autoplayHTML  = '<a class="slideshow '+autoplayClass+'"></a>';
        }
        let $navg = $('<div/>',{
            class	:	'navg',
            html		:	'<a class="thumbview grid"></a>'+autoplayHTML+'<button class="next"></button><button class="prev '+prevClass+'"></button>'
        });
        if(!o.menu){
            $navg.css('top','-30px');
           /* $this.hover(
                function(){
                    $navg.stop().animate({'top':'-30px'},500);
                },
                function(){
                    $navg.stop().animate({'top':'0px'},500);
                }
            );*/
        }
        let descFirst 	 = $images.find('div:first > img').attr('alt');
        let descHTML	 = '<div class="">'+descFirst+'</div>';
        /*let $description = $('<div/>',{
            class	:	'description',
            html		:	descHTML
        });*/
        //console.log("description", $this);
        $this.append($navg).append($images);
        //console.log("description", $this.html());
        /*if(descFirst!=='' && mode==='single')
            $description.stop().animate({'bottom':'-40px'},200);*/



        if(mode==='thumbs'){
            //console.log('thumbs', $this.length);
            $('.thumbview',$this).removeClass('grid').addClass('single');
            $.fn.toggleMode($this,'single',current,o,incfactor);
            if(!o.cycle) {$.fn.checkLimits($this,current);}
        }
    };
    $.fn.toggleMode 		= function($mg,mode,current,o,incfactor){
        //console.log('$mg', $mg);
        let $images = $('.images',$mg);
        //console.log('$images', $mg.html());
        if(mode === 'single'){
            $('img',$images).each(function(){
                //console.log("dz");
                let $theImage = $(this);
                $.fn.resize($theImage,mode,o);
            });
            $('div',$images).hide();
            let set = Math.floor((current-1)/incfactor)+1;
            let pos = set*incfactor;
            $images.removeClass('singleImg').addClass('thumbs').find('div').slice(pos-incfactor,pos).css('display','table-cell').addClass('imgg');
        }
        else{
            $('img',$images).each(function(){
                let $theImage = $(this);
                $.fn.resize($theImage,mode,o);
            });
            $images.removeClass('thumbs').addClass('singleImg').find('div').hide();
            $images.find('div:nth-child('+current+')').css('display','table-cell').addClass('imgg');
        }
    };
    $.fn.checkLimits 		= function($mg,current){
        $current 	= $('.images div:nth-child('+current+')',$mg);
        $next 		= $current.next();
        $prev 		= $current.prev();
        (!$next.length)?$('.next',$mg).addClass('disabled'):$('.next',$mg).removeClass('disabled');
        (!$prev.length)?$('.prev',$mg).addClass('disabled'):$('.prev',$mg).removeClass('disabled');
    };
    $.fn.checkLimits4Thumbs = function($mg,left,right){
        $right 		= $('.images div:nth-child('+right+')',$mg);
        $left 		= $('.images div:nth-child('+left+')',$mg);
        $next 		= $right.next();
        $prev 		= $left.prev();
        (!$next.length)?$('.next',$mg).addClass('disabled'):$('.next',$mg).removeClass('disabled');
        (!$prev.length)?$('.prev',$mg).addClass('disabled'):$('.prev',$mg).removeClass('disabled');
    };
    $.fn.resize 			= function($img,mode,o){
        let maxW = 0;
        let maxH = 0;
        if(mode === 'single'){
            switch(o.size){
                case 'small'	:
                    maxW = $.fn.microgallery.sizes.smallThumbW;
                    maxH = $.fn.microgallery.sizes.smallThumbH;
                    break;
                case 'medium'	:
                    maxW = $.fn.microgallery.sizes.mediumThumbW;
                    maxH = $.fn.microgallery.sizes.mediumThumbH;
                    break;
                case 'large'	:
                    maxW = $.fn.microgallery.sizes.largeThumbW;
                    maxH = $.fn.microgallery.sizes.largeThumbH;
                    break;
                default			:
                    maxW = $.fn.microgallery.sizes.smallThumbW;
                    maxH = $.fn.microgallery.sizes.smallThumbH;
                    break;
            }
        }
        else{
            switch(o.size){
                case 'small'	:
                    maxW = $.fn.microgallery.sizes.smallW;
                    maxH = $.fn.microgallery.sizes.smallH;
                    break;
                case 'medium'	:
                    maxW = $.fn.microgallery.sizes.mediumW;
                    maxH = $.fn.microgallery.sizes.mediumH;
                    break;
                case 'large'	:
                    maxW = $.fn.microgallery.sizes.largeW;
                    maxH = $.fn.microgallery.sizes.largeH;
                    break;
                default			:
                    maxW = $.fn.microgallery.sizes.smallW;
                    maxH = $.fn.microgallery.sizes.smallH;
                    break;
            }
        }
        let theImage = new Image();
        theImage.src = $img.attr('src');
        let imgwidth = theImage.width;
        let imgheight = theImage.height;

        if(imgwidth > maxW){
            let newwidth = maxW;
            let ratio = maxW / imgwidth;
            let newheight = imgheight * ratio;
            if(newheight > maxH){
                let newnewheight = maxH;
                let newratio = maxH/newheight;
                let newnewwidth =maxW * newratio;
                $img.attr('width',newnewwidth);
                $img.attr('height',newnewheight);
            }
            else{
                $img.attr('width',newwidth);
                $img.attr('height',newheight);
            }
        }
        else if(imgheight > maxH){
            let newheight = maxH;
            let ratio = maxH / imgheight;
            let newwidth = imgwidth * ratio;
            if(newwidth > maxW){
                let newnewwidth = maxW;
                let newratio = maxW/newwidth;
                let newnewheight =maxH*newratio;
                $img.attr('height',newnewheight);
                $img.attr('width',newnewwidth);
            }
            else{
                $img.attr('width',newwidth);
                $img.attr('height',newheight);
            }
        }
        else{
            $img.attr('width',imgwidth);
            $img.attr('height',imgheight);
        }
    };
})(jQuery);