import TweenMax from "../../external/TweenMax-local.js"
import Delaunay from "../../external/delaunay-local"
import THREE from "../../external/three-local"
import PIXI from "../../external/pixi-local"
//import imagesLoaded from "../../external/imagesLoaded-local"

function d3effect(millisecond) {
    function displayGrid(n){
        $( "a" ).remove( ".reflection-grid-cell" );
        $('.reflection-container').prepend(`<a class=\'reflection-grid-cell reflection-grid-cell-${n}\' href=\'#\'></a>`);
    }
    //$(".reflection-container").hover(function(){
        let i =0;
        let j = -1;
        let p= -1;
        let q=-1;
        let n = -1;
        let m =-1;
        let z =0;
        //let millSec = 2000;
        if(millisecond!==0){
            let myVar = window.setInterval(function(){
                z++
                //console.log('millSec',z, millisecond/41)
                displayGrid(i++);
                if(i<11)
                    //console.log('i', i);
                if(i===10){
                    i=1000;
                    j = 0;
                }
                if(j>=0){
                    j = j+10;
                    //console.log('j', j);
                    displayGrid(j);
                    if(j===100){
                        j=-1;
                        p=100
                    }
                }
                if(p>=0){
                    displayGrid(p--);
                    //console.log('p', p);
                    if(p===91){
                        p=-1;
                        q=91;
                    }
                }
                if(q>=0){
                    q = q-10;
                    displayGrid(q);
                    //console.log('q', q);
                    if(q===1){
                        q=-1;
                        n = 1;
                    }
                }
                if(n>=0){
                    displayGrid(n++);
                    //console.log('n', n);
                    if(n===5){
                        n=-1;
                        m=5;
                    }
                }
                if(m>=0){
                    m = m+10;
                    displayGrid(m);
                    //console.log('m', m);
                    if(m===45){
                        //console.log('STOP');
                        stopMe();
                    }
                }

            }, millisecond/41);

            function stopMe(){
                clearInterval(myVar);
            }
        }
   // })
}

function splitForTilesAnimations() {
    this.$t = $(".split");
    this.gridX = 6;
    this.gridY = 4;
    this.w = this.$t.find('img').width();
    this.h = this.$t.height();
    this.img = $("img", this.$t).attr("src");
    this.delay = 0.05;
    let img = this.$t.find('img').get(0);
    var ratio = img.naturalWidth/img.naturalHeight
    var width = img.height*ratio
    var height = img.height
    if (width > img.width) {
        width = img.width
        height = img.width/ratio
    }
    /*console.log('natr', width, height);
    console.log('WH', this.$t.width(), this.$t.height());*/
    this.create = function() {
        $("div", this.$t).remove();

        for (let x = 0; x < this.gridX; x++) {
            for (let y = 0; y < this.gridY; y++) {
                var width = this.w / this.gridX * 101 / this.w + "%",
                    height = this.h / this.gridY * 101 / this.h + "%",
                    top = this.h / this.gridY * y * 100 / this.h + "%",
                    left = this.w / this.gridX * x * 100 / this.w + "%",
                    bgPosX = -(this.w / this.gridX * x) + "px",
                    bgPosY = -(this.h / this.gridY * y) + "px";

                $("<div />")
                    .css({
                        top: top,
                        left: left,
                        width: width,
                        height: height,
                        backgroundImage: "url(" + this.img + ")",
                        backgroundPosition: bgPosX + " " + bgPosY,
                        backgroundSize: this.w + "px "+this.h + "px ",

                        transitionDelay: x * this.delay + y * this.delay + "s"
                    })
                    .appendTo(this.$t);
            }
        }
    };

    this.create();

    this.$t
        .hover( function() {
            $(this).removeClass("active");
        })
        .hover();
};

window.onload = function() {
 /*   var split = new Split();
    var gui = (function datgui() {
        var gui = new dat.GUI();
        gui.add(split, "gridX", 1, 20).step(1).onChange(function(newValue) {
            split.create();
        });
        gui.add(split, "gridY", 1, 20).step(1).onChange(function(newValue) {
            split.create();
        });
        gui.add(split, "delay", 0, 0.3).step(0.01).onChange(function(newValue) {
            split.create();
        });
        return gui;
    })();*/
};

