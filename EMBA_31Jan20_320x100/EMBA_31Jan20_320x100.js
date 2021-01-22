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



(lib.flash0ai = function() {
	this.initialize(img.flash0ai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,100);// helper functions:

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
	this.shape.graphics.f("#002169").s().p("AqGCeQglAAgagaQgagaAAglIAAiJQAAglAagaQAagaAlAAIUNAAQAlAAAaAaQAaAaAAAlIAACJQAAAlgaAaQgaAaglAAg");
	this.shape.setTransform(80.625,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(7.1,3.5,147.1,31.6), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+tMtIAA5ZMA9bAAAIAAZZg");
	mask.setTransform(196.625,81.275);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB730").s().p("AhbIeIhKgCIhKgEIhKgEQijgKiFgTQiXgWiPgnQiWgniJg3IiLg8QgbgNgpgVIhEgjIiEhPQhGgtg4grQhCgxg3gvIh7h0IAAl+IAHAKQAyBFAjAuIBYBwIDADNQAvAtA7AwICqB/IA8AnQAXAPAmAWIA/AkQBHAnA5AaQBDAfBCAaQCGA1CPAjQCDAgCcAVICSARQBFAHBOAEQCZAICMgIQBNgGBGgIQAagDAugIIBJgNQCPgdCMgyIDrhnIAhgQICDhFICEhEIBEghIAjgPIARgIICgg+QCTgyCfgdIAAC5QiRAKh9AXIhGAOIgjAIIiuAwQhMAYjKBJIjTBHIhIAUQiNAniTAaQhFANhNAKQhQALhDAFQg+AFhWAEIiSABIhKgBg");
	this.shape.setTransform(196.775,81.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDB730").s().p("AgBAAIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(301.5,92.425);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,27.1,393.3,108.70000000000002), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F5A800").s().p("AATBIQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgfIhnAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAhEIAAgCIADgBIBnAAIAAgfQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIADABIBFBEIAAACIAAADIhFBFIgCAAgAhTAfIBnAAQADAAABADIAAAbIA7g8Ig7g7IAAAaIgBADQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIhnAAg");
	this.shape.setTransform(57.4167,0.4417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AikCeIAAk7IDxAAQAlAAAZAaQAaAaAAAlIAACJQAAAlgaAaQgaAagkAAg");
	this.shape_1.setTransform(57.075,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E6EB").s().p("AgXAqIAAhTIAvAAIAAAOIgeAAIAAAUIAaAAIAAANIgaAAIAAAWIAeAAIAAAOg");
	this.shape_2.setTransform(17,0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3E6EB").s().p("AAKAqIgMgfIgIAAIAAAfIgRAAIAAhTIAbAAQAMAAAHAHQAGAGAAAMQAAAQgMAHIAPAiIAAABgAgKgCIAJAAQAFAAACgDQADgEAAgFQAAgNgJAAIgKAAg");
	this.shape_3.setTransform(10.475,0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3E6EB").s().p("AgVAiQgIgKAAgQIAAgNQAAgSAIgJQAHgKAOAAQAOAAAIAKQAIAJAAARIAAANQAAARgIAKQgIAJgOAAQgNAAgIgJgAgJgWQgDAFgBALIAAANQAAALAEAGQADAFAGAAQAHAAADgFQADgFAAgLIAAgOQAAgLgDgFQgDgGgHAAQgGAAgDAGg");
	this.shape_4.setTransform(3,0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3E6EB").s().p("AAVAqIAAgXIABgiIgQA5IgLAAIgRg5IACAiIAAAXIgRAAIAAhTIAWAAIAPA8IAQg8IAWAAIAABTg");
	this.shape_5.setTransform(-5.45,0.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3E6EB").s().p("AANAqIgYg2IAAA2IgRAAIAAhTIARAAIAYA2IAAg2IAQAAIAABTg");
	this.shape_6.setTransform(-17.125,0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3E6EB").s().p("AAKAqIgMgfIgIAAIAAAfIgRAAIAAhTIAbAAQAMAAAHAHQAGAGAAAMQAAAQgMAHIAPAiIAAABgAgKgCIAJAAQAFAAACgDQADgEAAgFQAAgNgJAAIgKAAg");
	this.shape_7.setTransform(-24.175,0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3E6EB").s().p("AAQAqIgFgRIgWAAIgEARIgSAAIAahTIAPAAIAaBTgAgHALIAPAAIgIgdg");
	this.shape_8.setTransform(-31.575,0.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E3E6EB").s().p("AgXAqIAAhTIAvAAIAAAOIgeAAIAAAUIAaAAIAAANIgaAAIAAAWIAeAAIAAAOg");
	this.shape_9.setTransform(-38.25,0.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3E6EB").s().p("AgWAqIAAhTIARAAIAABFIAcAAIAAAOg");
	this.shape_10.setTransform(-44.375,0.175);

	this.instance = new lib.Path_1();
	this.instance.setTransform(0,-0.05,1,1,0,0,0,80.6,19.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.647)",0,3,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-20.7,166,50);


// stage content:
(lib.EMBA_31Jan20_320x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [35];
	// timeline functions:
	this.frame_35 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
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
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(12));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(229,75.25);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.button_1 = new lib.Symbol1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(229,75.25);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},14).to({state:[{t:this.button_1}]},1).to({state:[]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({alpha:1},14).to({_off:true},1).wait(12));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aj+LRIAA2hIH9AAIAAWhg");
	var mask_graphics_1 = new cjs.Graphics().p("AogLRIAA2hIRBAAIAAWhg");
	var mask_graphics_2 = new cjs.Graphics().p("AtBLRIAA2hIaDAAIAAWhg");
	var mask_graphics_3 = new cjs.Graphics().p("AxkLRIAA2hMAjIAAAIAAWhg");
	var mask_graphics_4 = new cjs.Graphics().p("A2FLRIAA2hMAsLAAAIAAWhg");
	var mask_graphics_5 = new cjs.Graphics().p("A6nLRIAA2hMA1PAAAIAAWhg");
	var mask_graphics_6 = new cjs.Graphics().p("A/JLRIAA2hMA+TAAAIAAWhg");
	var mask_graphics_7 = new cjs.Graphics().p("EgjrALRIAA2hMBHXAAAIAAWhg");
	var mask_graphics_8 = new cjs.Graphics().p("EgoNALRIAA2hMBQbAAAIAAWhg");
	var mask_graphics_9 = new cjs.Graphics().p("EgsuALRIAA2hMBZdAAAIAAWhg");
	var mask_graphics_10 = new cjs.Graphics().p("EgxQALRIAA2hMBihAAAIAAWhg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg1yALRIAA2hMBrlAAAIAAWhg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg6UALRIAA2hMB0pAAAIAAWhg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg+1ALRIAA2hMB9sAAAIAAWhg");
	var mask_graphics_14 = new cjs.Graphics().p("EhDXALRIAA2hMCGwAAAIAAWhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-101,y:54.875}).wait(1).to({graphics:mask_graphics_1,x:-101,y:54.875}).wait(1).to({graphics:mask_graphics_2,x:-101,y:54.875}).wait(1).to({graphics:mask_graphics_3,x:-101,y:54.875}).wait(1).to({graphics:mask_graphics_4,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_5,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_6,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_7,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_8,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_9,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_10,x:-101.025,y:54.875}).wait(1).to({graphics:mask_graphics_11,x:-101.05,y:54.875}).wait(1).to({graphics:mask_graphics_12,x:-101.05,y:54.875}).wait(1).to({graphics:mask_graphics_13,x:-101.05,y:54.875}).wait(1).to({graphics:mask_graphics_14,x:-101.05,y:54.875}).wait(33));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB730").s().p("AneBHQBBgBBDgCQCCgEB0gPQB4gOB7gaQBJgOBfgXICogqIAAADIinAqQhfAXhJANQh7AZh5APQh4APh+AEIhgABIgkAAg");
	this.shape.setTransform(272.4,112.8977);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(123.8,59.6,1,1,0,0,0,196.8,81.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1.setTransform(233.875,68.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDB730").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(319.9,43.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_3.setTransform(319.875,45.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDB730").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_4.setTransform(317.2,45.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_5.setTransform(319.9,48.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_6.setTransform(317.2,48.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_7.setTransform(314.525,48.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_8.setTransform(309.15,48.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_9.setTransform(311.825,48.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_10.setTransform(319.9,50.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_11.setTransform(317.2,50.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_12.setTransform(314.525,50.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_13.setTransform(311.825,50.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_14.setTransform(309.15,50.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_15.setTransform(306.475,50.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_16.setTransform(303.775,50.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_17.setTransform(301.075,50.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDB730").s().p("AgBAAIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_18.setTransform(298.4,50.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_19.setTransform(295.725,50.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_20.setTransform(293.025,50.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDB730").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_21.setTransform(290.35,50.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_22.setTransform(317.2,52.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_23.setTransform(314.5,52.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_24.setTransform(311.825,52.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_25.setTransform(309.15,52.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_26.setTransform(306.475,52.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_27.setTransform(303.775,52.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_28.setTransform(301.075,52.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_29.setTransform(298.4,52.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_30.setTransform(295.7,52.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_31.setTransform(293.025,52.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_32.setTransform(290.35,52.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_33.setTransform(287.675,52.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_34.setTransform(284.975,52.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_35.setTransform(282.275,52.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_36.setTransform(279.625,52.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_37.setTransform(311.875,54.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_38.setTransform(309.175,54.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_39.setTransform(306.475,54.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_40.setTransform(303.8,54.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_41.setTransform(301.125,54.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgDABAAgEg");
	this.shape_42.setTransform(298.425,54.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_43.setTransform(295.725,54.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_44.setTransform(293.05,54.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_45.setTransform(290.35,54.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_46.setTransform(287.675,54.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_47.setTransform(284.975,54.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_48.setTransform(282.275,54.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_49.setTransform(279.575,54.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FDB730").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_50.setTransform(276.925,54.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_51.setTransform(274.225,54.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_52.setTransform(303.8,57.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_53.setTransform(301.1,57.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_54.setTransform(298.425,57.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_55.setTransform(295.75,57);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_56.setTransform(293.05,57.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDB730").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_57.setTransform(290.375,57.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_58.setTransform(287.65,57);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_59.setTransform(285,57);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_60.setTransform(282.3,57);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_61.setTransform(279.6,57);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_62.setTransform(276.9,57);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_63.setTransform(274.25,57);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_64.setTransform(271.525,57.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FDB730").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_65.setTransform(268.875,57.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_66.setTransform(266.175,57.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_67.setTransform(298.45,59);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_68.setTransform(295.75,59.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_69.setTransform(293.05,59.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_70.setTransform(290.375,59.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_71.setTransform(287.675,59.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_72.setTransform(285,59);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_73.setTransform(282.275,59.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAABADQgBAEgEAAQgDAAAAgEg");
	this.shape_74.setTransform(279.6,59.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FDB730").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_75.setTransform(276.925,59.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_76.setTransform(274.225,59.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_77.setTransform(271.55,59);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_78.setTransform(268.85,59.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_79.setTransform(266.175,59.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_80.setTransform(263.475,59.025);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_81.setTransform(260.775,59.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_82.setTransform(293.05,61);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_83.setTransform(290.35,61);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_84.setTransform(287.675,60.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_85.setTransform(284.975,61);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_86.setTransform(282.275,60.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_87.setTransform(279.6,61);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_88.setTransform(276.925,60.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_89.setTransform(274.225,61);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_90.setTransform(271.55,61);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_91.setTransform(268.85,61);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_92.setTransform(266.15,61);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_93.setTransform(263.45,60.975);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_94.setTransform(260.775,60.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(258.075,60.975);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_96.setTransform(255.4,60.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_97.setTransform(285,62.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_98.setTransform(282.3,62.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_99.setTransform(279.625,62.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_100.setTransform(276.95,62.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_101.setTransform(274.225,62.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FDB730").s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_102.setTransform(271.55,62.95);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_103.setTransform(268.85,62.95);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDB730").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_104.setTransform(266.175,62.975);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_105.setTransform(263.475,62.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_106.setTransform(260.8,62.95);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_107.setTransform(258.075,62.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_108.setTransform(255.4,62.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_109.setTransform(252.7,62.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FDB730").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_110.setTransform(250,62.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_111.setTransform(247.325,62.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_112.setTransform(279.6,64.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_113.setTransform(276.9,64.925);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_114.setTransform(274.225,64.925);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FDB730").s().p("AgEAAQAAgDAEAAQAFAAgBADQABAEgFAAQgEAAAAgEg");
	this.shape_115.setTransform(271.55,64.925);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_116.setTransform(268.85,64.925);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_117.setTransform(266.175,64.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_118.setTransform(263.475,64.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_119.setTransform(260.8,64.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_120.setTransform(258.1,64.925);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_121.setTransform(255.425,64.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FDB730").s().p("AgBAAIABgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_122.setTransform(252.725,64.925);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_123.setTransform(250.05,64.925);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_124.setTransform(247.35,64.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_125.setTransform(244.65,64.925);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_126.setTransform(241.975,64.925);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_127.setTransform(276.9,66.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_128.setTransform(274.2,66.75);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_129.setTransform(271.525,66.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_130.setTransform(268.85,66.85);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_131.setTransform(266.15,66.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FDB730").s().p("AgFAAQAAAAAAAAQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_132.setTransform(263.45,66.95);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_133.setTransform(260.775,66.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_134.setTransform(258.075,66.975);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(255.4,66.975);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_136.setTransform(252.7,66.95);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_137.setTransform(250.025,66.95);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_138.setTransform(247.325,66.975);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_139.setTransform(244.65,66.975);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_140.setTransform(241.95,66.975);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FDB730").s().p("AAAAAIAAgBQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_141.setTransform(239.25,66.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_142.setTransform(271.55,69);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_143.setTransform(268.85,69);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_144.setTransform(266.15,69.025);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FDB730").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_145.setTransform(263.475,69.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FDB730").s().p("AgDAAQAAgEADABQAEgBAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_146.setTransform(260.775,69);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_147.setTransform(258.1,69);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_148.setTransform(255.425,69.025);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FDB730").s().p("AgEAAQABgEADABQAEgBABAEQgBAFgEAAQgDAAgBgFg");
	this.shape_149.setTransform(252.7,69);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_150.setTransform(250.025,69);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_151.setTransform(247.35,69);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_152.setTransform(244.65,69);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_153.setTransform(241.975,69.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_154.setTransform(239.275,69);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_155.setTransform(236.6,69);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_156.setTransform(266.175,71.05);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_157.setTransform(263.475,71.05);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_158.setTransform(260.775,71.05);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_159.setTransform(258.1,71.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_160.setTransform(255.4,71.05);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_161.setTransform(252.725,71.05);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FDB730").s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_162.setTransform(250.05,71.05);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_163.setTransform(247.325,71.05);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFgBQgEABAAgFg");
	this.shape_164.setTransform(244.625,71.05);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFgBQgEABAAgFg");
	this.shape_165.setTransform(241.975,71.05);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_166.setTransform(239.25,71.05);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_167.setTransform(236.575,71.075);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_168.setTransform(233.9,71.05);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_169.setTransform(231.225,71.05);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_170.setTransform(225.775,91.45);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_171.setTransform(223.2,91.45);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_172.setTransform(220.525,91.45);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FDB730").s().p("AgEAAQABgDADgBQAFABgBADQABAEgFAAQgDAAgBgEg");
	this.shape_173.setTransform(217.8,91.45);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_174.setTransform(215.1,91.45);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FDB730").s().p("AgFAAQABgEAEAAQAGAAgBAEQABAFgGAAQgEAAgBgFg");
	this.shape_175.setTransform(212.4,91.45);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgFAAAAgGg");
	this.shape_176.setTransform(209.725,91.475);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_177.setTransform(207,91.45);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FDB730").s().p("AgEAAQgBgEAFAAQAFAAABAEQgBAFgFAAQgFAAABgFg");
	this.shape_178.setTransform(201.65,91.45);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_179.setTransform(198.95,91.45);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_180.setTransform(196.25,91.45);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_181.setTransform(193.575,91.475);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FDB730").s().p("AgDAAQgBgDAEgBQAEABABADQgBAEgEAAQgEAAABgEg");
	this.shape_182.setTransform(190.85,91.45);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FDB730").s().p("AgFAAQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_183.setTransform(204.3,91.45);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_184.setTransform(180.175,91.475);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_185.setTransform(182.8,91.45);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_186.setTransform(185.45,91.45);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_187.setTransform(188.15,91.45);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_188.setTransform(242.025,84.475);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBABQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_189.setTransform(239.275,84.45);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FDB730").s().p("AgGAAQAAgGAGAAQAGAAABAGQgBAHgGAAQgGAAAAgHg");
	this.shape_190.setTransform(217.75,84.475);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_191.setTransform(215.1,84.45);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FDB730").s().p("AgEAAQgBgEAFgBQAFABABAEQgBAGgFgBQgFABABgGg");
	this.shape_192.setTransform(212.45,84.45);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_193.setTransform(209.8,84.45);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FDB730").s().p("AgGAAQAAAAAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_194.setTransform(220.45,84.475);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_195.setTransform(236.65,84.45);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_196.setTransform(233.925,84.475);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_197.setTransform(231.225,84.475);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_198.setTransform(228.525,84.45);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FDB730").s().p("AgGAAQABgFAFgBQAHABgBAFQABAHgHgBQgFABgBgHg");
	this.shape_199.setTransform(225.9,84.45);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FDB730").s().p("AgGAAQABgFAFgBQAHABgBAFQABAHgHgBQgFABgBgHg");
	this.shape_200.setTransform(223.2,84.45);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_201.setTransform(207,84.45);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_202.setTransform(204.3,84.45);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_203.setTransform(201.625,84.45);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_204.setTransform(198.925,84.475);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_205.setTransform(196.225,84.475);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_206.setTransform(236.625,86.775);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_207.setTransform(233.9,86.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_208.setTransform(231.225,86.775);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_209.setTransform(228.525,86.775);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_210.setTransform(225.825,86.775);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FDB730").s().p("AgEAAQgBgEAFgBQAFABABAEQgBAGgFgBQgFABABgGg");
	this.shape_211.setTransform(223.15,86.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_212.setTransform(220.475,86.775);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FDB730").s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_213.setTransform(217.825,86.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FDB730").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_214.setTransform(215.075,86.775);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FDB730").s().p("AgGAAQABgFAFgBQAHABgBAFQABAHgHAAQgFAAgBgHg");
	this.shape_215.setTransform(212.4,86.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgFAAAAgGg");
	this.shape_216.setTransform(209.7,86.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_217.setTransform(207.025,86.775);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFgBQgEABAAgFg");
	this.shape_218.setTransform(204.325,86.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_219.setTransform(190.875,86.825);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_220.setTransform(193.575,86.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_221.setTransform(196.25,86.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgDABAAgEg");
	this.shape_222.setTransform(198.925,86.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FDB730").s().p("AgDAAQAAgEADAAQAEAAAAAEQAAAFgEgBQgDABAAgFg");
	this.shape_223.setTransform(201.625,86.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_224.setTransform(231.175,89.125);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_225.setTransform(228.5,89.125);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FDB730").s().p("AgGAAQABgGAFAAQAHAAgBAGQABAHgHAAQgFAAgBgHg");
	this.shape_226.setTransform(212.4,89.125);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_227.setTransform(215.1,89.125);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FDB730").s().p("AgEAAQgBgFAFAAQAFAAABAFQgBAGgFAAQgFAAABgGg");
	this.shape_228.setTransform(217.75,89.125);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_229.setTransform(220.45,89.125);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FDB730").s().p("AgDAAQgBgDAEAAQAFAAAAADQAAAEgFAAQgEAAABgEg");
	this.shape_230.setTransform(223.15,89.125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQABAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAEgEAAQgDAAAAgEg");
	this.shape_231.setTransform(225.825,89.125);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_232.setTransform(198.975,89.125);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FDB730").s().p("AgDAAQgBgDAEAAQAEAAABADQgBAEgEAAQgEAAABgEg");
	this.shape_233.setTransform(196.25,89.125);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FDB730").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_234.setTransform(193.575,89.125);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_235.setTransform(190.85,89.125);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FDB730").s().p("AgEAAQgBgEAFAAQAFAAABAEQgBAFgFAAQgFAAABgFg");
	this.shape_236.setTransform(201.65,89.125);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_237.setTransform(204.325,89.125);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_238.setTransform(207.025,89.125);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FDB730").s().p("AgGAAQABgFAFAAQAHAAgBAFQABAGgHAAQgFAAgBgGg");
	this.shape_239.setTransform(209.7,89.125);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_240.setTransform(185.525,89.125);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_241.setTransform(188.2,89.125);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_242.setTransform(142.475,100.775);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_243.setTransform(145.15,100.775);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_244.setTransform(147.85,100.775);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_245.setTransform(150.525,100.775);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_246.setTransform(201.625,100.775);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_247.setTransform(198.95,100.775);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_248.setTransform(196.275,100.775);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_249.setTransform(193.575,100.775);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_250.setTransform(190.875,100.775);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_251.setTransform(188.175,100.775);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_252.setTransform(185.525,100.775);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_253.setTransform(182.825,100.775);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_254.setTransform(166.725,100.775);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_255.setTransform(153.25,100.775);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_256.setTransform(155.925,100.775);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAQgDAAAAgEg");
	this.shape_257.setTransform(158.575,100.775);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_258.setTransform(161.25,100.775);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAABADQgBAEgEABQgDgBAAgEg");
	this.shape_259.setTransform(163.95,100.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FDB730").s().p("AgFAAQgBgGAGABQAGgBAAAGQAAAGgGAAQgGAAABgGg");
	this.shape_260.setTransform(180.15,100.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAAAgGg");
	this.shape_261.setTransform(177.475,100.775);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_262.setTransform(174.775,100.775);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_263.setTransform(172.1,100.775);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_264.setTransform(169.425,100.775);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_265.setTransform(153.225,98.425);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_266.setTransform(150.525,98.425);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_267.setTransform(204.35,98.45);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_268.setTransform(201.65,98.45);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FDB730").s().p("AgDAAQgBgEAEABQAEgBABAEQgBAEgEABQgEgBABgEg");
	this.shape_269.setTransform(198.95,98.45);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_270.setTransform(196.25,98.45);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FDB730").s().p("AgEAAQAAgFAEABQAFgBAAAFQAAAFgFABQgEgBAAgFg");
	this.shape_271.setTransform(193.575,98.45);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_272.setTransform(185.525,98.425);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FDB730").s().p("AgEAAQgBgFAFABQAFgBABAFQgBAFgFABQgFgBABgFg");
	this.shape_273.setTransform(190.85,98.45);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FDB730").s().p("AgGAAQABgGAFABQAHgBAAAGQAAAGgHABQgFgBgBgGg");
	this.shape_274.setTransform(188.2,98.45);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_275.setTransform(169.425,98.425);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_276.setTransform(155.925,98.425);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAgBQAAABABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_277.setTransform(158.625,98.45);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_278.setTransform(161.3,98.45);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_279.setTransform(164,98.45);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_280.setTransform(166.675,98.45);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FDB730").s().p("AgDAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAFAAQAGAAAAAFQAAAGgGAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_281.setTransform(182.8,98.45);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FDB730").s().p("AgFAAQAAgFAFABQAGgBAAAFQAAAFgGABQgFgBAAgFg");
	this.shape_282.setTransform(180.125,98.45);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FDB730").s().p("AgEAAQgBgFAFABQAFgBAAAFQAAAFgFABQgFgBABgFg");
	this.shape_283.setTransform(177.45,98.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_284.setTransform(174.75,98.45);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_285.setTransform(172.075,98.425);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_286.setTransform(161.275,96.125);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_287.setTransform(212.4,96.125);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_288.setTransform(209.7,96.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_289.setTransform(207.025,96.125);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_290.setTransform(204.325,96.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_291.setTransform(201.625,96.125);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FDB730").s().p("AgFAAQgBgGAGAAQAGAAABAGQgBAGgGABQgGgBABgGg");
	this.shape_292.setTransform(198.95,96.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FDB730").s().p("AgEAAQgBgFAFABQAFgBABAFQgBAFgFABQgFgBABgFg");
	this.shape_293.setTransform(190.85,96.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_294.setTransform(193.575,96.125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_295.setTransform(196.325,96.125);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_296.setTransform(164,96.125);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_297.setTransform(166.7,96.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_298.setTransform(169.35,96.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_299.setTransform(172.05,96.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_300.setTransform(174.75,96.125);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_301.setTransform(177.425,96.125);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_302.setTransform(180.125,96.125);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FDB730").s().p("AgFAAQABgFAEABQAGgBgBAFQABAFgGABQgEgBgBgFg");
	this.shape_303.setTransform(188.2,96.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_304.setTransform(185.525,96.125);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_305.setTransform(182.825,96.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_306.setTransform(215.1,96.125);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_307.setTransform(207,98.45);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_308.setTransform(150.55,103.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_309.setTransform(153.25,103.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_310.setTransform(155.925,103.125);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFgBQgEABAAgFg");
	this.shape_311.setTransform(158.625,103.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_312.setTransform(161.3,103.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_313.setTransform(163.975,103.125);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_314.setTransform(147.875,103.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_315.setTransform(145.2,103.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_316.setTransform(142.475,103.125);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_317.setTransform(139.8,103.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_318.setTransform(137.1,103.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_319.setTransform(134.425,103.125);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_320.setTransform(131.725,103.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_321.setTransform(129.025,103.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_322.setTransform(166.675,103.125);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FDB730").s().p("AgFAAQgBgFAGgBQAGABAAAFQAAAHgGAAQgGAAABgHg");
	this.shape_323.setTransform(169.35,103.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FDB730").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_324.setTransform(172.05,103.125);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_325.setTransform(174.725,103.125);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_326.setTransform(177.425,103.125);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_327.setTransform(180.125,103.125);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_328.setTransform(182.825,103.125);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_329.setTransform(185.5,103.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_330.setTransform(188.2,103.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_331.setTransform(193.575,103.125);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_332.setTransform(190.875,103.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_333.setTransform(145.2,105.425);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_334.setTransform(142.5,105.45);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_335.setTransform(139.825,105.425);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_336.setTransform(137.1,105.45);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_337.setTransform(134.425,105.425);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_338.setTransform(131.75,105.45);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_339.setTransform(129.025,105.425);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_340.setTransform(126.35,105.45);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_341.setTransform(123.675,105.425);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_342.setTransform(120.975,105.45);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_343.setTransform(118.275,105.425);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FDB730").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_344.setTransform(115.6,105.45);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_345.setTransform(112.9,105.425);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FDB730").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_346.setTransform(110.2,105.45);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_347.setTransform(153.225,105.425);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FDB730").s().p("AgDAAQAAgEADABQAEgBAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_348.setTransform(150.55,105.45);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_349.setTransform(147.85,105.425);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_350.setTransform(155.925,105.45);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_351.setTransform(158.6,105.425);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_352.setTransform(161.275,105.425);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_353.setTransform(163.975,105.425);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_354.setTransform(166.675,105.45);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_355.setTransform(169.375,105.425);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_356.setTransform(172.05,105.45);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FDB730").s().p("AgDAAQAAgEADABQAEgBABAEQgBAFgEAAQgDAAAAgFg");
	this.shape_357.setTransform(174.75,105.45);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAQgDAAAAgEg");
	this.shape_358.setTransform(177.425,105.425);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_359.setTransform(180.125,105.425);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_360.setTransform(185.5,105.425);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_361.setTransform(182.8,105.45);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_362.setTransform(172.1,107.75);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FDB730").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_363.setTransform(174.75,107.75);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_364.setTransform(169.375,107.775);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQABAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAEgEAAQgDAAAAgEg");
	this.shape_365.setTransform(166.675,107.775);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAgBAEQABAFgFAAQgEAAAAgFg");
	this.shape_366.setTransform(164,107.775);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FDB730").s().p("AgEAAQAAgDAEAAQAFAAgBADQABAEgFAAQgEAAAAgEg");
	this.shape_367.setTransform(161.3,107.775);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_368.setTransform(158.6,107.775);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_369.setTransform(155.925,107.775);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_370.setTransform(145.175,107.775);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FDB730").s().p("AgDAAQgBgDAEgBQAFABAAADQAAAEgFAAQgEAAABgEg");
	this.shape_371.setTransform(142.5,107.75);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_372.setTransform(139.825,107.775);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_373.setTransform(137.125,107.775);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FDB730").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_374.setTransform(134.425,107.775);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQABAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAEgEAAQgDAAAAgEg");
	this.shape_375.setTransform(131.725,107.775);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABABAAQgBABAAABQAAAAAAABQgBAAAAAAQgBAAgBABQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_376.setTransform(129.05,107.75);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_377.setTransform(126.325,107.775);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_378.setTransform(123.65,107.75);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_379.setTransform(120.975,107.775);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_380.setTransform(118.275,107.775);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_381.setTransform(115.575,107.775);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_382.setTransform(112.875,107.775);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_383.setTransform(110.2,107.75);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_384.setTransform(107.525,107.775);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FDB730").s().p("AgBAAIABgBQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_385.setTransform(104.8,107.75);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FDB730").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_386.setTransform(102.125,107.775);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_387.setTransform(99.425,107.775);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_388.setTransform(147.825,107.775);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_389.setTransform(150.55,107.75);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_390.setTransform(153.225,107.775);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_391.setTransform(252.7,73.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_392.setTransform(255.4,73.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_393.setTransform(258.1,73.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_394.setTransform(260.75,73.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_395.setTransform(250.025,73.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FDB730").s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_396.setTransform(247.325,73.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FDB730").s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_397.setTransform(244.65,73.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_398.setTransform(241.95,73.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FDB730").s().p("AgDAAQAAgDADgBQAEABAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_399.setTransform(239.275,73.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAQgDAAAAgEg");
	this.shape_400.setTransform(236.575,73.075);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_401.setTransform(233.9,73.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_402.setTransform(231.2,73.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_403.setTransform(228.525,73.075);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_404.setTransform(225.825,73.075);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_405.setTransform(263.475,72.825);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_406.setTransform(209.675,98.425);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_407.setTransform(212.475,77.475);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_408.setTransform(244.675,77.475);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_409.setTransform(241.975,77.475);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_410.setTransform(239.275,77.475);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_411.setTransform(236.575,77.475);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_412.setTransform(233.9,77.475);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_413.setTransform(247.35,77.475);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_414.setTransform(250.025,77.475);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_415.setTransform(252.7,77.475);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_416.setTransform(231.225,77.475);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_417.setTransform(215.1,77.45);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_418.setTransform(217.75,77.475);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAAEgEAAQgDAAABgEg");
	this.shape_419.setTransform(220.45,77.475);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_420.setTransform(223.15,77.475);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_421.setTransform(225.825,77.475);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_422.setTransform(228.525,77.475);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_423.setTransform(220.45,93.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_424.setTransform(217.775,93.775);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_425.setTransform(215.075,93.775);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FDB730").s().p("AgEAAQABgDADgBQAFABgBADQABAEgFAAQgDAAgBgEg");
	this.shape_426.setTransform(212.4,93.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_427.setTransform(209.7,93.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAHgGgBQgFABAAgHg");
	this.shape_428.setTransform(201.625,93.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAHgHgBQgFABAAgHg");
	this.shape_429.setTransform(204.3,93.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FDB730").s().p("AgDAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAFAAQAGAAAAAFQAAAGgGAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_430.setTransform(207,93.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_431.setTransform(185.55,93.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_432.setTransform(198.95,93.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_433.setTransform(196.325,93.775);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_434.setTransform(193.575,93.775);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FDB730").s().p("AgEAAQgBgEAFgBQAFABABAEQgBAGgFgBQgFABABgGg");
	this.shape_435.setTransform(190.85,93.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FDB730").s().p("AgFAAQABgEAEgBQAGABgBAEQABAGgGgBQgEABgBgGg");
	this.shape_436.setTransform(188.2,93.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBACQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_437.setTransform(172.1,93.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_438.setTransform(174.75,93.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_439.setTransform(177.45,93.775);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_440.setTransform(180.125,93.775);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_441.setTransform(182.825,93.775);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_442.setTransform(247.375,75.125);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_443.setTransform(250.025,75.15);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_444.setTransform(252.7,75.15);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_445.setTransform(255.35,75.15);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FDB730").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_446.setTransform(258,75.15);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_447.setTransform(244.625,75.125);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_448.setTransform(241.95,75.125);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FDB730").s().p("AgDAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAFAAQAGAAAAAFQAAAGgGAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_449.setTransform(239.25,75.15);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FDB730").s().p("AgFAAQABgFAEABQAGgBgBAFQABAFgGAAQgEAAgBgFg");
	this.shape_450.setTransform(236.6,75.15);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_451.setTransform(233.9,75.15);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FDB730").s().p("AgEAAQABgDADAAQAEAAAAADQAAAEgEAAQgDAAgBgEg");
	this.shape_452.setTransform(231.2,75.125);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_453.setTransform(228.525,75.125);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_454.setTransform(225.825,75.125);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_455.setTransform(223.125,75.125);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape_456.setTransform(220.45,75.15);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_457.setTransform(217.775,75.125);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_458.setTransform(233.9,79.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_459.setTransform(236.575,79.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_460.setTransform(239.275,79.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_461.setTransform(241.975,79.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_462.setTransform(244.675,79.825);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_463.setTransform(247.35,79.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_464.setTransform(217.775,79.825);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_465.setTransform(231.25,79.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_466.setTransform(228.575,79.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_467.setTransform(225.875,79.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FDB730").s().p("AgFAAQABgFAEAAQAGAAgBAFQABAGgGAAQgEAAgBgGg");
	this.shape_468.setTransform(223.2,79.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_469.setTransform(220.525,79.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_470.setTransform(207.025,79.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_471.setTransform(209.725,79.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_472.setTransform(212.4,79.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FDB730").s().p("AgDAAQAAgEADABQAEgBAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_473.setTransform(215.075,79.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FDB730").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_474.setTransform(228.525,82.125);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FDB730").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_475.setTransform(231.225,82.125);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_476.setTransform(233.925,82.125);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_477.setTransform(236.625,82.125);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_478.setTransform(239.3,82.125);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_479.setTransform(241.975,82.125);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_480.setTransform(244.675,82.125);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_481.setTransform(212.425,82.125);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_482.setTransform(209.725,82.15);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_483.setTransform(207.025,82.125);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FDB730").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_484.setTransform(204.35,82.15);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FDB730").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_485.setTransform(201.65,82.125);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FDB730").s().p("AgGAAQAAgGAGAAQAGAAABAGQgBAGgGABQgGgBAAgGg");
	this.shape_486.setTransform(225.85,82.15);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FDB730").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_487.setTransform(223.175,82.125);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_488.setTransform(220.475,82.125);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FDB730").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_489.setTransform(217.775,82.125);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FDB730").s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgGg");
	this.shape_490.setTransform(215.075,82.125);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_491.setTransform(139.75,110.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_492.setTransform(137.075,110.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBABQAAgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_493.setTransform(134.4,110.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_494.setTransform(131.7,110.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBABQAAgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_495.setTransform(129.025,110.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_496.setTransform(126.375,110.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_497.setTransform(123.675,110.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_498.setTransform(120.975,110.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FDB730").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_499.setTransform(118.3,110.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_500.setTransform(142.475,110.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_501.setTransform(145.175,110.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FDB730").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_502.setTransform(147.85,110.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FDB730").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_503.setTransform(150.55,110.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FDB730").s().p("AgCAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_504.setTransform(153.225,110.125);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FDB730").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_505.setTransform(155.9,110.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FDB730").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_506.setTransform(158.6,110.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_507.setTransform(164,110.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FDB730").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_508.setTransform(161.3,110.1);

	var maskedShapeInstanceList = [this.shape,this.instance_1,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape}]}).to({state:[]},46).wait(1));

	// Layer_4
	this.instance_2 = new lib.flash0ai();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},46).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320.6,127);
// library properties:
lib.properties = {
	id: 'E56E5AEB5C5DD641914503FEEF217389',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/flash0ai.png", id:"flash0ai"}
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
an.compositions['E56E5AEB5C5DD641914503FEEF217389'] = {
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