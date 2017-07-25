//Current Project Objects

//playerObject -sprites is moveSet- array of sprite objects with x,y h,w co-ordinates mapping images on sprite sheet
//playerObject -img is sprite sheet image //health is character health as integer//power is an object with various attributes -currently unmade
function playerObject(){this.id;this.sprites=[];this.img= new Image();this.health;this.power;};


//frame of spriteAnimation 
function spriteObject(){this.x;this.y;this.w;this.h;};
//spriteMaker -processes 4 arrays of coordinates x,y x1,y1 into array of objects with x,y,w,h attributes
function spriteMaker(x,y,x1,y1){var a=[];for (let i=0;i<x.length;i++){let sourceA=new spriteObject();sourceA.x=x[i];sourceA.y=y[i];sourceA.w=x1[i]-x[i];sourceA.h=y1[i]-y[i];a.push(sourceA);}return a;};

















//Model Functions
//Objects

	//stringArrayObject - takes string, creates object with string, string characters as array,string character codes as array, length attributes
function stringArrayObject(s){this.t=s;let a=[];let c=[];this.a=stringToChrArray(s,a);this.c=stringToCodeArray(s,c);this.length=s.length;}
	//StringToArray-used to create stringArrayObject-takes string returns array of characters
function stringToChrArray(s,a){if(!s||!a){return false;};for(var i=0;i<s.length;i++){a.push(s.charAt(i));};return a;}
function stringToCodeArray(s,a){if(!s||!a){return false;};for(var i=0;i<s.length;i++){a.push(s.charCodeAt(i));};return a;}

	//makeImage - takes string, returns image object with string as source
function makeImage(s){if(!s){return false;}let img = new Image();img.src = s;return img;}
	//convertStringArrayToImageArray - takes array of strings, returns array of image objects with string array values as source
function convertStringArrayToImageArray(s){if(!s||!s[0]){return false;};var g=[];for (let i=0;i<s.length;i++){g.push(makeImage(s[i]));}return g;}

//textPresent-use regular expresseion to test to see if e is in t
function textPresent(e,t){var patt1=new RegExp(e);return patt1.test(t);}
function textAtEnd(e,t){var patt1=new RegExp(e+"$");return patt1.test(t);}


//DATES- strings as "October 13, 1975 11:13:00"
function convertStringToDate(s){var d=new Date(s);return d;}
function convertStringArrayToDateArray(s){if(!s||!s[0]){return false;};var g=[];for (let i=0;i<s.length;i++){g.push(convertStringToDate(s[i]));}return g;}
function compareStringDates(x,y){var d1 = new Date(x);var d2 = new Date(y);return compareDates(d1,d2);}
function compareDates(x,y){if(x<y){return 1;}else if(x=y){return 2;}else if(x>y){return 3;}else{return false;};}


	//circleArray-array length, index of current position, direction -1,+1
function circleArrayIndex(a,i,d){if(!a){return false;};if(a==1){return i;};if(i==0&&d<0){return a-1;};if(i==a-1&&d>0){return 0;};return i+d;}
	//Generate Random Data 
function getRandomIntInclusive(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(Math.random() * (max - min + 1)) + min;}

//Collision Detection
	//bounceIN-object x,y target topLeft,bottomRight, functions returns 1L 2R 3T 4B Fail=0
function bounceIN(x,y,x1,y1,x2,y2){if (x<=x1){return 1;};if (x>=x2){return 2;};if (y<=y1){return 3;};if (y>=y2){return 4;}; return 0;}
	
	//Ball vs Ball collision-xyradius against x,y,radius
function clickValidateBall(x,y,r,x1,y1,r1){
	if(!b){return false;}	
	let dx=x1-x;
	let dy=y1-y;
	let dis=Math.sqrt(dx*dx+dy*dy);	
	if (dis<=r+r1){
		return true;
	}
	return false;
}

//Model Viewer Intersection

//Find Display Details
function FindWidth(){let winW;
	if (document.body && document.body.offsetWidth) {winW = document.body.offsetWidth;}
	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {winW = document.documentElement.offsetWidth;}
	if (window.innerWidth && window.innerHeight) {winW = window.innerWidth;}
	return winW;
}

function FindHeight(){
	let winH;
	if (document.body && document.body.offsetHeight) {winH = document.body.offsetWidth;}
	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetHeight) {winH = document.documentElement.offsetHeight;}
	if (window.innerHeight) {winH = window.innerHeight;}
	return winH;
}