function shattering() {

    // triangulation using https://github.com/ironwallaby/delaunay

    const TWO_PI = Math.PI * 2;
    const IMG_WIDTH  = 110;
    const IMG_HEIGHT = 110;
    let images = [],
        imageIndex = 0;

    let image,
        imageWidth = IMG_WIDTH,
        imageHeight = IMG_HEIGHT;

    let vertices = [],
        indices = [],
        fragments = [];

    let container = document.getElementById('shattering');

    let clickPosition = [imageWidth * 0.5, imageHeight * 0.5];

    //window.onload = function() {
        TweenMax.set(container, {perspective:500});
    console.log('TweenMax', TweenMax)
        // images from reddit/r/wallpapers
        let urls = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/crayon.jpg'];
           // let image = "";
            let loaded  = 0;

        images[0] = image = new Image();
        /*image.onload = function() {
            if (++loaded === 1) {
                imagesLoaded();
                for (let i = 1; i < 4; i++) {
                    images[i] = image = new Image();

                    image.src = urls[i];
                }
            }
        };*/
        imagesLoaded();
        image.src = urls[0];
    //};

    function imagesLoaded() {
        placeImage(false);
        triangulate();
        //shatter();
    }

    function placeImage(transitionIn) {
        image = images[imageIndex];

        if (++imageIndex === images.length) imageIndex = 0;

        image.addEventListener('mouseover', imageClickHandler);

        container.appendChild(image);

        /*if (transitionIn !== false) {
            TweenMax.fromTo(image, 0.75, {y:-1000}, {y:0, ease:Back.easeOut});
        }*/
    }

    function imageClickHandler(event) {
        let box = image.getBoundingClientRect(),
            top = box.top,
            left = box.left;

        /*
        To always set the position of the shattering at the center and to not take into account the position of the cursor
        clickPosition[0] = event.clientX - left;
        clickPosition[1] = event.clientY - top;*/

        triangulate();
        shatter();
    }

    function triangulate() {
        let rings = [
                {r:50, c:12},
                {r:150, c:12},
                {r:300, c:12},
                {r:1200, c:12} // very large in case of corner clicks
            ],
            x,
            y,
            centerX = clickPosition[0],
            centerY = clickPosition[1];

        vertices.push([centerX, centerY]);

        rings.forEach(function(ring) {
            let radius = ring.r,
                count = ring.c,
                variance = radius * 0.25;

            for (let i = 0; i < count; i++) {
                x = Math.cos((i / count) * TWO_PI) * radius + centerX + randomRange(-variance, variance);
                y = Math.sin((i / count) * TWO_PI) * radius + centerY + randomRange(-variance, variance);
                vertices.push([x, y]);
            }
        });

        vertices.forEach(function(v) {
            v[0] = clamp(v[0], 0, imageWidth);
            v[1] = clamp(v[1], 0, imageHeight);
        });
        console.log('>>>>><<<<< delaunay')
        indices = Delaunay.triangulate(vertices);
    }

    function shatter() {
        let p0, p1, p2,
            fragment;

        let tl0 = new TimelineMax({onComplete:shatterCompleteHandler});

        for (let i = 0; i < indices.length; i += 3) {
            p0 = vertices[indices[i + 0]];
            p1 = vertices[indices[i + 1]];
            p2 = vertices[indices[i + 2]];

            fragment = new Fragment(p0, p1, p2);

            let dx = fragment.centroid[0] - clickPosition[0],
                dy = fragment.centroid[1] - clickPosition[1],
                d = Math.sqrt(dx * dx + dy * dy),
                rx = 30 * sign(dy),
                ry = 90 * -sign(dx),
                delay = d * 0.003 * randomRange(0.9, 1.1);
            fragment.canvas.style.zIndex = Math.floor(d).toString();

            let tl1 = new TimelineMax();


            tl1.to(fragment.canvas, 1, {
                z:-500,
                rotationX:rx,
                rotationY:ry,
                ease:Cubic.easeIn
            });
            tl1.to(fragment.canvas, 0.4,{alpha:0}, 0.6);

            tl0.insert(tl1, delay);

            fragments.push(fragment);
            //console.log('fragment.canvas ', fragment)
            container.appendChild(fragment.canvas);
        }

        container.removeChild(image);
        image.removeEventListener('mouseover', imageClickHandler);
    }

    function shatterCompleteHandler() {
        // add pooling?
        fragments.forEach(function(f) {
            container.removeChild(f.canvas);
        });
        fragments.length = 0;
        vertices.length = 0;
        indices.length = 0;

        placeImage();
    }

    //////////////
    // MATH UTILS
    //////////////

    function randomRange(min, max) {
        return min + (max - min) * Math.random();
    }

    function clamp(x, min, max) {
        return x < min ? min : (x > max ? max : x);
    }

    function sign(x) {
        return x < 0 ? -1 : 1;
    }

    //////////////
    // FRAGMENT
    //////////////

    let Fragment = function(v0, v1, v2) {
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
        /*console.log('----->>')
        console.log(v0, v1, v2);
        console.log('<<-----')*/
        this.computeBoundingBox();
        this.computeCentroid();
        this.createCanvas();
        this.clip();
    };
    Fragment.prototype = {
        computeBoundingBox:function() {
            let xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]),
                xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]),
                yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]),
                yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

            this.box ={
                x:xMin,
                y:yMin,
                w:xMax - xMin,
                h:yMax - yMin
            };
        },
        computeCentroid:function() {
            let x = (this.v0[0] + this.v1[0] + this.v2[0]) / 3,
                y = (this.v0[1] + this.v1[1] + this.v2[1]) / 3;

            this.centroid = [x, y];
        },
        createCanvas:function() {
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.box.w;
            this.canvas.height = this.box.h;
            this.canvas.style.width = this.box.w + 'px';
            this.canvas.style.height = this.box.h + 'px';
            this.canvas.style.left = this.box.x + 'px';
            this.canvas.style.top = this.box.y + 'px';
            this.ctx = this.canvas.getContext('2d');
        },
        clip:function() {
            this.ctx.translate(-this.box.x, -this.box.y);
            this.ctx.beginPath();
            this.ctx.moveTo(this.v0[0], this.v0[1]);
            this.ctx.lineTo(this.v1[0], this.v1[1]);
            this.ctx.lineTo(this.v2[0], this.v2[1]);
            this.ctx.closePath();
            this.ctx.clip();
            this.ctx.drawImage(image, 0, 0, IMG_WIDTH, IMG_HEIGHT);
        }
    };
}

