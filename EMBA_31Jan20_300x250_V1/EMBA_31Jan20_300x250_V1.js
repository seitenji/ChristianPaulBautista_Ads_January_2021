(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,102);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text();
	this.instance.setTransform(-68.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-51,137,102);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text();
	this.instance.setTransform(-68.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-51,137,102);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002169").s().p("AmaBrQglAAgagaQgagZAAglIAAglQAAgkAagaQAagaAlAAIM1AAQAlAAAaAaQAaAaAAAkIAAAlQAAAkgaAaQgaAaglAAg");
	this.shape.setTransform(57.15,14.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(7.2,3.7,100,21.400000000000002), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E6EB").s().p("AANAzQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgWIhJAAQgBABAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgvQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIBJAAIAAgWQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAIAwAwIABABIgBACIgwAwIgCABgAg6AWIBIAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAATIAqgqIgqgqIAAATIgBACIgCAAIhIAAg");
	this.shape.setTransform(38.7375,0.105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5A800").s().p("AhvBrIAAjVICHAAQAkAAAaAaQAaAaAAAkIAAAlQAAAkgaAaQgaAagkAAg");
	this.shape_1.setTransform(38.775,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E6EB").s().p("AgPAdIAAg5IAfAAIAAAKIgUAAIAAANIARAAIAAAJIgRAAIAAAPIAUAAIAAAKg");
	this.shape_2.setTransform(11.775,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3E6EB").s().p("AAHAdIgIgWIgFAAIAAAWIgMAAIAAg5IASAAQAIAAAFAFQAFAFAAAIQAAAKgJAEIAKAYIAAABgAgGgBIAGAAQACAAACgCQACgDAAgDQAAgJgGAAIgGAAg");
	this.shape_3.setTransform(7.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3E6EB").s().p("AgOAXQgGgHABgLIAAgJQgBgLAGgHQAGgGAIAAQAKAAAFAGQAGAHgBALIAAAJQABALgGAHQgFAGgKAAQgIAAgGgGgAgGgPQgCADAAAIIAAAJQAAAHACAEQACADAEAAQAFAAACgDQACgDAAgIIAAgJQAAgHgCgEQgCgEgFAAQgEAAgCAEg");
	this.shape_4.setTransform(2.2,0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3E6EB").s().p("AAOAdIAAgQIABgXIgLAnIgHAAIgLgnIABAXIAAAQIgMAAIAAg5IAPAAIAKApIALgpIAPAAIAAA5g");
	this.shape_5.setTransform(-3.525,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3E6EB").s().p("AAIAdIgQglIAAAlIgLAAIAAg5IALAAIAQAlIAAglIAMAAIAAA5g");
	this.shape_6.setTransform(-11.45,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3E6EB").s().p("AAHAdIgIgWIgFAAIAAAWIgMAAIAAg5IASAAQAIAAAFAFQAFAFgBAIQABAKgJAEIAKAYIAAABgAgGgBIAGAAQADAAACgCQABgDAAgDQAAgJgGAAIgGAAg");
	this.shape_7.setTransform(-16.3,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3E6EB").s().p("AALAdIgEgMIgOAAIgDAMIgMAAIASg5IAJAAIASA5gAgEAHIAJAAIgFgTg");
	this.shape_8.setTransform(-21.35,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E3E6EB").s().p("AgPAdIAAg5IAfAAIAAAKIgUAAIAAANIARAAIAAAJIgRAAIAAAPIAUAAIAAAKg");
	this.shape_9.setTransform(-25.925,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3E6EB").s().p("AgPAdIAAg5IAMAAIAAAvIATAAIAAAKg");
	this.shape_10.setTransform(-30.125,0.1);

	this.instance = new lib.Path_1();
	this.instance.setTransform(-0.05,-0.05,1,1,0,0,0,57.1,14.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.647)",0,3,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-15.7,120,40);


// stage content:
(lib.EMBA_31Jan20_300x250_V1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [55];
	// timeline functions:
	this.frame_55 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_8.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://goizueta.emory.edu/', '_blank');
		});
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(425));

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(230,220.25);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.button_8 = new lib.Symbol8();
	this.button_8.name = "button_8";
	this.button_8.setTransform(230,220.25);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},39).to({state:[{t:this.instance}]},15).to({state:[{t:this.button_8}]},1).wait(425));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},15).to({_off:true},1).wait(425));

	// Layer_4
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(-68.5,92);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.setTransform(81.5,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},22).wait(425));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true,x:81.5},14).wait(447));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFA435").s().p("AgZAEIAAgHIAzAAIAAAHg");
	this.shape.setTransform(2.55,92.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFA435").s().p("AgZAnIAAhNIAzAAIAABNg");
	this.shape_1.setTransform(2.55,92.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFA435").s().p("AgZBLIAAiVIAzAAIAACVg");
	this.shape_2.setTransform(2.55,92.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFA435").s().p("AgZBuIAAjbIAzAAIAADbg");
	this.shape_3.setTransform(2.55,92.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFA435").s().p("AgZCSIAAkjIAzAAIAAEjg");
	this.shape_4.setTransform(2.55,92.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFA435").s().p("AgZC2IAAlrIAzAAIAAFrg");
	this.shape_5.setTransform(2.55,92.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFA435").s().p("AgZDZIAAmxIAzAAIAAGxg");
	this.shape_6.setTransform(2.55,92.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFA435").s().p("AgZD9IAAn5IAzAAIAAH5g");
	this.shape_7.setTransform(2.55,92.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFA435").s().p("AgZEgIAAo/IAzAAIAAI/g");
	this.shape_8.setTransform(2.55,92.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFA435").s().p("AgZFDIAAqFIAzAAIAAKFg");
	this.shape_9.setTransform(2.55,92.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFA435").s().p("AgZFnIAArNIAzAAIAALNg");
	this.shape_10.setTransform(2.55,92.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFA435").s().p("AgZGLIAAsVIAzAAIAAMVg");
	this.shape_11.setTransform(2.55,92.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFA435").s().p("AgZGuIAAtbIAzAAIAANbg");
	this.shape_12.setTransform(2.55,92.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFA435").s().p("AgZHSIAAujIAzAAIAAOjg");
	this.shape_13.setTransform(2.55,92.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(467));

	// Layer_2
	this.instance_3 = new lib.bg();

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFA435").s().p("AmDCiIAAj+IBaAAIAAhGIKsAAIAAFEg");
	this.shape_14.setTransform(219.75,153.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.instance_3}]}).wait(480));

	// stageBackground
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_16.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(480));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(13,125,287,125);
// library properties:
lib.properties = {
	id: 'E2B5CB641660EA48A97A325D224DD2E5',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/text.png", id:"text"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E2B5CB641660EA48A97A325D224DD2E5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;