//Viewer Functions
//Style
function strokeDesign(ctx,w,lC,lJ,c,ga,lD1,lD2,dO,mL){
	ctx.lineWidth=w;
	//line Caps - "butt" "round" "square"
	ctx.lineCap=lC;
	//line Join - "bevel" "round" "miter"
	ctx.lineJoin=lJ;
	//rgb
	ctx.strokeStyle=c;
	//1-0
	ctx.globalAlpha=ga;
	ctx.setLineDash([lD1, lD2]);
	ctx.lineDashOffset = dO;
	ctx.miterLimit = mL;
}
function fillDesign(ctx,c,ga){ctx.fillStyle=c;ctx.globalAlpha=ga;}

//Canvas-Text
function textMetric(ctx,s){let text = ctx.measureText(s);return text.width;}
function TextFont(ctx,s,f){ctx.font=s+'px '+f;}
function strokeText(txt,ctx,x,y,ta){ctx.textAlign=ta;ctx.strokeText(txt,x,y);}
function fillText(txt,ctx,x,y,ta){ctx.textAlign=ta;ctx.fillText(txt,x,y);}

//Path Object
function pathObject(){this.x=[];this.y=[];this.z=[];};
//5 point Star Path
function star5uPath(p,x,y,x1,y1){p.x=[x,x1,x,x1/2,x1];p.y=[y1/3,y1/3,y1,x,y1];return p;}
function star5dPath(p,x,y,x1,y1){p.x=[x,x1,x,x1/2,x1];p.y=[y1/5*3,y1/5*3,x,y1,x];return p;}

//directional arrow paths
function leftPointPath(p,x,y,x1,y1){p.x=[x1,x,x1,x1/2];p.y=[y,y1/2,y1,y1/2];return p;}
function rightPointPath(p,x,y,x1,y1){p.x=[x,x1,x,x1/2];p.y=[y,y1/2,y1,y1/2];return p;}
function upPointPath(p,x,y,x1,y1){p.x=[x,x1/2,x1,x1/2];p.y=[y1,y,y1,y1/2];return p;}
function downPointPath(p,x,y,x1,y1){p.x=[x,x1/2,x1,x1/2];p.y=[y,y1,y,y1/2];return p;}


function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 12768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, 
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}
function maxOfArray(arr) {
  var max = 0;
  var QUANTUM = 12768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submax = Math.max.apply(null, 
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    max = Math.max(submax, max);
  }

  return max;
}


//Canvas-Line
function strokeLine(ctx,x,y,x1,y1){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x1,y1);ctx.stroke();}
function strokeLongLine(ctx,p){if(p.x.length<3||p.y.length<3){return false;}let len=p.x.length;ctx.beginPath();ctx.moveTo(p.x[0],p.y[0]);for(let i=1;i<len;i++){ctx.lineTo(p.x[i],p.y[i]);}ctx.stroke();}

//Canvas-Curve
function strokeBelCurve(ctx,x,y,x1,y1,x2,y2){ctx.beginPath();ctx.bezierCurveTo(x, y, x1, y1, x2, y2);ctx.stroke();}
function fillBelCurve(ctx,x,y,x1,y1,x2,y2){ctx.beginPath();ctx.bezierCurveTo(x, y, x1, y1, x2, y2);ctx.closePath();ctx.fill();}	
	
//Canvas-Ball
function strokeBall(ctx,x,y,r){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2,true);ctx.stroke();}
function fillBall(ctx,x,y,r){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2,true);ctx.fill();}

//Canvas-Rectangle
function strokeR(ctx,x,y,x1,y1){ctx.strokeRect(x,y,x1,y1);}
function fillR(ctx,x,y,x1,y1){ctx.fillRect(x,y,x1,y1);}

//Canvas-Triangle
function strokeTriangle(ctx,x,y,x1,y1,x2,y2){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x1,y1);ctx.lineTo(x2,y2);ctx.closePath();ctx.stroke();}
function fillTriangle(ctx,x,y,x1,y1,x2,y2){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x1,y1);ctx.lineTo(x2,y2);ctx.closePath();ctx.fill();}

//Canvas-Poly
function strokePoly(ctx,p){if(p.x.length<3||p.y.length<3){return false;};let len=p.x.length;ctx.beginPath();ctx.moveTo(p.x[0],p.y[0]);for(let i=1;i<len;i++){ctx.lineTo(p.x[i],p.y[i]);}ctx.closePath();ctx.stroke();}