function dustAnimation(){
    let isEntrance =false, isExit=false, isEmphasis = false, isInit = true, numberOfCalls = 0
    window.onload = function (){
        /*$(`#dust-entrance`).trigger('click');
        $(`#dust-exit`).trigger('click');
        $(`#dust-emphasis`).trigger('click');*/
        // isInit = false;

    };

    //console.ward = function() {}; // what warnings?
    //console.log('HHHHH')
    /*$("#dust-entrance").mouseleave(function () {
        console.log('dust-entrance mouseleave')
        numberOfCalls =0
        /!*$(`#dust-entrance`).trigger('click');
        $(`#dust-exit`).trigger('click');
        $(`#dust-emphasis`).trigger('click');*!/
    })*/
    $("#dust-entrance").click(function () {
        isEntrance = true;
        isExit = false;
        isEmphasis = false;
        //isInit = false;
        $("#three-entrance").find('canvas').remove();
        numberOfCalls++
        init(true)
        console.log('dust-entrance', numberOfCalls)
    })
    $("#dust-exit").click(function () {
        isEntrance = false;
        isExit = true;
        isEmphasis = false;
       // isInit = false;
        $("#three-exit").find('canvas').remove();
        numberOfCalls++
        init(true)
        console.log('dust-exit', numberOfCalls)
    })
    $("#dust-emphasis").click(function () {
        isEntrance = false;
        isExit = false;
        isEmphasis = true;
       // isInit = false;
        $("#three-emphasis").find('canvas').remove();
        numberOfCalls++
        init(true)
        console.log('dust-emphasis', numberOfCalls)
    })

    function init(animateIt) {
        var root = new THREERoot({
            createCameraControls: !true,
            antialias: (window.devicePixelRatio === 1),
            fov: 80
        });

        root.renderer.setClearColor(0x000000, 0);
        root.renderer.setPixelRatio(window.devicePixelRatio || 1);
        root.camera.position.set(0, 0, 60);

        var width = 100;
        var height = 60;

        var slide = new Slide(width, height, 'out');
        var l1 = new THREE.ImageLoader();
        l1.setCrossOrigin('Anonymous');
        l1.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/winter.jpg', function(img) {
            slide.setImage(img);
        })

        if(isExit || isEmphasis)
            root.scene.add(slide);

        //let typeForImg2 = isInit ? 'in' : 'in'
        var slide2 = new Slide(width, height, 'in');
        var l2 = new THREE.ImageLoader();
        l2.setCrossOrigin('Anonymous');
        l2.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/spring.jpg', function(img) {
            slide2.setImage(img);
        })

        if(isEntrance || isEmphasis )
            root.scene.add(slide2);

        if(animateIt){
            let repeat = 0;
            if(isEmphasis){
                repeat = 1
            }
            var tl = new TimelineMax({repeat:repeat, repeatDelay:1.0, yoyo: true});

            tl.add(slide.transition(), 0);
            tl.add(slide2.transition(), 0);

            createTweenScrubber(tl);
        }
    }

    ////////////////////
    // CLASSES
    ////////////////////

    function Slide(width, height, animationPhase) {
        var plane = new THREE.PlaneGeometry(width, height, width * 2, height * 2);

        THREE.BAS.Utils.separateFaces(plane);

        var geometry = new SlideGeometry(plane);

        geometry.bufferUVs();

        var aAnimation = geometry.createAttribute('aAnimation', 2);
        var aStartPosition = geometry.createAttribute('aStartPosition', 3);
        var aControl0 = geometry.createAttribute('aControl0', 3);
        var aControl1 = geometry.createAttribute('aControl1', 3);
        var aEndPosition = geometry.createAttribute('aEndPosition', 3);

        var i, i2, i3, i4, v;

        var minDuration = 0.8;
        var maxDuration = 1.2;
        var maxDelayX = 0.9;
        var maxDelayY = 0.125;
        var stretch = 0.11;

        this.totalDuration = maxDuration + maxDelayX + maxDelayY + stretch;

        var startPosition = new THREE.Vector3();
        var control0 = new THREE.Vector3();
        var control1 = new THREE.Vector3();
        var endPosition = new THREE.Vector3();

        var tempPoint = new THREE.Vector3();

        function getControlPoint0(centroid) {
            var signY = Math.sign(centroid.y);

            tempPoint.x = THREE.Math.randFloat(0.1, 0.3) * 50;
            tempPoint.y = signY * THREE.Math.randFloat(0.1, 0.3) * 70;
            tempPoint.z = THREE.Math.randFloatSpread(20);

            return tempPoint;
        }

        function getControlPoint1(centroid) {
            var signY = Math.sign(centroid.y);

            tempPoint.x = THREE.Math.randFloat(0.3, 0.6) * 50;
            tempPoint.y = -signY * THREE.Math.randFloat(0.3, 0.6) * 70;
            tempPoint.z = THREE.Math.randFloatSpread(20);

            return tempPoint;
        }

        for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < geometry.faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
            var face = plane.faces[i];
            var centroid = THREE.BAS.Utils.computeCentroid(plane, face);

            // animation
            var duration = THREE.Math.randFloat(minDuration, maxDuration);
            var delayX = THREE.Math.mapLinear(centroid.x, -width * 0.5, width * 0.5, 0.0, maxDelayX);
            var delayY;

            if (animationPhase === 'in') {
                delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, 0.0, maxDelayY)
            }
            else {
                delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, maxDelayY, 0.0)
            }

            for (v = 0; v < 6; v += 2) {
                aAnimation.array[i2 + v]     = delayX + delayY + (Math.random() * stretch * duration);
                aAnimation.array[i2 + v + 1] = duration;
            }

            // positions

            endPosition.copy(centroid);
            startPosition.copy(centroid);

            if (animationPhase === 'in') {
                control0.copy(centroid).sub(getControlPoint0(centroid));
                control1.copy(centroid).sub(getControlPoint1(centroid));
            }
            else { // out
                control0.copy(centroid).add(getControlPoint0(centroid));
                control1.copy(centroid).add(getControlPoint1(centroid));
            }

            for (v = 0; v < 9; v += 3) {
                aStartPosition.array[i3 + v]     = startPosition.x;
                aStartPosition.array[i3 + v + 1] = startPosition.y;
                aStartPosition.array[i3 + v + 2] = startPosition.z;

                aControl0.array[i3 + v]     = control0.x;
                aControl0.array[i3 + v + 1] = control0.y;
                aControl0.array[i3 + v + 2] = control0.z;

                aControl1.array[i3 + v]     = control1.x;
                aControl1.array[i3 + v + 1] = control1.y;
                aControl1.array[i3 + v + 2] = control1.z;

                aEndPosition.array[i3 + v]     = endPosition.x;
                aEndPosition.array[i3 + v + 1] = endPosition.y;
                aEndPosition.array[i3 + v + 2] = endPosition.z;
            }
        }

        var material = new THREE.BAS.BasicAnimationMaterial(
            {
                shading: THREE.FlatShading,
                side: THREE.DoubleSide,
                uniforms: {
                    uTime: {type: 'f', value: 0}
                },
                shaderFunctions: [
                    THREE.BAS.ShaderChunk['cubic_bezier'],
                    //THREE.BAS.ShaderChunk[(animationPhase === 'in' ? 'ease_out_cubic' : 'ease_in_cubic')],
                    THREE.BAS.ShaderChunk['ease_in_out_cubic'],
                    THREE.BAS.ShaderChunk['quaternion_rotation']
                ],
                shaderParameters: [
                    'uniform float uTime;',
                    'attribute vec2 aAnimation;',
                    'attribute vec3 aStartPosition;',
                    'attribute vec3 aControl0;',
                    'attribute vec3 aControl1;',
                    'attribute vec3 aEndPosition;',
                ],
                shaderVertexInit: [
                    'float tDelay = aAnimation.x;',
                    'float tDuration = aAnimation.y;',
                    'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
                    'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
                    //'float tProgress = tTime / tDuration;'
                ],
                shaderTransformPosition: [
                    (animationPhase === 'in' ? 'transformed *= tProgress;' : 'transformed *= 1.0 - tProgress;'),
                    'transformed += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);'
                ]
            },
            {
                map: new THREE.Texture(),
            }
        );

        THREE.Mesh.call(this, geometry, material);

        this.frustumCulled = false;
    }
    Slide.prototype = Object.create(THREE.Mesh.prototype);
    Slide.prototype.constructor = Slide;
    Object.defineProperty(Slide.prototype, 'time', {
        get: function () {
            return this.material.uniforms['uTime'].value;
        },
        set: function (v) {
            this.material.uniforms['uTime'].value = v;
        }
    });

    Slide.prototype.setImage = function(image) {
        this.material.uniforms.map.value.image = image;
        this.material.uniforms.map.value.needsUpdate = true;
    };

    Slide.prototype.transition = function() {
        return TweenMax.fromTo(this, 3.0, {time:0.0}, {time:this.totalDuration, ease:Power0.easeInOut});
    };


    function SlideGeometry(model) {
        THREE.BAS.ModelBufferGeometry.call(this, model);
    }
    SlideGeometry.prototype = Object.create(THREE.BAS.ModelBufferGeometry.prototype);
    SlideGeometry.prototype.constructor = SlideGeometry;
    SlideGeometry.prototype.bufferPositions = function () {
        var positionBuffer = this.createAttribute('position', 3).array;

        for (var i = 0; i < this.faceCount; i++) {
            var face = this.modelGeometry.faces[i];
            var centroid = THREE.BAS.Utils.computeCentroid(this.modelGeometry, face);

            var a = this.modelGeometry.vertices[face.a];
            var b = this.modelGeometry.vertices[face.b];
            var c = this.modelGeometry.vertices[face.c];

            positionBuffer[face.a * 3]     = a.x - centroid.x;
            positionBuffer[face.a * 3 + 1] = a.y - centroid.y;
            positionBuffer[face.a * 3 + 2] = a.z - centroid.z;

            positionBuffer[face.b * 3]     = b.x - centroid.x;
            positionBuffer[face.b * 3 + 1] = b.y - centroid.y;
            positionBuffer[face.b * 3 + 2] = b.z - centroid.z;

            positionBuffer[face.c * 3]     = c.x - centroid.x;
            positionBuffer[face.c * 3 + 1] = c.y - centroid.y;
            positionBuffer[face.c * 3 + 2] = c.z - centroid.z;
        }
    };


    function THREERoot(params) {
        params = utils.extend({
            fov: 60,
            zNear: 10,
            zFar: 100000,

            createCameraControls: true
        }, params);

        this.renderer = new THREE.WebGLRenderer({
            antialias: params.antialias,
            alpha: true
        });
        this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
        if(isEntrance){
            console.log('AAAAAAA')
            document.getElementById('three-entrance').appendChild(this.renderer.domElement);
        }
        if(isExit) {
            console.log('BBBBBBB')
            document.getElementById('three-exit').appendChild(this.renderer.domElement);
        }
        if(isEmphasis){
            console.log('CCCCCC')
            document.getElementById('three-emphasis').appendChild(this.renderer.domElement);
        }

        this.camera = new THREE.PerspectiveCamera(
            params.fov,
            window.innerWidth / window.innerHeight,
            params.zNear,
            params.zfar
        );

        this.scene = new THREE.Scene();

        if (params.createCameraControls) {
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        }

        this.resize = this.resize.bind(this);
        this.tick = this.tick.bind(this);

        this.resize();
        this.tick();

        window.addEventListener('resize', this.resize, false);
    }
    THREERoot.prototype = {
        tick: function () {
            this.update();
            this.render();
            requestAnimationFrame(this.tick);
        },
        update: function () {
            this.controls && this.controls.update();
        },
        render: function () {
            this.renderer.render(this.scene, this.camera);
        },
        resize: function () {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            console.log('window.innerWidth', window.innerWidth)
            this.renderer.setSize(1000, 1000);
        }
    };

    ////////////////////
    // UTILS
    ////////////////////

    var utils = {
        extend: function (dst, src) {
            for (var key in src) {
                dst[key] = src[key];
            }

            return dst;
        },
        randSign: function () {
            return Math.random() > 0.5 ? 1 : -1;
        },
        ease: function (ease, t, b, c, d) {
            return b + ease.getRatio(t / d) * c;
        },
        fibSpherePoint: (function () {
            var vec = {x: 0, y: 0, z: 0};
            var G = Math.PI * (3 - Math.sqrt(5));

            return function (i, n, radius) {
                var step = 2.0 / n;
                var r, phi;

                vec.y = i * step - 1 + (step * 0.5);
                r = Math.sqrt(1 - vec.y * vec.y);
                phi = i * G;
                vec.x = Math.cos(phi) * r;
                vec.z = Math.sin(phi) * r;

                radius = radius || 1;

                vec.x *= radius;
                vec.y *= radius;
                vec.z *= radius;

                return vec;
            }
        })(),
        spherePoint: (function () {
            return function (u, v) {
                u === undefined && (u = Math.random());
                v === undefined && (v = Math.random());

                var theta = 2 * Math.PI * u;
                var phi = Math.acos(2 * v - 1);

                var vec = {};
                vec.x = (Math.sin(phi) * Math.cos(theta));
                vec.y = (Math.sin(phi) * Math.sin(theta));
                vec.z = (Math.cos(phi));

                return vec;
            }
        })()
    };

    function createTweenScrubber(tween, seekSpeed) {
        seekSpeed = seekSpeed || 0.001;

        function stop() {
            TweenMax.to(tween, 1, {timeScale:0});
        }

        function resume() {
            TweenMax.to(tween, 1, {timeScale:1});
        }

        function seek(dx) {
            var progress = tween.progress();
            var p = THREE.Math.clamp((progress + (dx * seekSpeed)), 0, 1);

            tween.progress(p);
        }

        var _cx = 0;

        // desktop
        var mouseDown = false;
        document.body.style.cursor = 'pointer';

        /*window.addEventListener('mouseover', function(e) {
             mouseDown = true;
             document.body.style.cursor = 'ew-resize';
             _cx = e.clientX;
             stop();
         });
         window.addEventListener('mouseover', function(e) {
             mouseDown = false;
             document.body.style.cursor = 'pointer';
             resume();
         });

         window.addEventListener('mousemove', function(e) {
             if (mouseDown === true) {
                 var cx = e.clientX;
                 var dx = cx - _cx;
                 _cx = cx;

                 seek(dx);
             }
         });*/
        // mobile
        window.addEventListener('touchstart', function(e) {
            _cx = e.touches[0].clientX;
            stop();
            e.preventDefault();
        });
        window.addEventListener('touchend', function(e) {
            resume();
            e.preventDefault();
        });
        window.addEventListener('touchmove', function(e) {
            var cx = e.touches[0].clientX;
            var dx = cx - _cx;
            _cx = cx;

            seek(dx);
            e.preventDefault();
        });
    }

}

