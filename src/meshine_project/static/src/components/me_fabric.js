import React, {Component} from 'react'
import {fabric} from 'fabric';
import {microgallery} from '../../external/MicroGalleryImproved/jquery.microgallery'

//import {fileSaver} from 'file-saver';

class MeFabric extends Component{


    componentDidMount(){
        /*************
         * CANVAS INITIALISATION
         ****************/

        this.__canvas = new fabric.Canvas('meCanvas', {
            preserveObjectStacking: true,
            /*            height: 812,
                        width: 375,*/
            height: 1024,
            width: $('#card-container').width(),
            backgroundColor: '#1F1F1F'
        });
        fabric.Object.prototype.set({
            cornerStyle: 'circle',
            cornerSize: 8,
            transparentCorners: false,
            rotatingPointOffset: 10
        });
        this.f = fabric.Image.filters;
        this.__addedTextSpace = 0;
        this.cardWidth = $('#card-container').width();
        this.cardHeight = $('#card-container').height();
        //console.log('hey',$('#card-container').width());
        let rect = new fabric.Rect({
            //left: 100,
            //top: 1024/2,
            fill: 'gray',
            width: 375,
            height: 812,
            evented: false,
            selectable: false
        });
        this.initAligningGuidelines(this.__canvas);
        this.__canvas.add(rect);
        this.__canvas.centerObject(rect);

        let groupWidth = rect.getScaledWidth();
        let groupHeight = rect.getScaledHeight();
        let obj = this.__canvas.getActiveObject();

        /*************
         * TEXT EDITOR MANIPULATION
         ****************/
        $('#add-text').click((e) => {
            this.addText();
            this.selectedColor($(e.currentTarget));
            $('.forEditor').hide();
            $('.forText').show();
        });
        $('#font-size').change((e) => {
            let $this = $(e.currentTarget);
            this.setTextParam($this.data('type'), $this.val());
        });
        $('#colorFont').change((e) => {
            let $this = $(e.currentTarget);
            this.setTextParam($this.data('type'), $this.val());
        });
        $('#colorBg').change((e) => {
            let obj = this.__canvas.getActiveObject();
            //console.log('obj', obj);
            let $this = $(e.currentTarget);
            if(!obj.selectionStart && !obj.selectionEnd){
                obj.selectionStart = 0;
                obj.selectionEnd = (obj.text).length;
            }
            obj.setSelectionStyles({textBackgroundColor:$this.val()});
            //obj.textBackgroundColor =$this.val();
            this.__canvas.renderAll();
        });
        $('#colorStroke').on('change',  (e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            let objectType = obj.get('type');
            let thickness = parseFloat($('#thickness').val());
            if(!obj) return;
            console.log('stroke', $this.val());
            switch (objectType){
                case 'i-text':
                    if((!obj.selectionStart && !obj.selectionEnd) || (obj.selectionStart === (obj.text).length)){
                        obj.selectionStart = 0;
                        obj.selectionEnd = (obj.text).length;
                    }
                    obj.setSelectionStyles({strokeWidth: thickness, stroke:$this.val()});
                    obj.strokeWidth = thickness;
                    break;
                case 'rect':
                    if (!obj.strokeWidthUnscaled && obj.strokeWidth) {
                        obj.strokeWidthUnscaled = obj.strokeWidth;
                    }

                    console.log('rect', obj.strokeWidthUnscaled);
                    obj.set({stroke:$this.val(), strokeWidth: thickness});
            }
            obj.stroke = $this.val();
            this.__canvas.requestRenderAll();
        });
        $('#colorShadow').on('change',  (e) => {
            let obj = this.__canvas.getActiveObject();
            //console.log("HI");
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $this.val(), $('#shadowBlur').val(),
                $('#shadowOffsetX').val(),
                $('#shadowOffsetY').val());
        });
        $('#shadowOffsetX').on('change',  (e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $('#colorShadow').val(), $('#shadowBlur').val(),
                $this.val(),
                $('#shadowOffsetY').val());
        });
        $('#shadowOffsetY').on('change',  (e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $('#colorShadow').val(), $('#shadowBlur').val(),
                $('#shadowOffsetX').val(),
                $this.val());
        });
        $('#shadowBlur').on('change',  (e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $('#colorShadow').val(), $this.val(),
                $('#shadowOffsetX').val(),
                $('#shadowOffsetY').val());
        });
        $('.colorFont').click((e)=>{
            $('#colorFont').trigger('change');
        });
        $('.colorBg').click((e)=>{
            $('#colorBg').trigger('change');
        });
        $('.colorStroke').click((e)=>{
            $('#colorStroke').trigger('change');
        });
        $('.color-shadow').click((e)=>{
            $('#colorShadow').trigger('change');
        });
        $('#shadowIsChecked').click((e)=>{

            let isChecked = $(e.currentTarget).is( ":checked" );
            let obj = this.__canvas.getActiveObject();

            if(isChecked){
                $('#colorShadow').trigger('change');
            }else{
                this.shadowManagement(obj,0, 0, 0);
            }

        });

        /** -- FillsIsChecked on color **/
        $('#fillsIsChecked').click((e)=>{
            let isChecked = $(e.currentTarget).is( ":checked" );
            let obj = this.__canvas.getActiveObject();
            if(!obj) return;
            let objectType = obj.get('type');

            if(isChecked){
                $('#colorFont').trigger('change');
            }else{
                switch (objectType){
                    case 'i-text':
                        obj.setSelectionStyles({fill:'white'});
                        obj.opacity = 1;
                        break;
                    case 'rect':
                        obj.set({fill:'red'});
                        obj.opacity = 1;
                        this.__canvas.renderAll();
                        break;

                }

            }

        });
        $('#opacity').on('change',  (e) => {
            $('#colorFont').trigger('change');
        });
        /** -- BordersIsChecked on color **/
        $('#bordersIsChecked').click((e)=>{
            let isChecked = $(e.currentTarget).is( ":checked" );
            let obj = this.__canvas.getActiveObject();
            if(!obj) return;
            let objectType = obj.get('type');

            if(isChecked){
                $('#colorStroke').trigger('change');
            }else{
                console.log("objectType");
                switch (objectType){
                    case 'i-text':
                        console.log("objectType2");
                        obj.setSelectionStyles({strokeWidth: 0});
                        obj.strokeWidth = 0;
                        //obj.stroke = $this.val();
                        break;
                    case 'rect':
                        obj.set({strokeWidth: 0});
                        break;
                }
                this.__canvas.renderAll();
            }

        });
        $('#thickness').on('change',  (e) => {
            $('#colorStroke').trigger('change');
        });
        let isAlign = true;
        let previousAlignValue = '';
        $('.alignment-btn button').click((e) => {
            let $this = $(e.currentTarget);

            if(previousAlignValue !== $this.data('value')){
                $('.alignment-btn button').removeClass("is-clicked");
                isAlign = true;
            }

            if(isAlign){
                $this.addClass("is-clicked");
                this.setTextParam($this.data('type'), $this.data('value'));
                isAlign = false;
            }else{
                this.setTextParam('textAlign', 'left');
                $this.removeClass("is-clicked");
                isAlign = true;
            }
            previousAlignValue = $this.data('value');
            //this.setTextParam($this.data('type'), $this.data('value'));
        });
        $('#x-axis').change((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('left', groupWidth / 2-obj.getBoundingRect().width/2+parseInt($this.val()));
            obj.setCoords();
            this.__canvas.renderAll();
        });
        $('#y-axis').change((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            let pseudoX = (this.__canvas.getHeight()-rect.getScaledHeight()+obj.getBoundingRect().width/2)/2;
            obj.set('top', pseudoX+parseInt($this.val()));
            obj.setCoords();
            this.__canvas.renderAll();
        });
        $("#obj-width").change((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('width', $this.val());
            this.__canvas.renderAll();
        });
        $("#obj-height").change((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('height', $this.val());
            this.__canvas.renderAll();
        });
        $("#flipx").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if (obj.flipX) {
                obj.set('flipX', false);
                $this.removeClass("is-clicked");
            } else {
                obj.set('flipX', true);
                $this.addClass("is-clicked");
            }
            //}
            this.__canvas.renderAll();
        });
        $("#flipy").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if (obj.flipY) {
                obj.set('flipY', false);
                $this.removeClass("is-clicked");
            } else {
                obj.set('flipY', true);
                $this.addClass("is-clicked");
            }
            //}
            this.__canvas.renderAll();
        });
        $("#textBold").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            //console.log("fontWeight", obj.fontWeight);
            if (!obj) return;
            if (obj.fontWeight === 'bold') {
                obj.set('fontWeight', 'normal');
                $this.removeClass("is-clicked");
            } else {
                obj.set('fontWeight', 'bold');
                $this.addClass("is-clicked");
            }
            //}
            this.__canvas.renderAll();
        });
        $("#textItalic").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            //console.log("fontWeight", obj.fontWeight);
            if (!obj) return;
            if (obj.fontStyle === 'italic') {
                obj.set('fontStyle', 'normal');
                $this.removeClass("is-clicked");
            } else {
                obj.set('fontStyle', 'italic');
                $this.addClass("is-clicked");
            }
            //}
            this.__canvas.renderAll();
        });
        $("#textUnderline").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if (obj.underline) {
                obj.set('underline', false);
                $this.removeClass("is-clicked");
            } else {
                obj.set('underline', true);
                $this.addClass("is-clicked");
            }
            //}
            this.__canvas.renderAll();
        });
        $("#textStrike").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if (obj.linethrough) {
                obj.set('linethrough', false);
                $this.removeClass("is-clicked");
            } else {
                obj.set('linethrough', true);
                $this.addClass("is-clicked");
            }
            //}
            this.__canvas.renderAll();
        });
        $("#lineHeight").change((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('lineHeight', $this.val());
            this.__canvas.renderAll();
        });
        $(document).on("click", ".dropdown-item", (e) =>{
            let $this = $(e.currentTarget);
            let obj = this.__canvas.getActiveObject();
            //console.log("obj", obj.text);
            //obj.text = 'dslds';
            let text= obj.text;
            let dataValue = $this.data('value');
            switch (dataValue){
                case '1stLetter':
                    console.log("1stLetter");
                    obj.text = this.capitalizeSentences(text, true);
                    this.__canvas.renderAll();
                    break;
                case 'lowercase':
                    obj.text = text.toLowerCase();
                    this.__canvas.renderAll();
                    break;
                case 'uppercase':
                    obj.text = text.toUpperCase();
                    this.__canvas.renderAll();
                    break;
                case '1stLetters':
                    obj.text = this.titleCase(text);
                    this.__canvas.renderAll();
                    break;
                case 'reverse':
                    obj.text = this.reverseCase(text);
                    this.__canvas.renderAll();
                case 'bend-mode':
                    $('#activeBlendMode').trigger('change');
                    break;
                default:
                    this.setTextParam($this.data('type'), $this.text());
            }

        });
        let isSup = false;
        let isSub = false;
        $("#superscript").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if(!isSup){
                obj.setSuperscript();
                isSup = true;
                $this.addClass("is-clicked");
            }else{
                obj.setSelectionStyles({
                    fontSize: undefined,
                    deltaY: undefined,
                });
                isSup = false;
                $this.removeClass("is-clicked");
            }
            this.__canvas.requestRenderAll();
        });
        $("#subscript").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if(!isSub){
                obj.setSubscript();
                isSub = true;
                $this.addClass("is-clicked");
            }else{
                obj.setSelectionStyles({
                    fontSize: undefined,
                    deltaY: undefined,
                });
                isSub = false;
                $this.removeClass("is-clicked");
            }
            this.__canvas.requestRenderAll();
        });

        this.groupOnSelection(this.__canvas);

        /*************
         * RECTANGLE BACKGROUND MANIPULATION
         ****************/
        $('#add-rectbg').click((e) => {
            this.addRectangle();
            this.selectedColor($(e.currentTarget));
            $('.forEditor').hide();
            $('.forShape').show();
        });

        /*************
         * C - IMAGES MANIPULATION
         ****************/
        this.$microgallery = null;
        $('#image-gallery').click((e) => {
            if(this.$microgallery !== null){
                $('#multimedia').prepend(this.$microgallery);
            }else {
                $("#mG2").microgallery({
                    menu: false,
                    size: 'large',
                    mode: 'thumbs',
                    cycle: false
                });
            }
            this.selectedColor($(e.currentTarget));
        });
        $(document).on('click', '.imgg', (e)=>{
            this.addImage($(e.currentTarget).find('img')[0].src);
        });
        $(document).on("mouseup", (e) =>{
            e.preventDefault();
            //console.log("Hello");
            let container = $(document).find('.images, .thumbs, .navg');
            let container2 = $("#mG2").first('div');
            if (container.html() && container2.has(e.target).length === 0) {
                $('#image-gallery').find('img').css('background-color', '');
                this.$microgallery = $("#mG2").first('div');
                $("#mG2").first('div').remove();
            }
        });

        $("#subscript").click((e) => {
            let obj = this.__canvas.getActiveObject();
            let $this = $(e.currentTarget);
            if (!obj) return;
            if(!isSub){
                obj.setSubscript();
                isSub = true;
                $this.addClass("is-clicked");
            }else{
                obj.setSelectionStyles({
                    fontSize: undefined,
                    deltaY: undefined,
                });
                isSub = false;
                $this.removeClass("is-clicked");
            }
            this.__canvas.requestRenderAll();
        });

        /***
         * C-1 Blending Color
         */
        this.colorBlend = '';
        this.blendAlpha = '';
        $('.colorBlend').click((e)=>{
            $('#colorBlend').trigger('change');
        });
        $('#colorBlend').on('change',  (e) => {
            this.colorBlend = $(e.currentTarget).val();
            console.log("his.colorBlend",this.colorBlend);
            this.applyFilterValue(16, 'color', this.colorBlend);
        });
        $('#blendAlpha').on('change',  (e) => {
            this.blendAlpha = $(e.currentTarget).val();
            console.log("this.blendAlpha",this.blendAlpha);
            this.applyFilterValue(16, 'alpha', this.blendAlpha);
        });
        $('#activeBlendMode').on('change',  (e) => {
            let  activeBlendMode = $(e.currentTarget).val();
            console.log("activeBlendMode",activeBlendMode);
            this.applyFilterValue(16, 'mode', activeBlendMode.toLowerCase());
        });
        $('#blendIsChecked').click((e)=>{

            let isChecked = $(e.currentTarget).is( ":checked" );
            let obj = this.__canvas.getActiveObject();
            if(!obj) return;

            $('#colorBlend').trigger('change');
            $('#blendAlpha').trigger('change');
            console.log('blendIsChecked', $('#activeBlendMode').val(), isChecked, this.colorBlend, this.blendAlpha );
            this.applyFilter(16, isChecked && new this.f.BlendColor({
                color: this.colorBlend,
                mode: ($('#activeBlendMode').val()).toLowerCase(),
                alpha: this.blendAlpha
            }));
        });

        /*************
         * PLAYER
         ****************/
        this.play = $('#fullscreen-player').detach();
        $('#play').click(() => {

            this.play.appendTo('body');
            let elem = document.getElementById("fullscreen-player");
            let scaleRate = screen.height/2000;
            $('#play-container').css('transform', 'scale('+scaleRate+')');

            elem.removeAttribute("hidden");
            //$('#play-container').find('g').attr('font-size', 12);
            let req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
            req.call(elem);
        });
    }

    /*************
     * FUNCTIONS
     ****************/
    applyFilter(index, filter) {
        let obj = this.__canvas.getActiveObject();
        obj.filters[index] = filter;
        obj.applyFilters();
        this.__canvas.requestRenderAll();
    }
    
    applyFilterValue(index, prop, value) {
        let obj = this.__canvas.getActiveObject();
        if (obj.filters[index]) {
            obj.filters[index][prop] = value;
            obj.applyFilters();
            this.__canvas.requestRenderAll();
        }
    }

    shadowManagement(obj, c, b, x, y){
        if(!obj) return;
        obj.setShadow({color: c, blur: b, offsetX: x, offsetY: y});
        this.__canvas.requestRenderAll();
    }
    capitalizeSentences(capText, capLock) {

        if (capLock === 1 || capLock) {
            capText = capText.toLowerCase();
        }

        capText = capText.replace(/.n/g, ".[-<br>-]. ");
        capText = capText.replace(/.sn/g, ". [-<br>-]. ");
        let wordSplit = '. ';

        let wordArray = capText.split(wordSplit);

        let numWords = wordArray.length;

        for (let x = 0; x < numWords; x++) {
            wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0), wordArray[x].charAt(0).toUpperCase());
            if (x === 0) {
                capText = wordArray[x] + ". ";
            } else if (x !== numWords - 1) {
                capText = capText + wordArray[x] + ". ";
            } else if (x === numWords - 1) {
                capText = capText + wordArray[x];
            }
        }
        capText = capText.replace(/[-<br>-].s/g, "n");
        capText = capText.replace(/sis/g, " I ");
        return capText;
    }

    titleCase(str) {
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    reverseCase(text) {
        //var A = document.getElementById('input').value;
        let output = '';
        for (let i = 0, len = text.length; i < len; i++) {
            let character = text[i];
            if (character == character.toLowerCase()) {
                // The character is lowercase
                output = output + character.toUpperCase();
            } else {
                // The character is uppercase
                output = output + character.toLowerCase();
            }
        }
        //document.getElementById("preview").innerText = output;
        return output;
    }

    addText() {

        let newID = (new Date()).getTime().toString().substr(5);
        let text = new fabric.IText('Text', {
            fontFamily: 'Times',
            fontSize: 18,
            fill: 'white',
            left: this.cardWidth/2+this.__addedTextSpace,
            top: this.cardHeight+this.__addedTextSpace,
            originX: 'center',
            originY: 'center',
            fontWeight: 'normal',
            myid: newID,
            objecttype: 'text'
            //shadow: '#000000 5px 5px 5px'
        });
        /*
        Todo : For reflexion
        let text1 = jQuery.extend({}, text);
        text1.top = $cardHeight+text.height+13;
        text1.left= $cardWidth/2+text.width;
        text1.set({
            opacity: 0.2,
            angle: 180,
            flipX: true,
            clipTo: function (ctx) {
                ctx.rect(text1.width / 2 - 10, text1.height / 2 - 10, 100, 100);
            }
        });
        this.__canvas.add(text1);*/
        this.__canvas.add(text);
        this.__addedTextSpace = this.__addedTextSpace+10;
        //this.__canvas.centerObject(text);
    }

    addRectangle() {
        let newID = (new Date()).getTime().toString().substr(5);

        let text = new fabric.Rect({
            fill: 'red',
            width: 48,
            height: 32,
            left: this.cardWidth/2+this.__addedTextSpace,
            top: this.cardHeight+this.__addedTextSpace,
            originX: 'center',
            originY: 'center',
            fontWeight: 'normal',
            myid: newID
            //shadow: '#000000 5px 5px 5px'
        });
        this.__canvas.add(text);
        this.__addedTextSpace = this.__addedTextSpace+10;
    }

    addImage(src){
        let newID = (new Date()).getTime().toString().substr(5);
        console.log(this.cardWidth/2+this.__addedTextSpace);
        fabric.Image.fromURL(src, (img)=> {
            let oImg = img.set({
                left: this.cardWidth/2+this.__addedTextSpace,
                top: this.cardHeight+this.__addedTextSpace,
                originX: 'center',
                originY: 'center',
                myid: newID});
            this.__canvas.add(oImg);
            this.__addedTextSpace = this.__addedTextSpace+10;
        });
    }

    setTextParam(param, value) {
        let obj = this.__canvas.getActiveObject();
        let objectType = obj.get('type');
        //if(!obj) return;
        //let f = fabric.Image.filters;
        if (obj && obj.text) {
            if(!obj.selectionStart && !obj.selectionEnd && objectType !== 'rect'){
                obj.selectionStart = 0;
                obj.selectionEnd = (obj.text).length;
            }
            if (param === 'color') {

                switch (objectType){
                    case 'i-text':
                        obj.setSelectionStyles({fill:value});
                        break;
                    case 'rect':
                        obj.set({fill:value});
                        break;
                }

                obj.opacity = $('#opacity').val();
                /*let  filter = new fabric.Image.filters.BlendColor({
                    color: '#000',
                    mode: 'multiply'
                });
                obj.filters.push(filter);
                obj.applyFilters();*/
            } else {
                obj.set(param, value);
            }
            this.__canvas.renderAll();
        }
    }


    selectedColor(dom){
        //let test = dom.parent().parent().parent().parent().find('.row').find('img');
        dom.parent().parent().parent().find('.row').find('img').css('background-color', '');
        //console.log('test', test.html());
        dom.find('img').css('background-color', '#ddd');
    }

    groupOnSelection(canvas){
        this.__canvas.on("selection:updated", function(e) {
            let activeObj = e.target;
            console.log('e.target.type', e.target);
            if(activeObj.type === "activeSelection") {
                //console.log("Group created");

                let groupWidth = e.target.getScaledWidth();
                let groupHeight = e.target.getScaledHeight();


                e.target.forEachObject((obj) => {
                    let itemWidth = obj.getBoundingRect().width;
                    let itemHeight = obj.getBoundingRect().height;

                    $('#horizontal-align-left').click((e) =>  {
                        obj.set({
                            left: -(groupWidth / 2),
                            originX: 'left'
                        });
                        obj.setCoords();
                        canvas.renderAll();
                    });
                    $('#horizontal-align-center').click((e) => {
                        obj.set({
                            left: (0 - itemWidth/2),
                            originX: 'left'
                        });
                        obj.setCoords();
                        canvas.renderAll();
                    });
                    $('#horizontal-align-right').click((e) => {
                        obj.set({
                            left: (groupWidth/2 - itemWidth/2),
                            originX: 'center'
                        });
                        obj.setCoords();
                        canvas.renderAll();
                    });
                    $('#vertical-align-bottom').click((e) => {
                        obj.set({
                            originY: 'bottom',
                            top: groupHeight / 2
                        });
                        obj.setCoords();
                        canvas.renderAll();
                    });
                    $('#vertical-align-center').click((e) => {
                        obj.set({
                            top: itemHeight/2,
                            originY: 'bottom'
                        });
                        obj.setCoords();
                        canvas.renderAll();
                    });
                    $('#vertical-align-top').click((e) => {
                        obj.set({
                            originY: 'top',
                            top: -groupHeight / 2
                        });
                        obj.setCoords();
                        canvas.renderAll();
                    });
                });

            }
        });

        this.__canvas.on("selection:cleared", function(e) {
            $('#horizontal-align-left').off('click');
            $('#horizontal-align-center').off('click');
            $('#horizontal-align-right').off('click');
        });
    }

    saveToCanvas = () => {

        let link = document.createElement('a');
        // Object to images
        link.href = this.__canvas.getActiveObject().toDataURL({format: 'png'});
        // for canvas to images
        //  link.href = this.__canvas.toDataURL({format: 'png'});
        link.download = 'avatar.png';
        link.click();

    };

    initAligningGuidelines(canvas) {

        let ctx = canvas.getSelectionContext(),
            aligningLineOffset = 5,
            aligningLineMargin = 4,
            aligningLineWidth = 1,
            aligningLineColor = 'gold',
            viewportTransform,
            zoom = 1;

        function drawVerticalLine(coords) {
            drawLine(
                coords.x + 0.5,
                coords.y1 > coords.y2 ? coords.y2 : coords.y1,
                coords.x + 0.5,
                coords.y2 > coords.y1 ? coords.y2 : coords.y1);
        }

        function drawHorizontalLine(coords) {
            drawLine(
                coords.x1 > coords.x2 ? coords.x2 : coords.x1,
                coords.y + 0.5,
                coords.x2 > coords.x1 ? coords.x2 : coords.x1,
                coords.y + 0.5);
        }

        function drawLine(x1, y1, x2, y2) {
            ctx.save();
            ctx.lineWidth = aligningLineWidth;
            ctx.strokeStyle = aligningLineColor;
            ctx.beginPath();
            ctx.moveTo(((x1+viewportTransform[4])*zoom), ((y1+viewportTransform[5])*zoom));
            ctx.lineTo(((x2+viewportTransform[4])*zoom), ((y2+viewportTransform[5])*zoom));
            ctx.stroke();
            ctx.restore();
        }

        function isInRange(value1, value2) {
            value1 = Math.round(value1);
            value2 = Math.round(value2);
            for (let i = value1 - aligningLineMargin, len = value1 + aligningLineMargin; i <= len; i++) {
                if (i === value2) {
                    return true;
                }
            }
            return false;
        }

        let verticalLines = [],
            horizontalLines = [];

        canvas.on('mouse:down', function () {
            viewportTransform = canvas.viewportTransform;
            zoom = canvas.getZoom();
        });

        canvas.on('object:moving', function(e) {

            let activeObject = e.target,
                canvasObjects = canvas.getObjects(),
                activeObjectCenter = activeObject.getCenterPoint(),
                activeObjectLeft = activeObjectCenter.x,
                activeObjectTop = activeObjectCenter.y,
                activeObjectBoundingRect = activeObject.getBoundingRect(),
                activeObjectHeight = activeObjectBoundingRect.height / viewportTransform[3],
                activeObjectWidth = activeObjectBoundingRect.width / viewportTransform[0],
                horizontalInTheRange = false,
                verticalInTheRange = false,
                transform = canvas._currentTransform;

            if (!transform) return;

            // It should be trivial to DRY this up by encapsulating (repeating) creation of x1, x2, y1, and y2 into functions,
            // but we're not doing it here for perf. reasons -- as this a function that's invoked on every mouse move

            for (let i = canvasObjects.length; i--; ) {

                if (canvasObjects[i] === activeObject) continue;

                let objectCenter = canvasObjects[i].getCenterPoint(),
                    objectLeft = objectCenter.x,
                    objectTop = objectCenter.y,
                    objectBoundingRect = canvasObjects[i].getBoundingRect(),
                    objectHeight = objectBoundingRect.height / viewportTransform[3],
                    objectWidth = objectBoundingRect.width / viewportTransform[0];

                // snap by the horizontal center line
                if (isInRange(objectLeft, activeObjectLeft)) {
                    verticalInTheRange = true;
                    verticalLines.push({
                        x: objectLeft,
                        y1: (objectTop < activeObjectTop)
                            ? (objectTop - objectHeight / 2 - aligningLineOffset)
                            : (objectTop + objectHeight / 2 + aligningLineOffset),
                        y2: (activeObjectTop > objectTop)
                            ? (activeObjectTop + activeObjectHeight / 2 + aligningLineOffset)
                            : (activeObjectTop - activeObjectHeight / 2 - aligningLineOffset)
                    });
                    activeObject.setPositionByOrigin(new fabric.Point(objectLeft, activeObjectTop), 'center', 'center');
                }

                // snap by the left edge
                if (isInRange(objectLeft - objectWidth / 2, activeObjectLeft - activeObjectWidth / 2)) {
                    verticalInTheRange = true;
                    verticalLines.push({
                        x: objectLeft - objectWidth / 2,
                        y1: (objectTop < activeObjectTop)
                            ? (objectTop - objectHeight / 2 - aligningLineOffset)
                            : (objectTop + objectHeight / 2 + aligningLineOffset),
                        y2: (activeObjectTop > objectTop)
                            ? (activeObjectTop + activeObjectHeight / 2 + aligningLineOffset)
                            : (activeObjectTop - activeObjectHeight / 2 - aligningLineOffset)
                    });
                    activeObject.setPositionByOrigin(new fabric.Point(objectLeft - objectWidth / 2 + activeObjectWidth / 2, activeObjectTop), 'center', 'center');
                }

                // snap by the right edge
                if (isInRange(objectLeft + objectWidth / 2, activeObjectLeft + activeObjectWidth / 2)) {
                    verticalInTheRange = true;
                    verticalLines.push({
                        x: objectLeft + objectWidth / 2,
                        y1: (objectTop < activeObjectTop)
                            ? (objectTop - objectHeight / 2 - aligningLineOffset)
                            : (objectTop + objectHeight / 2 + aligningLineOffset),
                        y2: (activeObjectTop > objectTop)
                            ? (activeObjectTop + activeObjectHeight / 2 + aligningLineOffset)
                            : (activeObjectTop - activeObjectHeight / 2 - aligningLineOffset)
                    });
                    activeObject.setPositionByOrigin(new fabric.Point(objectLeft + objectWidth / 2 - activeObjectWidth / 2, activeObjectTop), 'center', 'center');
                }

                // snap by the vertical center line
                if (isInRange(objectTop, activeObjectTop)) {
                    horizontalInTheRange = true;
                    horizontalLines.push({
                        y: objectTop,
                        x1: (objectLeft < activeObjectLeft)
                            ? (objectLeft - objectWidth / 2 - aligningLineOffset)
                            : (objectLeft + objectWidth / 2 + aligningLineOffset),
                        x2: (activeObjectLeft > objectLeft)
                            ? (activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset)
                            : (activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset)
                    });
                    activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop), 'center', 'center');
                }

                // snap by the top edge
                if (isInRange(objectTop - objectHeight / 2, activeObjectTop - activeObjectHeight / 2)) {
                    horizontalInTheRange = true;
                    horizontalLines.push({
                        y: objectTop - objectHeight / 2,
                        x1: (objectLeft < activeObjectLeft)
                            ? (objectLeft - objectWidth / 2 - aligningLineOffset)
                            : (objectLeft + objectWidth / 2 + aligningLineOffset),
                        x2: (activeObjectLeft > objectLeft)
                            ? (activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset)
                            : (activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset)
                    });
                    activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop - objectHeight / 2 + activeObjectHeight / 2), 'center', 'center');
                }

                // snap by the bottom edge
                if (isInRange(objectTop + objectHeight / 2, activeObjectTop + activeObjectHeight / 2)) {
                    horizontalInTheRange = true;
                    horizontalLines.push({
                        y: objectTop + objectHeight / 2,
                        x1: (objectLeft < activeObjectLeft)
                            ? (objectLeft - objectWidth / 2 - aligningLineOffset)
                            : (objectLeft + objectWidth / 2 + aligningLineOffset),
                        x2: (activeObjectLeft > objectLeft)
                            ? (activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset)
                            : (activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset)
                    });
                    activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop + objectHeight / 2 - activeObjectHeight / 2), 'center', 'center');
                }
            }

            if (!horizontalInTheRange) {
                horizontalLines.length = 0;
            }

            if (!verticalInTheRange) {
                verticalLines.length = 0;
            }
        });

        canvas.on('before:render', function() {
            canvas.clearContext(canvas.contextTop);
        });

        canvas.on('after:render', function() {
            for (let i = verticalLines.length; i--; ) {
                drawVerticalLine(verticalLines[i]);
            }
            for (let i = horizontalLines.length; i--; ) {
                drawHorizontalLine(horizontalLines[i]);
            }

            verticalLines.length = horizontalLines.length = 0;
        });

        canvas.on('mouse:up', function() {
            verticalLines.length = horizontalLines.length = 0;
            canvas.renderAll();
        });
    }
    render(){
        return <canvas id='meCanvas' ref='meFabric'/>;

    }
}

export default MeFabric;