function fillPoly(ctx,p){if(p.x.length<3||p.y.length<3){return false;};let len=p.x.length;ctx.beginPath();ctx.moveTo(p.x[0],p.y[0]);for(let i=1;i<len;i++){ctx.lineTo(p.x[i],p.y[i]);}ctx.closePath();ctx.fill();}

//Canvas-Image
function getOnePx(ctx,x,y){var d=ctx.getImageData(x,y,1,1);return d;}
function drawImage(ctx,img,x,y){ctx.drawImage(img,x,y,img.width,img.height);}
function drawImageScale(ctx,img,x,y,w,h){ctx.drawImage(img,x,y,w,h);}
function drawImageSlice(ctx,img,sX,sY,sW,sH,dX,dY,dW,dH){ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH)};
function drawImageZoom(ctx,img,z,sX,sY,x,y,w,h){if(z==0||sX>=z||sY>=z){return false;}ctx.drawImage(img,img.width/z*sX,img.height/z*sY,img.width/z,img.height/z,x,y,w,h)};
function iSprite(ctx,img,s,x,y,m){drawImageSlice(ctx,img, s.x, s.y, s.w, s.h, x, y, s.w*m, s.h*m);}
function iPattern(ctx,src,x,y,x1,y1,r){
	let i = new Image();
	i.src = src;
	i.onload = function() {
	//	r values = "repeat" (both directions),"repeat-x" (horizontal only),"repeat-y" (vertical only), or "no-repeat"
		let pattern = ctx.createPattern(i, r);
		ctx.fillStyle = pattern;
		ctx.fillRect(x, y, x1, y1);
	};
}


//Canvas-Transforms
function rotOb(ctx,a){ctx.rotate(a * Math.PI / 180);}
function scOb(ctx,x,y){ctx.scale(100, 100);}
function resetTrans(ctx){ctx.setTransform(1, 0, 0, 1, 0, 0);}
function transformfOb(ctx,horScaling,horSkew,verSkew,verScaling,horMoving,verMoving){ctx.setTransform(horScaling, horSkew, verSkew, verScaling, horMoving, verMoving);}
function translateOb(ctx,x,y){ctx.translate(50, 50);}

//Canvas-Skins
function linGradient(ctx,x,y,x1,y1,c,c1,x2,y2,x3,y3){
	let gradient = ctx.createLinearGradient(x2,y2,x3,y3);
	gradient.addColorStop(0,c);
	gradient.addColorStop(1,c1);
	ctx.fillStyle = gradient;
	ctx.fillRect(x,y,x1,y1);
}

function radGradient(ctx,x,y,r,x1,y1,r1,c,c1,x2,y2,x3,y3){
	let gradient = ctx.createRadialGradient(x, y, r, x1, y1, r1);
	gradient.addColorStop(0, c);
	gradient.addColorStop(1, c1);
	ctx.fillStyle = gradient;
	ctx.fillRect(x2, y2, x3, y3);	
}




//Canvas-Shadow
function drawShadow(ctx,c,b,x,y){ctx.shadowColor = c;ctx.shadowBlur = b;ctx.shadowOffsetY = y;ctx.shadowOffsetX = x;}

//Canvas-Erase
	//ClearSpace-context,topLeft,bottomRight
function clearSpace(ctx,x,y,x1,y1){ctx.clearRect(x,y,x1,y1);}

//create DOM elements 
	//makeElement-Location to add DOM Element, Element name, Element ID
function makeElement(LocName,EleName,Ident){var holder = document.createElement(EleName);holder.id = Ident;LocName.appendChild(holder);}
	//makeAttribute-Location to add attribute, attribute name, attribute value
function makeAttribute(LocName,AttName,AttVal){LocName.setAttribute(AttName,AttVal);}
	//makeCanvas-Location to add canvas,element Id, width,height,top,left,rgba
function makeCanvas(LocName,Ident,x,y,l,t,z,RGBAlpha){
	makeElement(LocName,"canvas",Ident);
	makeAttribute(document.getElementById(Ident),"width",x);
	makeAttribute(document.getElementById(Ident),"height",y);
	setLeft(Ident,l);
	setTop(Ident,t);
	setZin(Ident,z);
	setBC(Ident,RGBAlpha);
	let c = document.getElementById(Ident);
	let ctx = c.getContext('2d');
	//add mouse Events
	mEvents(Ident);
}

