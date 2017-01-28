(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.RoundTreeGrowing = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Tree
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1D21").ss(8,1).p("AAAgWIAAAt");
	this.shape.setTransform(276,285.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B1D21").ss(8,1).p("AAAg0IAABp");
	this.shape_1.setTransform(276,282.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1B1D21").ss(8,1).p("AAAhSIAACl");
	this.shape_2.setTransform(276,279.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1B1D21").ss(8,1).p("AAAhwIAADh");
	this.shape_3.setTransform(276,276.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B1D21").ss(8,1).p("AAAiOIAAEd");
	this.shape_4.setTransform(276,273.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1B1D21").ss(8,1).p("AAAisIAAFZ");
	this.shape_5.setTransform(276,270.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1B1D21").ss(8,1).p("AAAjKIAAGV");
	this.shape_6.setTransform(276,267.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1B1D21").ss(8,1).p("AAAkkIAAJJ");
	this.shape_7.setTransform(276,258.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1B1D21").ss(8,1).p("AAAlCIAAKF");
	this.shape_8.setTransform(276,255.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1B1D21").ss(8,1).p("AAAlgIAALB");
	this.shape_9.setTransform(276,252.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1B1D21").ss(8,1).p("AAAmIIAAMR");
	this.shape_10.setTransform(276,248.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1B1D21").ss(8,1).p("AAAmmIAANN");
	this.shape_11.setTransform(276,245.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1B1D21").ss(8,1).p("AAAnEIAAOJ");
	this.shape_12.setTransform(276,242.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1B1D21").ss(8,1).p("AAAniIAAPF");
	this.shape_13.setTransform(276,239.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1B1D21").ss(8,1).p("AAAoAIAAQB");
	this.shape_14.setTransform(276,236.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1B1D21").ss(8,1).p("AAApOIAASd");
	this.shape_15.setTransform(276,228.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#194319").s().p("AmUGVQioioAAjtQAAjsCoioQCninDtgBQDtABCoCnQCoCoAADsQAADtioCoQioCojtgBQjtABiniog");
	this.shape_16.setTransform(275.5,169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;