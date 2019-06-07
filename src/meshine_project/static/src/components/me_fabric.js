import React, {Component} from 'react'
import {fabric} from 'fabric';
import {connect} from 'react-redux';
import {microgallery} from '../../external/MicroGalleryImproved/jquery.microgallery'
import {createSummaryPlayerFile} from "../actions/index";
import { Utils } from '../helpers';
//import {fileSaver} from 'file-saver';

class MeFabric extends Component{

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        /*************
         * CANVAS INITIALISATION
         ****************/
        this.copiedObject= null;
        this.copiedObjects = [];

        fabric.StaticCanvas.prototype.getObjectById  = function(id) {
            if(!id || typeof id === 'undefined'){
                return [];
            }
            return this._objects.filter(function(o) {
                return o.id === id;
            });
        };

        //console.log('card-container', $('#card-container').width());
        this.canvas = new fabric.Canvas('meCanvas', {
            preserveObjectStacking: true,
            /*            height: 812,
                        width: 375,*/
            height: 1024,
            width: $('#card-container').width(),
            //backgroundColor: '#1F1F1F'
        });
        let boundingRect = new fabric.Rect({
            width: $('#card-container').width(),
            height: 1024,
            opacity: '0.6',
            fill: '#1F1F1F',
            lockMovementX: true,
            lockMovementY: true,
            lockRotation: true,
            lockScalingFlip: true,
            lockScalingX: true,
            lockScalingY: true,
            hasControls: false,
            hasRotatingPoint: false,
            selectable: false,
            id: 'boundingRect'
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
        let rect;
        rect = new fabric.Rect({
            fill: 'gray',
            width: 375,
            height: 812,
            evented: false,
            selectable: false,
            id: 'drawingRect'
        });
        this.rect=rect;
        this.initAligningGuidelines(this.canvas);
        this.canvas.zoomToPoint(new fabric.Point(this.canvas.width / 2, this.canvas.height / 2), 1);
        this.canvas.add(boundingRect);
        this.canvas.add(this.rect);
        this.canvas.centerObject(this.rect); let test="dd";
        let data = null;
        let state = null;
        this.readTextFile("/assets/data-text3.json", (text) =>{
            data = JSON.parse(text);
            /*if(data.version)
                this.data = data;*/

            if(data.version){
                this.canvas.loadFromJSON(data, ()=>{state=JSON.stringify(this.canvas)});
            }else{
                //console.log('HHHH', data );
                this.canvas.add(this.rect);
                this.canvas.centerObject(this.rect);
                state=this.canvas;
            }
        });
        /**
         * To Copy and Paste object(s)
         */
        $(document).keydown((e) => {
            this.onKeyDownHandler(e);
        });
  /*      this.canvas.on({
            'object:moving': (options) => {
                console.log('onChange', this.rect);
                //options.target.setCoords();
                this.canvas.forEachObject((obj) => {
                    if (obj === options.target) return;
                    options.target.set('opacity' ,options.target.intersectsWithObject(this.rect) ? 0.5 : 1);
                });
            },
            'object:scaling': this.onChange(rect),
            'object:rotating': this.onChange(rect),
        });*/
        /**
         * To delete object(s)
         */
        let isEditingText = false;
        this.canvas.on('text:changed', function(e){
            isEditingText = true;
        });
        $('html').keyup((e) => {
            if((e.keyCode === 46 || e.keyCode === 8 ) && !isEditingText) {
                this.deleteSelectedObjectsFromCanvas();
            }
            isEditingText = false;
        });
        /**
         * Undo / Redo
         */
        // current unsaved state
        //let state = null,
        let    canvas = this.canvas;
        // past states
        let undo = [];
        // reverted states
        let redo = [];

        this.canvas.on('object:modified', function() {
            //console.log('object:state', state);
            ({canvas, redo, state} = Utils.saveCanvas(canvas, state, undo));
        });

        this.canvas = canvas;
        $(document).keydown(function(e) {
            if(e.shiftKey && e.which === 90 && e.metaKey){ // redo
                //console.log('redo state', redo.length, undo.length);
                state = Utils.replay(redo, undo, state, canvas);
            }else if( e.which === 90 && e.metaKey){ // undo
                //console.log('undo state', redo.length, undo.length);
                state = Utils.replay(undo, redo, state, canvas);
            }
        });

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
            //$('#colorFont').trigger();
            let $this = $(e.currentTarget);
            console.log("colorfont", $this.val());
            this.setTextParam($this.data('type'), $this.val());
        });
        $('#colorBg').change((e) => {
            let obj = this.canvas.getActiveObject();
            //console.log('obj', obj);
            let $this = $(e.currentTarget);
            if(!obj.selectionStart && !obj.selectionEnd){
                obj.selectionStart = 0;
                obj.selectionEnd = (obj.text).length;
            }
            obj.setSelectionStyles({textBackgroundColor:$this.val()});
            //obj.textBackgroundColor =$this.val();
            this.canvas.renderAll();
        });
        $('#colorStroke').on('change',  (e) => {
            let obj = this.canvas.getActiveObject();
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
                    obj.on({
                        'scaling': function(e) {
                            let obj = this,
                                w = obj.width * obj.scaleX,
                                h = obj.height * obj.scaleY;

                            obj.set({
                                'height'     : h,
                                'width'      : w,
                                'scaleX'     : 1,
                                'scaleY'     : 1
                            });
                        }
                    });
                    /*if (!obj.strokeWidthUnscaled && obj.strokeWidth) {
                        obj.strokeWidthUnscaled = obj.strokeWidth;
                    }

                    console.log('rect', obj.strokeWidthUnscaled);*/
                    obj.set({stroke:$this.val(), strokeWidth: thickness});
            }
            obj.stroke = $this.val();
            this.canvas.requestRenderAll();
        });

        $('#colorShadow').on('change',  (e) => {
            let obj = this.canvas.getActiveObject();
            //console.log("HI");
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $this.val(), $('#shadowBlur').val(),
                $('#shadowOffsetX').val(),
                $('#shadowOffsetY').val());
        });
        $('#shadowOffsetX').on('change',  (e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $('#colorShadow').val(), $('#shadowBlur').val(),
                $this.val(),
                $('#shadowOffsetY').val());
        });
        $('#shadowOffsetY').on('change',  (e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $('#colorShadow').val(), $('#shadowBlur').val(),
                $('#shadowOffsetX').val(),
                $this.val());
        });
        $('#shadowBlur').on('change',  (e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            this.shadowManagement(obj,
                $('#colorShadow').val(), $this.val(),
                $('#shadowOffsetX').val(),
                $('#shadowOffsetY').val());
        });
        $('.colorFont').click((e)=>{
            console.log('colorfont class');
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
            let obj = this.canvas.getActiveObject();

            if(isChecked){
                $('#colorShadow').trigger('change');
            }else{
                this.shadowManagement(obj,0, 0, 0);
            }

        });

        /** -- FillsIsChecked on color **/
        $('#fillsIsChecked').click((e)=>{
            let isChecked = $(e.currentTarget).is( ":checked" );
            let obj = this.canvas.getActiveObject();
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
                        this.canvas.renderAll();
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
            let obj = this.canvas.getActiveObject();
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
                this.canvas.renderAll();
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
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('left', groupWidth / 2-obj.getBoundingRect().width/2+parseInt($this.val()));
            obj.setCoords();
            this.canvas.renderAll();
        });
        $('#y-axis').change((e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            let pseudoX = (this.canvas.getHeight()-rect.getScaledHeight()+obj.getBoundingRect().height/2)/2;
            obj.set('top', pseudoX+parseInt($this.val()));
            obj.setCoords();
            this.canvas.renderAll();
        });
        $("#obj-width").change((e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('width', $this.val());
            this.canvas.renderAll();
        });
        $("#obj-height").change((e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('height', $this.val());
            this.canvas.renderAll();
        });
        $("#flipx").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.renderAll();
        });
        $("#flipy").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.renderAll();
        });
        $("#textBold").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.renderAll();
        });
        $("#textItalic").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.renderAll();
        });
        $("#textUnderline").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.renderAll();
        });
        $("#textStrike").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.renderAll();
        });
        $("#lineHeight").change((e) => {
            let obj = this.canvas.getActiveObject();
            let $this = $(e.currentTarget);
            obj.set('lineHeight', $this.val());
            this.canvas.renderAll();
        });
        $(document).on("click", ".dropdown-item", (e) =>{
            let $this = $(e.currentTarget);
            let obj = this.canvas.getActiveObject();
            //console.log("obj", obj.text);
            //obj.text = 'dslds';
            let text= obj.text;
            let dataValue = $this.data('value');
            switch (dataValue){
                case '1stLetter':
                    console.log("1stLetter");
                    obj.text = this.capitalizeSentences(text, true);
                    this.canvas.renderAll();
                    break;
                case 'lowercase':
                    obj.text = text.toLowerCase();
                    this.canvas.renderAll();
                    break;
                case 'uppercase':
                    obj.text = text.toUpperCase();
                    this.canvas.renderAll();
                    break;
                case '1stLetters':
                    obj.text = this.titleCase(text);
                    this.canvas.renderAll();
                    break;
                case 'reverse':
                    obj.text = this.reverseCase(text);
                    this.canvas.renderAll();
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
            let obj = this.canvas.getActiveObject();
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
            this.canvas.requestRenderAll();
        });
        $("#subscript").click((e) => {
            let obj = this.canvas.getActiveObject();
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
            this.canvas.requestRenderAll();
        });

        this.groupOnSelection(this.canvas);

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
            let obj = this.canvas.getActiveObject();
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
            this.canvas.requestRenderAll();
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
            let obj = this.canvas.getActiveObject();
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

        $('#publish').click((e)=>{
            //this.canvas.contextContainer.strokeStyle = 'black';
            /* let obj = this.canvas.getActiveObject();
             obj.clone((clonedObj) =>{
                 this.tempCanvas = new fabric.Canvas('tempCanvas', {
                     preserveObjectStacking: true,
                     height: 400,
                     width: 400
                 });
                 this.tempCanvas.add(clonedObj);
                 this.tempCanvas.height = clonedObj.getBoundingRect().height;
                 this.tempCanvas.width = clonedObj.getBoundingRect().width;
                 clonedObj && clonedObj.center().setCoords();
                 console.log(this.tempCanvas.toSVG());
             })*/
            let json = JSON.stringify( this.canvas.toJSON(['id']) );
            console.log(json);
        });

        this.canvas.on('after:render', () => {

            let ao = this.canvas.getActiveObject();
            if (ao) {
                this.canvas.contextContainer.strokeStyle = '#555';
                //console.log(bound);
                let bound = ao.getBoundingRect();
                //console.log("bound", bound);
                this.canvas.contextContainer.strokeRect(
                    bound.left,
                    bound.top,
                    bound.width,
                    bound.height
                );
                //console.log(bound);

            }
        });

        $('#me-tool').click((e)=>{
            let group = [];
            let url = '/assets/triangle.svg';
            fabric.loadSVGFromURL(url,(objects,options)=> {

                let loadedObjects = fabric.util.groupSVGElements(objects, options);

                /*loadedObjects.set({
                    width: 200,
                    height: 200
                });*/
                objects.top=0;
                objects.left=0;

                objects.forEach((o)=>{
                    o.globalCompositeOperation='source-atop';
                })
                console.log('loadSVGFromURL', objects, options);
                this.canvas.add(loadedObjects);
                this.canvas.renderAll();

            });
        });

        /*************
         * PLAYER
         ****************/
        this.play = $('#fullscreen-player').detach();
        $('#play').click(() => {
            //Todo: Fullscreen player
            /*this.play.appendTo('body');
            let elem = document.getElementById("fullscreen-player");
            let scaleRate = screen.height/2000;
            $('#play-container').css('transform', 'scale('+scaleRate+')');

            elem.removeAttribute("hidden");
            let req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
            req.call(elem);*/

             //let obj = this.canvas.getActiveObject();

            let svgVersionObjects = [];
            this.canvas.getObjects().forEach((o) => {
                let svg = this.objectToSVG(o);
                if(svg){
                    svg = svg.substring(155);
                }
                if(o.id !== 'boundingRect'){

                    svgVersionObjects.push({
                                            'id': o.id,
                                            'svg': svg,
                                            'isText': false,
                                            'isStatic': false,
                                            //'animationFam': 'animejs', // common
                                            'jsonPath': './assets/data1.json',
                                            //'animType': 1,
                                            'animation': {'css': 'common', 'html': 'common', 'js':'animejs_popup'},
                                            'data' : "{'id': '\'+o.id+'\', 'loop': "+false+", 'duration': "+1000+"}",
                                            'duration': 1,
                                            'speed': 2.12, //Only for Lottie
                                            'loop': false,
                                            'animEntry': 3,
                                            'zIndex': 4,
                                            '_boundingRect': o.getBoundingRect(),
                                            'object': o.toJSON(['id'])
                                            });
                }
                o._boundingRect = o.getBoundingRect();
            });
            let json = JSON.stringify( this.canvas.toJSON(['id', '_boundingRect']) );
            console.log("json", json);
            //Todo: Odering svgVersionObjects based on animEntry
            //console.log('svgVersionObjects', svgVersionObjects);
            this.props.createSummaryPlayerFile({project_content: json,
                                                svgs:svgVersionObjects}, 1,
                (response) =>{
                    console.log("GOOD", response);
                }, (error) => {

                    console.log('error', error);
                });
        });
    }

    /*************
     * FUNCTIONS
     ****************/

    /** Start: Create and paste objects **/

    onKeyDownHandler(event) {
        //event.preventDefault();

        let key;
        if(window.event){
            key = window.event.keyCode;
        }
        else{
            key = event.keyCode;
        }

        switch(key){
            //////////////
            // Shortcuts
            //////////////
            // Copy (Ctrl+C)
            case 67: // Ctrl+C
                if(this.ableToShortcut()){
                    //console.log("deddxxx "+event.metaKey);
                    if(event.ctrlKey || event.metaKey){
                        event.preventDefault();
                        this.copy();
                    }
                }
                break;
            // Paste (Ctrl+V)
            case 86: // Ctrl+V
                if(this.ableToShortcut()){
                    if(event.ctrlKey || event.metaKey){
                        event.preventDefault();
                        this.paste();
                    }
                }
                break;
            default:
                // TODO
                break;
        }
    }

    ableToShortcut(){
        return true;
    }

    copy(){
        if(this.canvas.getActiveObject()){
            let toBeCopied = this.canvas.getActiveObject();
            let copiedObject = {};
            toBeCopied.clone(function(clonedObj) {
                clonedObj.set("top", clonedObj.top+5);
                clonedObj.set("left", clonedObj.left+5);
                clonedObj.set("id", toBeCopied.id+'c');
                copiedObject = clonedObj;
            });
            this.copiedObject = copiedObject;
            this.copiedObjects = [];
        }
    }

    paste(){
        if(this.copiedObjects.length > 0){
            for(let i in this.copiedObjects){
                //console.log('copiedObjects', i);
                this.canvas.add(this.copiedObjects[i]);
            }
        }
        else if(this.copiedObject){
            this.canvas.add(this.copiedObject);
        }
        this.canvas.renderAll();
    }

    /** End : Create and paste objects **/
    deleteSelectedObjectsFromCanvas(){
        this.canvas.getActiveObjects().forEach((obj) => {
            this.canvas.remove(obj)
        });
        this.canvas.discardActiveObject().renderAll()
    }

    //Temporal function
    readTextFile(file, callback) {

        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = () => {

            if (rawFile.readyState === 4 && rawFile.status === 200) {
                //console.log("HOHO", rawFile.readyState, rawFile.status);
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    objectToSVG(o){
        this.tempCanvas = null;
        //console.log("o", o);
        o.clone((clonedObj) =>{
            this.tempCanvas = new   fabric.Canvas('tempCanvas', {
                preserveObjectStacking: true,
                height: 400,
                width: 400
            });
            this.tempCanvas.add(clonedObj);
            this.tempCanvas.height = clonedObj.getBoundingRect().height;
            this.tempCanvas.width = clonedObj.getBoundingRect().width;
            clonedObj && clonedObj.center().setCoords();

        });
        if(!this.tempCanvas) return null;
        return this.tempCanvas.toSVG();
    }

    applyFilter(index, filter) {
        let obj = this.canvas.getActiveObject();
        obj.filters[index] = filter;
        obj.applyFilters();
        this.canvas.requestRenderAll();
    }

    applyFilterValue(index, prop, value) {
        let obj = this.canvas.getActiveObject();
        if (obj.filters[index]) {
            obj.filters[index][prop] = value;
            obj.applyFilters();
            this.canvas.requestRenderAll();
        }
    }

    shadowManagement(obj, c, b, x, y){
        if(!obj) return;
        obj.setShadow({color: c, blur: b, offsetX: x, offsetY: y});
        this.canvas.requestRenderAll();
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
        //let A = document.getElementById('input').value;
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
            globalCompositeOperation: 'source-atop',
            id: 'text'+newID,
            lockScalingFlip: true,
            lockScalingX: true,
            lockScalingY: true,
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
        this.canvas.add(text1);*/
        this.canvas.add(text);
        this.__addedTextSpace = this.__addedTextSpace+10;

        //this.canvas.centerObject(text);
    }

    addRectangle() {
        let newID = (new Date()).getTime().toString().substr(5);

        let rect = new fabric.Rect({
            fill: 'red',
            width: 48,
            height: 32,
            left: this.cardWidth/2+this.__addedTextSpace,
            top: this.cardHeight+this.__addedTextSpace,
            originX: 'center',
            originY: 'center',
            fontWeight: 'normal',
            globalCompositeOperation: 'source-atop',
            id: 'rect'+newID
            //shadow: '#000000 5px 5px 5px'
        });
        this.canvas.add(rect);
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
                globalCompositeOperation: 'source-atop',
                id: 'img'+newID});
            this.canvas.add(oImg);
            this.__addedTextSpace = this.__addedTextSpace+10;
        });
    }

    setTextParam(param, value) {
        let obj = this.canvas.getActiveObject();
        let objectType = obj.get('type');
        //if(!obj) return;
        //let f = fabric.Image.filters;
        if (obj || obj.text) {
            if(!obj.selectionStart && !obj.selectionEnd && objectType !== 'rect'){
                obj.selectionStart = 0;
                obj.selectionEnd = (obj.text).length;
            }
            if (param === 'color') {
                console.log('rect', objectType);
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
            this.canvas.renderAll();
        }
    }


    selectedColor(dom){
        //let test = dom.parent().parent().parent().parent().find('.row').find('img');
        dom.parent().parent().parent().find('.row').find('img').css('background-color', '');
        //console.log('test', test.html());
        dom.find('img').css('background-color', '#ddd');
    }

    groupOnSelection(canvas){
        this.canvas.on("selection:updated", function(e) {
            let activeObj = e.target;
            //console.log('e.target.type', e.target);
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

        this.canvas.on("selection:cleared", function(e) {
            $('#horizontal-align-left').off('click');
            $('#horizontal-align-center').off('click');
            $('#horizontal-align-right').off('click');
        });
    }

    saveToCanvas = () => {

        let link = document.createElement('a');
        // Object to images
        link.href = this.canvas.getActiveObject().toDataURL({format: 'png'});
        // for canvas to images
        //  link.href = this.canvas.toDataURL({format: 'png'});
        link.download = 'avatar.png';
        link.click();

    };
    onChange = (rect) => {
        console.log('onChange', rect);
        //options.target.setCoords();
        this.canvas.forEachObject(function(obj) {
            if (obj === rect) return;
            obj.set('opacity' ,rect.intersectsWithObject(obj) ? 0.5 : 1);
        });
    }
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

export default connect(null, {createSummaryPlayerFile})(MeFabric);