function glslGlitch(){
    class BackgroundImage {
        constructor() {
            this.uniforms = {
                resolution: {
                    type: 'v2',
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
                },
                imageResolution: {
                    type: 'v2',
                    value: new THREE.Vector2(2048, 1356),
                },
                texture: {
                    type: 't',
                    value: null,
                },
            };
            this.obj = null;
        }
        init(src, callback) {
            const loader = new THREE.TextureLoader();
            loader.crossOrigin = '*';
            loader.load(
                src, (tex) => {
                    tex.magFilter = THREE.NearestFilter;
                    tex.minFilter = THREE.NearestFilter;
                    this.uniforms.texture.value = tex;
                    this.obj = this.createObj();
                    callback();
                });
        }
        createObj() {
            return new THREE.Mesh(
                new THREE.PlaneBufferGeometry(2, 2),
                new THREE.RawShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: `attribute vec3 position;
          attribute vec2 uv;

          varying vec2 vUv;

          void main(void) {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
                    fragmentShader: `precision highp float;

          uniform vec2 resolution;
          uniform vec2 imageResolution;
          uniform sampler2D texture;

          varying vec2 vUv;

          void main(void) {
            vec2 ratio = vec2(
                min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
                min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
              );

            vec2 uv = vec2(
                vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
              );
            gl_FragColor = texture2D(texture, uv);
          }
        `,
                })
            );
        }
        resize() {
            this.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        }
    }

    class PostEffect {
        constructor(texture) {
            this.uniforms = {
                time: {
                    type: 'f',
                    value: 0
                },
                resolution: {
                    type: 'v2',
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight)
                },
                texture: {
                    type: 't',
                    value: texture,
                },
            };
            this.obj = this.createObj();
        }
        createObj() {
            return new THREE.Mesh(
                new THREE.PlaneBufferGeometry(2, 2),
                new THREE.RawShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: `attribute vec3 position;
          attribute vec2 uv;
          
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
                    fragmentShader: `precision highp float;
        
          uniform float time;
          uniform vec2 resolution;
          uniform sampler2D texture;
          
          varying vec2 vUv;
          
          float random(vec2 c){
            return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
          }

          //
          // Description : Array and textureless GLSL 2D/3D/4D simplex
          //               noise functions.
          //      Author : Ian McEwan, Ashima Arts.
          //  Maintainer : ijm
          //     Lastmod : 20110822 (ijm)
          //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
          //               Distributed under the MIT License. See LICENSE file.
          //               https://github.com/ashima/webgl-noise
          //

          vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }

          vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }

          vec4 permute(vec4 x) {
               return mod289(((x*34.0)+1.0)*x);
          }

          vec4 taylorInvSqrt(vec4 r)
          {
            return 1.79284291400159 - 0.85373472095314 * r;
          }

          float snoise3(vec3 v)
            {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

          // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 =   v - i + dot(i, C.xxx) ;

          // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //   x0 = x0 - 0.0 + 0.0 * C.xxx;
            //   x1 = x0 - i1  + 1.0 * C.xxx;
            //   x2 = x0 - i2  + 2.0 * C.xxx;
            //   x3 = x0 - 1.0 + 3.0 * C.xxx;
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
            vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

          // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute(
                       i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                     + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                     + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

          // Gradients: 7x7 points over a square, mapped onto an octahedron.
          // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
            //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);

          //Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;

          // Mix final noise value
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                          dot(p2,x2), dot(p3,x3) ) );
            }
                    
          const float interval = 3.0;
          
          void main(void){
            float strength = smoothstep(interval * 0.5, interval, interval - mod(time, interval));
            vec2 shake = vec2(strength * 8.0 + 0.5) * vec2(
              random(vec2(time)) * 2.0 - 1.0,
              random(vec2(time * 2.0)) * 2.0 - 1.0
            ) / resolution;
          
            float y = vUv.y * resolution.y;
            float rgbWave = (
                snoise3(vec3(0.0, y * 0.01, time * 400.0)) * (2.0 + strength * 32.0)
                * snoise3(vec3(0.0, y * 0.02, time * 200.0)) * (1.0 + strength * 4.0)
                + step(0.9995, sin(y * 0.005 + time * 1.6)) * 12.0
                + step(0.9999, sin(y * 0.005 + time * 2.0)) * -18.0
              ) / resolution.x;
            float rgbDiff = (6.0 + sin(time * 500.0 + vUv.y * 40.0) * (20.0 * strength + 1.0)) / resolution.x;
            float rgbUvX = vUv.x + rgbWave;
            float r = texture2D(texture, vec2(rgbUvX + rgbDiff, vUv.y) + shake).r;
            float g = texture2D(texture, vec2(rgbUvX, vUv.y) + shake).g;
            float b = texture2D(texture, vec2(rgbUvX - rgbDiff, vUv.y) + shake).b;
          
            float whiteNoise = (random(vUv + mod(time, 10.0)) * 2.0 - 1.0) * (0.15 + strength * 0.15);
          
            float bnTime = floor(time * 20.0) * 200.0;
            float noiseX = step((snoise3(vec3(0.0, vUv.x * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);
            float noiseY = step((snoise3(vec3(0.0, vUv.y * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);
            float bnMask = noiseX * noiseY;
            float bnUvX = vUv.x + sin(bnTime) * 0.2 + rgbWave;
            float bnR = texture2D(texture, vec2(bnUvX + rgbDiff, vUv.y)).r * bnMask;
            float bnG = texture2D(texture, vec2(bnUvX, vUv.y)).g * bnMask;
            float bnB = texture2D(texture, vec2(bnUvX - rgbDiff, vUv.y)).b * bnMask;
            vec4 blockNoise = vec4(bnR, bnG, bnB, 1.0);
          
            float bnTime2 = floor(time * 25.0) * 300.0;
            float noiseX2 = step((snoise3(vec3(0.0, vUv.x * 2.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.5);
            float noiseY2 = step((snoise3(vec3(0.0, vUv.y * 8.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.3);
            float bnMask2 = noiseX2 * noiseY2;
            float bnR2 = texture2D(texture, vec2(bnUvX + rgbDiff, vUv.y)).r * bnMask2;
            float bnG2 = texture2D(texture, vec2(bnUvX, vUv.y)).g * bnMask2;
            float bnB2 = texture2D(texture, vec2(bnUvX - rgbDiff, vUv.y)).b * bnMask2;
            vec4 blockNoise2 = vec4(bnR2, bnG2, bnB2, 1.0);
          
            float waveNoise = (sin(vUv.y * 1200.0) + 1.0) / 2.0 * (0.15 + strength * 0.2);
          
            gl_FragColor = vec4(r, g, b, 1.0) * (1.0 - bnMask - bnMask2) + (whiteNoise + blockNoise + blockNoise2 - waveNoise);
          }
        `,
                })
            );
        }
        render(time) {
            this.uniforms.time.value += time;
        }
        resize() {
            this.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        }
    }

    class ConsoleSignature {
        constructor() {
            this.message = `created by yoichi kobayashi`;
            this.url = `http://www.tplh.net`;
            this.show();
        }
        show() {
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                const args = [
                    `\n%c ${this.message} %c%c ${this.url} \n\n`,
                    'color: #fff; background: #222; padding:3px 0;',
                    'padding:3px 1px;',
                    'color: #fff; background: #47c; padding:3px 0;',
                ];
                console.log.apply(console, args);
            } else if (window.console) {
                console.log(`${this.message} ${this.url}`);
            }
        }
    }

    const debounce = (callback, duration) => {
        var timer;
        return function(event) {
            clearTimeout(timer);
            timer = setTimeout(function(){
                callback(event);
            }, duration);
        };
    };

    const canvas = document.getElementById('canvas-webgl');
    const renderer = new THREE.WebGLRenderer({
        antialias: false,
        canvas: canvas,
    });
    const renderBack1 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const sceneBack = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const cameraBack = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    const clock = new THREE.Clock();

