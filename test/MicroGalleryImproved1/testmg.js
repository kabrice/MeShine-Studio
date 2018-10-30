(function($) {
    $.fn.microgallery = function(options) {
        let  opts = $.extend({}, $.fn.microgallery.defaults, options);
        return this.each(function() {
            let  $this = $(this);
            let  o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            let  current		=1;
            let  mode		=o.mode;
            let  incfactor 	= 9;
            let  _cnt 		= 0;
            let  _all 		= $this.find('img').length;
            let  autoplayTime;
            let  playing 	= false;
            //console.log('img', $this.find('img'));
            $this.find('img').each(function(){
                let  theImage = new Image();
                $(theImage).on('load', function(){
                    //console.log("load");
                    ++_cnt;
                    if(_cnt ===_all){
                        $.fn.build($this,o,mode,current,incfactor);
                        if(o.autoplay && o.cycle){
                            //let  f_slide 	= function(){$('.next',$this).click()}
                            let  f_slide 	= function(){$this.find('.next').click()}
                            playing			= true;
                            autoplayTime 	= setInterval(f_slide,o.autoplayTime);
                        }
                    }
                }).attr('src',$(this).attr('src'));
            });
            /*  handlers */
            $this.next().click(function(){
                console.log("de");
                if(!$(this).hasClass('disabled')){
                    if(mode ==='single'){
                        //$current 	= $('.images div:nth-child('+current+')',$this);
                        $current 	= $this.find('.images div:nth-child('+current+')');
                        $next 		= $current.next();
                        let  descText= '';
                        if($next.length){
                            //descText 	= $('img',$next).attr('alt');
                            descText 	= $next.find('img').attr('alt');
                            $current.hide();
                            $next.css('display','table-cell');
                            ++current;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                        else if(o.cycle){
                            //$next 		= $('.images div:nth-child(1)',$this);
                            $next 		= $this.find('.images div:nth-child(1)');
                            //descText 	= $('img',$next).attr('alt');
                            descText 	= $next.find('img').attr('alt');
                            $current.hide();
                            $next.css('display','table-cell');
                            current=1;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }

                        $this.find('.description').stop().animate({'bottom':'0px'},50,function(){
                            if(descText!=='') $(this).find('div').html(descText).parent().animate({'bottom':'-40px'},200);
                        });
                    }
                    else{
                        //$lastinset		= $('.images div:visible:last',$this);
                        $lastinset		= $this.find('.images div:visible:last');
                        let  idxLast 	= $lastinset.index();

                        //let  $testnext 	= $('.images div:nth-child('+parseInt(idxLast+1+1)+')',$this);
                        let  $testnext 	= $this.find('.images div:nth-child('+parseInt(idxLast+1+1)+')');
                        if($testnext.length)
                        //$('.images div',$this)
                            $this.find('.images div').hide().slice(parseInt(idxLast+1),parseInt(idxLast+incfactor+1)).css('display','table-cell');
                        else
                            $this.find('.images div').hide().slice(0,incfactor).css('display','table-cell');

                        //$lastinsetnew	= $('.images div:visible:last',$this);
                        $lastinsetnew	= $this.find('.images div:visible:last');
                        let  idxLastnew 	= $lastinsetnew.index();
                        //$firstinset		= $('.images div:visible:first',$this);
                        $firstinset			= $this.find('.images div:visible:first');
                        let  idxFirst 	= $firstinset.index();
                        if(!o.cycle) $.fn.checkLimits4Thumbs($this,idxFirst+1,idxLastnew+1);
                    }
                }
            });
            $this.prev().click(function(){
                if(!$(this).hasClass('disabled')){
                    if(mode ==='single'){
                        //$current 	= $('.images div:nth-child('+current+')',$this);
                        $current 	= $this.find('.images div:nth-child('+current+')');
                        $prev 		= $current.prev();
                        let  descText= '';
                        if($prev.length){
                            //descText 	= $('img',$prev).attr('alt');
                            descText 	= $prev.find('img').attr('alt');
                            $current.hide();
                            $prev.css('display','table-cell');
                            --current;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                        else if(o.cycle){
                            //$('.images div',$this)
                            let  cnt_childs = $this.find('.images div').children().length;
                            //$prev 		= $('.images div:nth-child('+cnt_childs+')',$this);
                            $prev 		= $this.find('.images div:nth-child('+cnt_childs+')');
                            descText 	= $prev.find('img').attr('alt');
                            //descText 	= $('img',$prev).attr('alt');
                            $current.hide();
                            $prev.css('display','table-cell');
                            current=cnt_childs;
                            if(!o.cycle) $.fn.checkLimits($this,current);
                        }
                        //$('.description',$this)
                        $this.find('.description').stop().animate({'bottom':'0px'},50,function(){
                            if(descText!=='') $(this).find('div').html(descText).parent().animate({'bottom':'-40px'},200);
                        });
                    }
                    else{
                        //$firstinset			= $('.images div:visible:first',$this);
                        $firstinset			= $this.find('.images div:visible:first');
                        let  idxFirst 		= $firstinset.index();
                        //$('.images div',$this)
                        let  cnt_childs 		= $this.find('.images div').children().length;
                        let  cnt_lastset		= cnt_childs%incfactor;
                        if(idxFirst ===0)
                        //$('.images div',$this)
                            $this.find('.images div').hide().slice(parseInt(cnt_childs-cnt_lastset),parseInt(cnt_childs)).css('display','table-cell');
                        else
                            $this.find('.images div').hide().slice(parseInt(idxFirst-incfactor),parseInt(idxFirst)).css('display','table-cell');

                        //$lastinset			= $('.images div:visible:last',$this);
                        $lastinset			= $this.find('.images div:visible:last');
                        let  idxLast 		= $lastinset.index();
                        //$firstinsetnew		= $('.images div:visible:first',$this);
                        $firstinsetnew		= $this.find('.images div:visible:first');
                        let  idxFirstnew 	= $firstinsetnew.index();
                        if(!o.cycle) $.fn.checkLimits4Thumbs($this,idxFirstnew+1,idxLast+1);
                    }
                }
            });
            $('.images div',$this).click(function(){
                //only if in thumb mode
                if(mode ==='thumbs'){
                    /* get the index of the clickable image */
                    let  $theImage 	= $(this).find('img');
                    let  idx 		= $(this).index();

                    current = idx+1;

                    let  descText 	= $(this).find('img').attr('alt');
                    //$('.description',$this)
                    $this.find('.description').stop().animate({'bottom':'0px'},50,function(){
                        if(descText!=='') $(this).find('div').html(descText).parent().animate({'bottom':'-40px'},200);
                    });

                    $.fn.toggleMode($this,mode,current,o);
                    mode='single';
                    if(!o.cycle) $.fn.checkLimits($this,current);
                    //$('.thumbview',$this)
                    $this.find('.thumbview').removeClass('single').addClass('grid');
                }
            });
            $this.find('.thumbview').click(function(){
                (mode ==='single')?$(this).removeClass('grid').addClass('single'):$(this).removeClass('single').addClass('grid');
                $.fn.toggleMode($this,mode,current,o,incfactor);
                (mode ==='single')?mode='thumbs':mode='single';

                if (mode ==='single'){
                    if(!o.cycle)
                        $.fn.checkLimits($this,current);
                    //$current 	= $('.images div:nth-child('+current+')',$this);
                    $current 	= $this.find('.images div:nth-child('+current+')');
                    let  descText 	= $current.find('img').attr('alt');
                    $this.find('.description').stop().animate({'bottom':'0px'},50,function(){
                        if(descText!=='') $(this).find('div').html(descText).parent().animate({'bottom':'-40px'},200);
                    });
                }
                else{
                    $this.find('.description').stop().animate({'bottom':'0px'},50);
                    //$lastinset		= $('.images div:visible:last',$this);
                    $lastinset		= $this.find('.images div:visible:last');
                    let  idxLast 	= $lastinset.index();
                    $firstinset		= $this.find('.images div:visible:first');
                    let  idxFirst	= $firstinset.index();
                    if(!o.cycle) $.fn.checkLimits4Thumbs($this,idxFirst+1,idxLast+1);
                }
            });
            //$('.slideshow',$this)
            $this.find('.slideshow').click(function(){
                if(playing){
                    $(this).removeClass('pause').addClass('play');
                    clearInterval(autoplayTime);
                    playing			= false;
                }
                else{
                    $(this).removeClass('play').addClass('pause');
                    //$('.next',$this)
                    $this.find('.next').click();
                    let  f_slide 	= function(){$this.find('.next').click()}
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
        switch(o.size){
            case 'small'	:
                $this.addClass('smallGallery');
                break;
            case 'medium'	:
                console.log("switch medium");
                $this.addClass('mediumGallery');
                break;
            case 'large'	:
                $this.addClass('largeGallery');
                break;
            default			:
                $this.addClass('smallGallery');
                break;
        }

        let  $images = $('<div/>',{
            class	:	'images singleImg'
        });

        $this.find('div').each(function(){
            //console.log("Hi");
            let  $theImage = $(this).find('img');
            $.fn.resize($theImage,'thumbs',o);
            $images.append($(this));
        });

        $images.find('div:first').css('display','table-cell');

        let  prevClass = 'disabled';
        if(o.cycle)
            prevClass = '';
        let  autoplayHTML  = '';
        if(o.autoplay && o.cycle){
            autoplayClass = 'pause';
            autoplayHTML  = '<a class="slideshow '+autoplayClass+'"></a>';
        }
        let  $nav = $('<div/>',{
            class	:	'nav',
            html		:	'<a class="thumbview grid"></a>'+autoplayHTML+'<button class="next"></button><button class="prev '+prevClass+'"></button>'
        });
        console.log("nav", $nav.html());
        if(!o.menu){
            $nav.css('top','0px');
            $this.hover(
                function(){
                    $nav.stop().animate({'top':'-30px'},500);
                },
                function(){
                    $nav.stop().animate({'top':'0px'},500);
                }
            );
        }
        let  descFirst 	 = $images.find('div:first > img').attr('alt');
        let  descHTML	 = '<div class="">'+descFirst+'</div>';
        let  $description = $('<div/>',{
            class	:	'description',
            html		:	descHTML
        });
        console.log("description", $this);
        $this.append($nav).append($description).append($images);
        if(descFirst!=='' && mode==='single')
            $description.stop().animate({'bottom':'-40px'},200);



        if(mode==='thumbs'){
            console.log('$this', $this.find("nav").length);
            //$('.thumbview',$this)
            $this.find('.thumbview').removeClass('grid').addClass('single');
            $.fn.toggleMode($this,'single',current,o,incfactor);
            if(!o.cycle) $.fn.checkLimits($this,current)
        }
    };
    $.fn.toggleMode 		= function($mg,mode,current,o,incfactor){
        let  $images = $('.images',$mg);
        console.log('$images', $mg.html());
        //let $images = $mg.find('.images');
        let test = $("#mG2").find('div');
        //console.log("test", $('.images',$mg));
        console.log('$images', $images.length);

        if(mode ==='single'){
            console.log('$mg', $mg);
            $images.find('.img').each(function(){
                console.log("dz");
                let  $theImage = $(this);
                $.fn.resize($theImage,mode,o);
            });
            $('div',$images).hide();
            let  set = Math.floor((current-1)/incfactor)+1;
            let  pos = set*incfactor;
            $images.removeClass('singleImg').addClass('thumbs').find('div').slice(pos-incfactor,pos).css('display','table-cell');
        }
        else{
            $('img',$images).each(function(){
                let  $theImage = $(this);
                $.fn.resize($theImage,mode,o);
            });
            $images.removeClass('thumbs').addClass('singleImg').find('div').hide();
            $images.find('div:nth-child('+current+')').css('display','table-cell');
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
        let  maxW = 0;
        let  maxH = 0;
        if(mode ==='single'){
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
        let  theImage = new Image();
        theImage.src = $img.attr('src');
        let  imgwidth = theImage.width;
        let  imgheight = theImage.height;

        if(imgwidth > maxW){
            let  newwidth = maxW;
            let  ratio = maxW / imgwidth;
            let  newheight = imgheight * ratio;
            if(newheight > maxH){
                let  newnewheight = maxH;
                let  newratio = maxH/newheight;
                let  newnewwidth =maxW * newratio;
                $img.attr('width',newnewwidth);
                $img.attr('height',newnewheight);
            }
            else{
                $img.attr('width',newwidth);
                $img.attr('height',newheight);
            }
        }
        else if(imgheight > maxH){
            let  newheight = maxH;
            let  ratio = maxH / imgheight;
            let  newwidth = imgwidth * ratio;
            if(newwidth > maxW){
                let  newnewwidth = maxW;
                let  newratio = maxW/newwidth;
                let  newnewheight =maxH*newratio;
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
