window.onscroll = function () { window.scrollTo(0, 0); };
function init(){    
	setZin("menu",-9);
	let x=FindWidth();
	let y=FindHeight();
	let mx=Math.floor(x/2);
	let my=Math.floor(y/2);	
	//Make Canvas Element
	makeCanvas(document.body,"canvas1",x,y,0,0,-1,"rgba(255,0,0,1)");
	makeCanvas(document.body,"canvas2",x,y,0,0,-1,"rgba(44,244,44,1)");
	makeCanvas(document.body,"canvas3",x,y,0,0,-1,"rgba(44,44,244,1)");
	makeCanvas(document.body,"canvas4",x,y,0,0,-1,"rgba(244,44,244,1)");

	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
	
	/**
	TextFont(btx,x/y*30,"Helvetica");
	fillDesign(btx,"rgb(255,0,255)",1);
	fillText("Select Image",btx,mx,my,"center");
	**/
	setTop("fileLink",y/2);
	setLeft("fileLink",x/4);
	setZin("rTrigger",-10);
	setZin("downloadWrap",-10);
	
	setZin("fileLink",3);
	
}

function mainState(){
	setZin("fileLink",-1);
	setZin("canvas1",2);
	setZin("canvas2",0);
	setZin("canvas3",2);
	setZin("rTrigger",3);
	
	let x=FindWidth();
	let y=FindHeight();
	let mx=Math.floor(x/2);
	let my=Math.floor(y/2);
	
	
	
	setLeft("rTrigger",x/2);
	setWidth("rTrigger",x/4);
	setTop("rTrigger",y/10*8);









	
	//Make Canvas Element
	let a = document.getElementById('canvas3');
	let atx = a.getContext('2d');
	
	
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
	
	let c = document.getElementById('canvas2');
	let ctx = c.getContext('2d');
	c.width=mx;
	
	let q = document.getElementById('canvas4');
	let qtx = q.getContext('2d');
	
	a.width=mx;
	setLeft("canvas3",mx);
	
	
	
	
	TextFont(atx,18,"Helvetica");
	fillDesign(atx,"rgb(255,255,255)",1);
	let i = document.getElementById('work');
	let m = i.width;
	let n = i.height;
	let tlock=false;

	q.height=n;
	q.width=m;
	setZin("canvas4",-9);
	
	iWidth=i.width+" px";
	iHeight=i.height+" px";
	fillText("File Name:",atx,10,y/20,"left");
	fillText(iName,atx,10,y/20*2,"left");
	fillText("File Size:",atx,10,y/20*3,"left");
	fillText(iSize,atx,10,y/20*4,"left");
	fillText("Image Width:",atx,10,y/20*5,"left");
	fillText(iWidth,atx,10,y/20*6,"left");
	fillText("Image Height:",atx,10,y/20*7,"left");
	fillText(iHeight,atx,10,y/20*8,"left");

	fillText("Details are sourced from the image file.",atx,10,y/20*11,"left");
	console.log(iWidth);
	console.log(iHeight);

	
	// 	Display image - not subject to review - reviewed image is hidden with z index	
	if (m>mx){	b.width=mx; 		tlock=true;}
	else{		b.width=m; }
	
	if (n>y){	b.height=y;		tlock=true;}
	else{		b.height=n;}
	
	if(tlock){	
		fillText("The image to the left has been resized to fit the window.",atx,10,y/20*10,"left");
		fillText("The full image will be reviewed for colour variation and frequency.",atx,10,y/20*12,"left");}
	else{fillText("The original image is presented to the left.",atx,10,y/20*10,"left");
		fillText("The image will be reviewed for colour variation and frequency.",atx,10,y/20*12,"left");}

	drawImageSlice(btx,i,0,0,i.width,i.height,0,0,b.width,b.height);
	drawImageSlice(qtx,i,0,0,i.width,i.height,0,0,i.width,i.height);
	
}

function reviewFindings(c,ctx,x,y){
	let a = document.getElementById('canvas3');
	let atx = a.getContext('2d');
	
	fillText("Variations:  ",atx,10,y/20*13,"left");
	fillText(rLog.length,atx,10,y/20*14,"left");
	
	//timeStart1(a,atx,x,y);
	findMAX(a,atx,x,y);
//	clearImagesPx(c,ctx,x,y);
//	clearImagesPx2(c,ctx,x,y);
//	clearImagesPx3(c,ctx,x,y);
//	clearImagesPx4(c,ctx,x,y);
//	clearImagesPx5(c,ctx,x,y);
//	clearImagesPx6(c,ctx,x,y);
//	clearImagesPx7(c,ctx,x,y);
//	clearImagesPx8(c,ctx,x,y);
//	clearImagesPx9(c,ctx,x,y);	
//	clearImagesPx22(c,ctx,x,y);	
//	clearImagesPx23(c,ctx,x,y);		
//	clearImagesPx24(c,ctx,x,y);			
//	clearImagesPx25(c,ctx,x,y);			
//	clearImagesPx26(c,ctx,x,y);			
//	clearImagesPx27(c,ctx,x,y);			
//	clearImagesPx28(c,ctx,x,y);	
//	clearImagesPx29(c,ctx,x,y);				
//	clearImagesPx30(c,ctx,x,y);				
	
displayColorLog();			
displayDownloadLink();
	}

function displayColorLog(){	
	setZin("menu",9);
	var k=0;
	console.log(o2Log);
	if(o2Log.length>255){k=255;}
	else{k=o2Log.length;}
	for (let i=0;i<k;i++){
		u=o2Log[i];
		
		rLog[u]=rLog[u];
		gLog[u]=gLog[u];
		bLog[u]=bLog[u];
		let c="rgb("+rLog[u]+","+gLog[u]+","+bLog[u]+")";
		
		addDiv(c,cLog[u],u,rLog[u],gLog[u],bLog[u]);		
	}
	for (let i=0;i<k;i++){
		o2Log.shift();
	}
	menuTrack=1;
	
}

function displayDownloadLink(){
	let x=FindWidth();
	let y=FindHeight();

	setZin("downloadWrap",5);
	setLeft("downloadWrap",x/5*3);
	setWidth("downloadWrap",x/20);
	setTop("downloadWrap",y/10*8);
	

}


function displayUpdate1(a,atx,x,y){
	
	let colHold="RGB("+rLog[indexCount]+","+gLog[indexCount]+","+bLog[indexCount]+")";
	
	fillText("Most Common Colour:",atx,10,y/20*15,"left");
	fillText(colHold,atx,10,y/20*16,"left");
	fillText("Frequency Count:",atx,10,y/20*17,"left");
	fillText(minder1,atx,10,y/20*18,"left");
	fillR(atx,256,y/20*15-2,55,55);
	fillDesign(atx,colHold,1);
	fillR(atx,258,y/20*15,50,50);
		
}














function wipeBody(){let len=document.body.childNodes.length;for (let i=0;i<len;i++){document.body.removeChild(document.body.firstChild);}}