//
// process for this sketch.
//

    const bgImg = new BackgroundImage();
    const postEffect = new PostEffect(renderBack1.texture);
    const consoleSignature = new ConsoleSignature();

//
// common process
//
    const resizeWindow = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cameraBack.aspect = window.innerWidth / window.innerHeight;
        cameraBack.updateProjectionMatrix();
        bgImg.resize();
        postEffect.resize();
        renderBack1.setSize(window.innerWidth, window.innerHeight);
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    const render = () => {
        const time = clock.getDelta();
        renderer.render(sceneBack, cameraBack, renderBack1);
        postEffect.render(time);
        renderer.render(scene, camera);
    }
    const renderLoop = () => {
        render();
        requestAnimationFrame(renderLoop);
    }

    const on = () => {
        window.addEventListener('resize', debounce(() => {
            resizeWindow();
        }), 1000);
    }

    const init = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x111111, 1.0);
        cameraBack.position.set(0, 0, 100);
        cameraBack.lookAt(new THREE.Vector3());

        bgImg.init('https://www.tplh.net/file/osaka01.jpg', () => {
            sceneBack.add(bgImg.obj);
            scene.add(postEffect.obj);
        })

        on();
        resizeWindow();
        renderLoop();
    }
    init();

}

function liquidDistorsion(){
    (function() {

        window.CanvasSlideshow = function( options ) {



            //  SCOPE
            /// ---------------------------
            var that  =   this;



            //  OPTIONS
            /// ---------------------------
            options                     = options || {};
            options.width          = options.hasOwnProperty('stageWidth') ? options.width : 1920;
            options.height         = options.hasOwnProperty('stageHeight') ? options.height : 1080;
            options.pixiSprites         = options.hasOwnProperty('sprites') ? options.sprites : [];
            options.centerSprites       = options.hasOwnProperty('centerSprites') ? options.centerSprites : false;
            options.texts               = options.hasOwnProperty('texts') ? options.texts : [];
            options.autoPlay            = options.hasOwnProperty('autoPlay') ? options.autoPlay : true;
            options.autoPlaySpeed       = options.hasOwnProperty('autoPlaySpeed') ? options.autoPlaySpeed : [10, 3];
            options.fullScreen          = options.hasOwnProperty('fullScreen') ? options.fullScreen : false;
            options.displaceScale       = options.hasOwnProperty('displaceScale') ? options.displaceScale : [200, 70];
            options.displacementImage   = options.hasOwnProperty('displacementImage') ? options.displacementImage : '';
            options.navElement          = options.hasOwnProperty('navElement')  ?  options.navElement : document.querySelectorAll( '.scene-nav' );
            options.displaceAutoFit     = options.hasOwnProperty('displaceAutoFit')  ?  options.displaceAutoFit : false;
            options.wacky               = options.hasOwnProperty('wacky') ? options.wacky : false;
            options.interactive         = options.hasOwnProperty('interactive') ? options.interactive : false;
            options.interactionEvent    = options.hasOwnProperty('interactionEvent') ? options.interactionEvent : '';
            options.displaceScaleTo     = ( options.autoPlay === false ) ? [ 0, 0 ] : [ 20, 20 ];
            options.textColor           = options.hasOwnProperty('textColor') ? options.textColor : '#fff';
            options.displacementCenter  = options.hasOwnProperty('displacementCenter') ? options.displacementCenter : false;
            options.dispatchPointerOver = options.hasOwnProperty('dispatchPointerOver') ? options.dispatchPointerOver : false;
            options.fitCoverSprites = options.hasOwnProperty('fitCoverSprites') ? options.fitCoverSprites : false;
            options.transparent = true

            //PIXI.useDeprecated();
            //  PIXI VARIABLES
            /// ---------------------------
            var renderer            = new PIXI.autoDetectRenderer( options );
            var stage               = new PIXI.Container();
            var slidesContainer     = new PIXI.Container();
            var displacementSprite  = new PIXI.Sprite.fromImage( options.displacementImage );
            var displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );



            //  TEXTS
            /// ---------------------------
            var style = new PIXI.TextStyle({
                fill: options.textColor,
                wordWrap: true,
                wordWrapWidth: 400,
                letterSpacing: 20,
                fontSize: 14
            });



            //  SLIDES ARRAY INDEX
            /// ---------------------------
            this.currentIndex = 0;



            /// ---------------------------
            //  INITIALISE PIXI
            /// ---------------------------
            this.initPixi = function() {

                // Add canvas to the HTML
                document.getElementById('liquiddistorsion-container').appendChild( renderer.view );


                // Add child container to the main container
                stage.addChild( slidesContainer );


                // Enable Interactions
                stage.interactive = true;


                // Fit renderer to the screen
                if ( options.fullScreen === true ) {
                    renderer.view.style.objectFit = 'cover';
                    /*renderer.view.style.objectFit = 'cover';
                    renderer.view.style.width     = '100%';
                    renderer.view.style.height    = '100%';
                    renderer.view.style.top       = '50%';
                    renderer.view.style.left      = '50%';
                    renderer.view.style.webkitTransform = 'translate( -50%, -50% ) scale(1.2)';
                    renderer.view.style.transform = 'translate( -50%, -50% ) scale(1.2)';  */
                } else {
                    renderer.view.style.objectFit = 'cover';
                    /*renderer.view.style.background = 'red';
                    renderer.view.style.maxWidth  = '100%';
                    renderer.view.style.top       = '50%';
                    renderer.view.style.left      = '50%';
                    renderer.view.style.webkitTransform = 'translate( -50%, -50% )';
                    renderer.view.style.transform = 'translate( -50%, -50% )';*/
                }


                displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;


                // Set the filter to stage and set some default values for the animation
                stage.filters = [displacementFilter];

                if ( options.autoPlay === false ) {
                    displacementFilter.scale.x = 0;
                    displacementFilter.scale.y = 0;
                }

                if ( options.wacky === true ) {

                    displacementSprite.anchor.set(0.5);
                    displacementSprite.x = renderer.width / 2;
                    displacementSprite.y = renderer.height / 2;
                }

                displacementSprite.scale.x = 2;
                displacementSprite.scale.y = 2;

                // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
                displacementFilter.autoFit = options.displaceAutoFit;

                stage.addChild( displacementSprite );

            };



            /// ---------------------------
            //  LOAD SLIDES TO CANVAS
            /// ---------------------------
            this.loadPixiSprites = function( sprites ) {


                var rSprites = options.sprites;
                var rTexts   = options.texts;

                for ( var i = 0; i < rSprites.length; i++ ) {

                    var texture   = new PIXI.Texture.fromImage( sprites[i] );
                    var image     = new PIXI.Sprite( texture );

                    if ( rTexts ) {
                        var richText = new PIXI.Text( rTexts[i], style);
                        image.addChild(richText);

                        richText.anchor.set(0.5);
                        richText.x = image.width / 2;
                        richText.y = image.height / 2;
                    }

                    if ( options.centerSprites === true ) {
                        image.anchor.set(0.5);
                        image.x = renderer.width / 2;
                        image.y = renderer.height / 2;
                    }
                    // image.transform.scale.x = 1.3;
                    // image.transform.scale.y = 1.3;



                    if ( i !== 0  ) {
                        TweenMax.set( image, { alpha: 0 } );
                    }

                    slidesContainer.addChild( image );

                }

            };



            /// ---------------------------
            //  DEFAULT RENDER/ANIMATION
            /// ---------------------------
            if ( options.autoPlay === true ) {

                var ticker = new PIXI.ticker.Ticker();

                ticker.autoStart = options.autoPlay;

                ticker.add(function( delta ) {

                    displacementSprite.x += options.autoPlaySpeed[0] * delta;
                    displacementSprite.y += options.autoPlaySpeed[1];

                    renderer.render( stage );

                });

            }  else {

                var render = new PIXI.ticker.Ticker();

                render.autoStart = true;

                render.add(function( delta ) {
                    renderer.render( stage );
                });

            }


            /// ---------------------------
            //  TRANSITION BETWEEN SLIDES
            /// ---------------------------
            var isPlaying   = false;
            var slideImages = slidesContainer.children;
            this.moveSlider = function( newIndex ) {

                isPlaying = true;


                var baseTimeline = new TimelineMax( { onComplete: function () {
                        that.currentIndex = newIndex;
                        isPlaying = false;
                        if ( options.wacky === true ) {
                            displacementSprite.scale.set( 1 );
                        }
                    },onUpdate: function() {

                        if ( options.wacky === true ) {
                            displacementSprite.rotation += baseTimeline.progress() * 0.02;
                            displacementSprite.scale.set( baseTimeline.progress() * 3 );
                        }

                    } });

                baseTimeline.clear();

                if ( baseTimeline.isActive() ) {
                    return;
                }

                // DEMO 4
                baseTimeline
                    .to(displacementFilter.scale, 0.8, { x: options.displaceScale[0], y: options.displaceScale[1], ease: Power2.easeIn  });
                    /*.to(slideImages[that.currentIndex], 0.5, { alpha: 0, ease: Power2.easeOut }, 0.4)
                    .to(slideImages[newIndex], 0.8, { alpha: 1, ease: Power2.easeOut }, 1)
                    .to(displacementFilter.scale, 0.7, { x: options.displaceScaleTo[0], y: options.displaceScaleTo[1], ease: Power1.easeOut }, 0.9 );
*/
            };



            /// ---------------------------
            //  CLICK HANDLERS
            /// ---------------------------
            var nav = options.navElement;

            for ( var i = 0; i < nav.length; i++ ) {

                var navItem = nav[i];

                navItem.onclick = function( event ) {

                    // Make sure the previous transition has ended
                    if ( isPlaying ) {
                        return false;
                    }

                    if ( this.getAttribute('data-nav') === 'next' ) {

                        if ( that.currentIndex >= 0 && that.currentIndex < slideImages.length - 1 ) {
                            that.moveSlider( that.currentIndex + 1 );
                        } else {
                            that.moveSlider( 0 );
                        }

                    } else {

                        if ( that.currentIndex > 0 && that.currentIndex < slideImages.length ) {
                            that.moveSlider( that.currentIndex - 1 );
                        } else {
                            that.moveSlider( spriteImages.length - 1 );
                        }

                    }

                    return false;

                }

            }



            /// ---------------------------
            //  INIT FUNCTIONS
            /// ---------------------------

            this.init = function() {


                that.initPixi();
                that.loadPixiSprites( options.pixiSprites );
                that.moveSlider( 0 );
                /*
                if ( options.fullScreen === true ) {
                  window.addEventListener("resize", function( event ){
                    scaleToWindow( renderer.view );
                  });
                  scaleToWindow( renderer.view );
                }
                */


            };




            /// ---------------------------
            //  INTERACTIONS
            /// ---------------------------
            function rotateSpite() {
                displacementSprite.rotation += 0.001;
                rafID = requestAnimationFrame( rotateSpite );
            }

            if ( options.interactive === true ) {

                var rafID, mouseX, mouseY;

                // Enable interactions on our slider
                slidesContainer.interactive = true;
                slidesContainer.buttonMode  = true;

                // HOVER
                if ( options.interactionEvent === 'hover' || options.interactionEvent === 'both'  )  {

                    slidesContainer.pointerover = function( mouseData ){
                        mouseX = mouseData.data.global.x;
                        mouseY = mouseData.data.global.y;
                        TweenMax.to( displacementFilter.scale, 1, { x: "+=" + Math.sin( mouseX ) * 100 + "", y: "+=" + Math.cos( mouseY ) * 100 + ""  });
                        rotateSpite();
                    };

                    slidesContainer.pointerout = function( mouseData ){
                        TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0 });
                        cancelAnimationFrame( rafID );
                    };

                }

                // CLICK
                /*if ( options.interactionEvent === 'click' || options.interactionEvent === 'both'  ) {

                    slidesContainer.pointerup = function( mouseData ){
                        if ( options.dispatchPointerOver === true ) {
                            TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0, onComplete: function() {
                                    TweenMax.to( displacementFilter.scale, 1, { x: 20, y: 20  });
                                } });
                        } else {
                            TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0 });
                            cancelAnimationFrame( rafID );
                        }

                    };

                    slidesContainer.pointerdown = function( mouseData ){
                        mouseX = mouseData.data.global.x;
                        mouseY = mouseData.data.global.y;
                        TweenMax.to( displacementFilter.scale, 1, { x: "+=" + Math.sin( mouseX ) * 1200 + "", y: "+=" + Math.cos( mouseY ) * 200 + ""  });
                    };

                }*/

            }


            /// ---------------------------
            //  CENTER DISPLACEMENT
            /// ---------------------------
            if ( options.displacementCenter === true ) {
                displacementSprite.anchor.set(0.5);
                displacementSprite.x = renderer.view.width / 2;
                displacementSprite.y = renderer.view.height / 2;
            }


            /// ---------------------------
            //  START
            /// ---------------------------
            this.init();


            /// ---------------------------
            //  HELPER FUNCTIONS
            /// ---------------------------
            function scaleToWindow( canvas, backgroundColor ) {
                var scaleX, scaleY, scale, center;

                //1. Scale the canvas to the correct size
                //Figure out the scale amount on each axis
                scaleX = window.innerWidth / canvas.offsetWidth;
                scaleY = window.innerHeight / canvas.offsetHeight;

                //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
                scale = Math.min(scaleX, scaleY);
                canvas.style.transformOrigin = "0 0";
                canvas.style.transform = "scale(" + scale + ")";

                //2. Center the canvas.
                //Decide whether to center the canvas vertically or horizontally.
                //Wide canvases should be centered vertically, and
                //square or tall canvases should be centered horizontally
                if (canvas.offsetWidth > canvas.offsetHeight) {
                    if (canvas.offsetWidth * scale < window.innerWidth) {
                        center = "horizontally";
                    } else {
                        center = "vertically";
                    }
                } else {
                    if (canvas.offsetHeight * scale < window.innerHeight) {
                        center = "vertically";
                    } else {
                        center = "horizontally";
                    }
                }

                //Center horizontally (for square or tall canvases)
                var margin;
                if (center === "horizontally") {
                    margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
                    canvas.style.marginTop = 0 + "px";
                    canvas.style.marginBottom = 0 + "px";
                    canvas.style.marginLeft = margin + "px";
                    canvas.style.marginRight = margin + "px";
                }

                //Center vertically (for wide canvases)
                if (center === "vertically") {
                    margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
                    canvas.style.marginTop = margin + "px";
                    canvas.style.marginBottom = margin + "px";
                    canvas.style.marginLeft = 0 + "px";
                    canvas.style.marginRight = 0 + "px";
                }

                //3. Remove any padding from the canvas  and body and set the canvas
                //display style to "block"
                canvas.style.paddingLeft = 0 + "px";
                canvas.style.paddingRight = 0 + "px";
                canvas.style.paddingTop = 0 + "px";
                canvas.style.paddingBottom = 0 + "px";
                canvas.style.display = "block";

                //4. Set the color of the HTML body background
                document.body.style.backgroundColor = backgroundColor;

                //Fix some quirkiness in scaling for Safari
                var ua = navigator.userAgent.toLowerCase();
                if (ua.indexOf("safari") != -1) {
                    if (ua.indexOf("chrome") > -1) {
                        // Chrome
                    } else {
                        // Safari
                        //canvas.style.maxHeight = "100%";
                        //canvas.style.minHeight = "100%";
                    }
                }

                //5. Return the `scale` value. This is important, because you'll nee this value
                //for correct hit testing between the pointer and sprites
                return scale;
            } // http://bit.ly/2y1Yk2k


        };

    })();

   // imagesLoaded(document.body, () => document.body.classList.remove('loading'));

    var spriteImages = document.querySelectorAll( '.slide-item__image' );
    var spriteImagesSrc = [];
    var texts = [];

    for ( var i = 0; i < spriteImages.length; i++ ) {
        var img = spriteImages[i];
        // Set the texts you want to display to each slide
        // in a sibling element of your image and edit accordingly
        if ( img.nextElementSibling ) {
            texts.push(img.nextElementSibling.innerHTML);
        } else {
            texts.push('');
        }
        spriteImagesSrc.push( img.getAttribute('src' ) );
    }

    var initCanvasSlideshow = new CanvasSlideshow({
        sprites: spriteImagesSrc,
        displacementImage: '../../assets/LiquidDistortion/img/dmaps/2048x2048/clouds.jpg',
        autoPlay: true,
        autoPlaySpeed: [4, 3],

        interactive: true,
        interactionEvent: 'click', // 'click', 'hover', 'both'
        displaceAutoFit: true,
        dispatchPointerOver: true // restarts pointerover event after click
    });
}

export {
    d3effect,
    splitForTilesAnimations,
    shattering,
    dustAnimation,
    glslGlitch,
    liquidDistorsion
};