//set DOM attributes
function setHeight(Ident,h){document.getElementById(Ident).style.height=h+"px";}
function setWidth(Ident,w){document.getElementById(Ident).style.width=w+"px";}
function setZin(Ident,z){document.getElementById(Ident).style.zIndex=z;}
function setTop(Ident,t){document.getElementById(Ident).style.top=t+"px";}
function setLeft(Ident,lft){document.getElementById(Ident).style.left=lft+"px";}
function setBC(Ident,bc){document.getElementById(Ident).style.backgroundColor=bc;}

//Viewer Controller Intersection
function oEvents(Ident){
var e = document.getElementById(Ident);
	e.addEventListener('load', oLoad, false);
}
	//mEvents-Id of Dom Element Address
function mEvents(Ident){
var e = document.getElementById(Ident);
	e.addEventListener('mouseenter', mEnter, false);
	e.addEventListener('mouseover', mOver, false);
	e.addEventListener('mousemove', mMove, false);
	e.addEventListener('mousedown', mDown, false);
	e.addEventListener('mouseup', mUp, false);
	e.addEventListener('auxclick', mAC, false);
	e.addEventListener('click', mClick, false);
	e.addEventListener('dblclick', mDClick, false);
	e.addEventListener('contextmenu', mCM, false);
	e.addEventListener('wheel', mWheel, false);
	e.addEventListener('mouseleave', mLeave, false);
	e.addEventListener('mouseout', mOut, false);
	e.addEventListener('select', mSelect, false);
	e.addEventListener('pointerlockchange', mPLC, false);
	e.addEventListener('pointerlockerror', mPLE, false);
}
	//tEvents-Added to document body
function tEvents(l) {
	l.addEventListener("touchstart", handleStart, false);
	l.addEventListener("touchend", handleEnd, false);
	l.addEventListener("touchcancel", handleCancel, false);
	l.addEventListener("touchleave", handleEnd, false);
	l.addEventListener("touchmove", handleMove, false);
}

function kEvents(l){
	l.addEventListener("keydown",kDown,false);
	l.addEventListener("keypress",kPress,false);
	l.addEventListener("keyup",kUp,false);
}

//set Display Quality
	//Make Element full screen
function fullscreen(Ident){var el=document.getElementById(Ident);if(el.webkitRequestFullScreen){el.webkitRequestFullScreen();}else{el.mozRequestFullScreen();}}

//Controller Functions
	//
function oLoad(e){//console.log("KeyDown");
};

	//Keyboard Functions
function kDown(e){//console.log("KeyDown");
};
function kPress(e){//console.log("KeyPress");
};
function kUp(e){//console.log("KeyUp");
};

	//Mouse Functions
function mEnter(e){//console.log("MouseEnter");
};
function mOver(e){//console.log("mouseOver");
};
function mMove(e){//console.log("MouseMove");
};

function mDown(e){//console.log("MouseDown");
};

function mUp(e){//console.log("MouseUp");
};
function mAC(e){//console.log("AuxClick");
};
function mClick(e){//console.log("Click");
};
function mDClick(e){//console.log(//"DoubleClick");
};
function mCM(e){//console.log("ContextMenu");
};
function mWheel(e){//console.log("Wheel");
};
function mLeave(e){//console.log("MouseLeave");
};
function mOut(e){//console.log("MouseOut");
};
function mSelect(e){//console.log("MouseSelect");
};
function mPLC(e){//console.log("PointerLockChange");
};
function mPLE(e){//console.log("PointerLockError");
};

	//Touch Functions-set for 1 touch
var ongoingTouches = new Array;
function handleStart(e) {
	var touches = e.changedTouches;
	if(touches.length>0){
		e.preventDefault();
		let x = touches[0].pageX;
		let y = touches[0].pageY;
		ongoingTouches.push(touches[0]);
	}		
}
function handleMove(e) {
	var touches = e.changedTouches;
	if(touches.length>0){
		var x = ongoingTouches[0].pageX;
		var y = ongoingTouches[0].pageY;
		ongoingTouches.splice(0, 1, touches[0]);// swap in the new touch record
	}
}
function handleEnd(evt) {
	var touches = evt.changedTouches;
	if(touches.length>0){
		var x = touches[0].pageX;
		var y = touches[0].pageY;
	//	ongoingTouches.splice(0, 1, touches[0]);		// swap in the new touch record
	//	ongoingTouches=[];
	}	
}
function handleCancel(e) {
	e.preventDefault();
	var touches = e.changedTouches;
	ongoingTouches=[];
}