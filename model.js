window.URL = window.URL || window.webkitURL;
var mf=0;
var minder1=0;
var indexCount=0;
if (window.Worker) {

            wW = new Worker("webWorker.js");
	}		
	else {
        console.log("Web worker didn't work...");
    }
	
var 	fileSelect = document.getElementById("fileSelect"),
		fileElem = document.getElementById("fileElem"),
		fileList = document.getElementById("fileList"),
		rTrigger = document.getElementById("rTrigger"),
		dTrigger = document.getElementById("dTrigger"),
		iName="",
		iSize="",
		iWidth="",
		iHeight="",
		dot,
		tData,	
		tempX=0, 
		tempY=0,
		minder=0;
		rLog=[],
		gLog=[],
		bLog=[],
		aLog=[],
		hLog=[],
		sLog=[],
		lLog=[];
		cLog=[];
		tLog=[];
		oLog=[];
		o2Log=[];
		hslLog=[];
function handleFiles(files) {
	if (!files.length) {
		fileList.innerHTML = "<p>No files selected!</p>";
	} 
	else {
		var img = document.createElement("img");
		img.id="work";
		img.src = window.URL.createObjectURL(files[0]);
		iName=files[0].name;
		iSize=files[0].size + " bytes";

		img.onload = function() {
			window.URL.revokeObjectURL(this.src);
			document.body.appendChild(img);

			mainState();
		}
	}
}

function getOnePx(ctx,x,y){var d=ctx.getImageData(x,y,1,1);return d;}


function addDiv(c,g,i,r1,g1,b1){
	i=i+1;	
	var mWrap=document.getElementById("menu");
	var m = document.createElement("div");        // Create a <button> element
	m.addEventListener('click', divWipe, false);
	m.setAttribute("id",i);

	m.style.backgroundColor=c;
	var t = document.createTextNode(i+":	"+c+"		Frequency:  "+g);       // Create a text node
	m.style.color="#000000";
	m.appendChild(t);                                // Append the text to <button>

	var w = document.createElement("div");        // Create a <button> element
	w.style.backgroundColor=c;
	var q = document.createTextNode(i+":	"+c+"		Frequency:  "+g);       // Create a text node
	w.style.color="#FFFFFF";
	w.appendChild(q);                                // Append the text to <button>

	m.appendChild(w);
	mWrap.appendChild(m);
}



function divWipe(e){
		let b = document.getElementById('canvas1');
		let btx = b.getContext('2d');
		let frame = btx.getImageData(0, 0, b.width, b.height);
		let l = frame.data.length / 4;
		i=e.target.id;
		if(i){
			for (let j = 0; j < l; j++) {
				let r = frame.data[j * 4 + 0];
				let g = frame.data[j * 4 + 1];
				let b = frame.data[j * 4 + 2];
				if (r==rLog[i-1] && g==gLog[i-1] && b==bLog[i-1]){
					frame.data[j * 4 + 3] = 0;
				}
				else{
					frame.data[j * 4 + 0] = r;
					frame.data[j * 4 + 1] = g;
					frame.data[j * 4 + 2] = b;					
				}
			}	
		}
    btx.putImageData(frame, 0, 0); 
	document.getElementById("menu").removeChild(document.getElementById(i));
	menuTrack++;
	if(menuTrack>185){displayColorLog();}
	
}
var menuTrack=0;

function download(e) {
	var d=document.getElementById('canvas1')
	var dt = d.toDataURL('image/png');
	console.log(dt);
	this.href = dt;
};




function clearImagesPx(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		if (r==rLog[indexCount] && g==gLog[indexCount] && b==bLog[indexCount]){
        frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
    btx.putImageData(frame, 0, 0); 
}


function clearImagesPx2(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		if (r===rLog[indexCount] || g===gLog[indexCount] || b===bLog[indexCount]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx3(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		if (r>rLog[indexCount] || g>gLog[indexCount] || b>bLog[indexCount]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}




function clearImagesPx4(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		if (r<rLog[indexCount] && g<gLog[indexCount] && b<bLog[indexCount]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
	if (b.width>x||b.height>y){
		b.width=x/2;
		b.height=y;
	}
}


function clearImagesPx5(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		if (r>rLog[indexCount] && g>gLog[indexCount] && b>bLog[indexCount]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
	if (b.width>x||b.height>y){
		b.width=x/2;
		b.height=y;
	}
}


function clearImagesPx6(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		if (r>rLog[indexCount] || g>gLog[indexCount] || b>bLog[indexCount]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
	if (b.width>x||b.height>y){
		b.width=x/2;
		b.height=y;
	}
}


function clearImagesPx8(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[2]<hsl2[2]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}
function clearImagesPx9(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[2]>hsl2[2]){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx22(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[2]>.75 && hsl[2]<.8){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = 0;
			frame.data[i * 4 + 1] = 0;
			frame.data[i * 4 + 2] = 0;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx23(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
			frame.data[i * 4 + 0] = b;
			frame.data[i * 4 + 1] = 0;
			frame.data[i * 4 + 2] = r;					

    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx24(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[0]>.1 && hsl[0]<.9){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = 0;
			frame.data[i * 4 + 1] = 0;
			frame.data[i * 4 + 2] = 0;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}
function clearImagesPx25(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[1]>.15 && hsl[1]<.2){
			frame.data[i * 4 + 3] = 25;
		}
		else if (hsl[0]>.5 && hsl[0]<.6){
			frame.data[i * 4 + 3] = 50;
		}
		else if (hsl[2]>.65 && hsl[2]<.95){
			frame.data[i * 4 + 3] = 75;
		}
		
		else{
			frame.data[i * 4 + 0] = 0;
			frame.data[i * 4 + 1] = 0;
			frame.data[i * 4 + 2] = 0;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx26(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[2]>=0 && hsl[2]<=.4){
			frame.data[i * 4 + 3] = 10;
		}
		else if (hsl[2]>.4 && hsl[2]<=.5){
			frame.data[i * 4 + 3] = 25;
		}
		else if (hsl[2]>.5 && hsl[2]<=.6){
			frame.data[i * 4 + 3] = 50;
		}
		else if (hsl[2]>.6 && hsl[2]<=.7){
			frame.data[i * 4 + 3] = 75;
		}
		else if (hsl[2]>.7 && hsl[2]<=1){
			frame.data[i * 4 + 3] = 100;
		}
		
			frame.data[i * 4 + 0] = 100;
			frame.data[i * 4 + 1] = 20;
			frame.data[i * 4 + 2] = 150;					
		
    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx27(c,ctx,x,y){
	let hsl2 = convertRGB2HSL(rLog[indexCount],gLog[indexCount],bLog[indexCount]);
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);


		if (hsl[0]>=0 && hsl[0]<=.2){
			frame.data[i * 4 + 3] = 10;
		}
		else if (hsl[0]>.2 && hsl[0]<=.4){
			frame.data[i * 4 + 3] = 25;
		}
		else if (hsl[0]>.4 && hsl[0]<=.6){
			frame.data[i * 4 + 3] = 50;
		}
		else if (hsl[0]>.6 && hsl[0]<=.8){
			frame.data[i * 4 + 3] = 75;
		}
		else if (hsl[0]>.8 && hsl[0]<=1){
			frame.data[i * 4 + 3] = 100;
		}
		
			frame.data[i * 4 + 0] = 0;
			frame.data[i * 4 + 1] = 20;
			frame.data[i * 4 + 2] = 0;					
		
    }
	btx.putImageData(frame, 0, 0); 
}

function clearImagesPx28(c,ctx,x,y){
	
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);
//			hsl[0]=.94;
//			hsl[1]=1;
			hsl[0]=hsl[0]+.04;
			hsl[1]=hsl[1]+.04;
			hsl[2]=hsl[2]+.04;
		
		
		//		hsl[2]=.4;
		let hsl2 = convertHSL2RGB(hsl[0],hsl[1],hsl[2]);
		
		

		
			frame.data[i * 4 + 0] = hsl2[0];
			frame.data[i * 4 + 1] = hsl2[1];
			frame.data[i * 4 + 2] = hsl2[2];					
		
    }
	btx.putImageData(frame, 0, 0); 
	
}

function clearImagesPx29(c,ctx,x,y){
	
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);
		if (hsl[0]>.5&&hsl[0]<.965){}
		else if (hsl[0]>.178&&hsl[0]<.4){}


		
		else{
//			hsl[0]=.94;
			hsl[1]=0;
//			hsl[0]=hsl[0]+.04;
//			hsl[1]=hsl[1]+.04;
//			hsl[2]=hsl[2]+.04;
		
		
		//		hsl[2]=.4;
		}
		let hsl2 = convertHSL2RGB(hsl[0],hsl[1],hsl[2]);
		
		

		
			frame.data[i * 4 + 0] = hsl2[0];
			frame.data[i * 4 + 1] = hsl2[1];
			frame.data[i * 4 + 2] = hsl2[2];					
		
    }
	btx.putImageData(frame, 0, 0); 
	
}
function clearImagesPx30(c,ctx,x,y){
	
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);
		if (hsl[0]>=.0&&hsl[0]<=.0325){}
		
		else if (hsl[0]>.6&&hsl[0]<=1){	}
		else{hsl[1]=0;}

		let hsl2 = convertHSL2RGB(hsl[0],hsl[1],hsl[2]);
		
			frame.data[i * 4 + 0] = hsl2[0];
			frame.data[i * 4 + 1] = hsl2[1];
			frame.data[i * 4 + 2] = hsl2[2];					
		
    }
	btx.putImageData(frame, 0, 0); 
	
}

function clearImagesPx7(c,ctx,x,y){
	let b = document.getElementById('canvas1');
	let btx = b.getContext('2d');
    let frame = btx.getImageData(0, 0, b.width, b.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {



		let r = frame.data[i * 4 + 0];
		let g = frame.data[i * 4 + 1];
		let b = frame.data[i * 4 + 2];
		let hsl = convertRGB2HSL(r,g,b);
		

		if (hsl[2]<.6){
			frame.data[i * 4 + 3] = 0;
		}
		else{
			frame.data[i * 4 + 0] = r;
			frame.data[i * 4 + 1] = g;
			frame.data[i * 4 + 2] = b;					
		}
    }
	btx.putImageData(frame, 0, 0); 
}



function findAllIndices(a,b){
	var indices = [];
	var idx = a.indexOf(b);
	while (idx != -1) {
		indices.push(idx);
		idx = a.indexOf(b, idx + 1);
	}

	if(indices.length==0){
		return false;
	}
	else{
		return indices;
	}
	
}

function sendImageData(){

}



function convertFromWebWorker(a){
	let	c 	= 	document.getElementById("canvas4");
	let ctx = 	c.getContext('2d');
	let x	= 	FindWidth();
	let y	= 	FindHeight();



	rLog=a[0];
	gLog=a[1];
	bLog=a[2];
	aLog=a[3];
	cLog=a[4];
	tLog=a[5];
	oLog=a[6];
	console.log(oLog);
	var k=oLog.slice();
	o2Log=k;
	reviewFindings(c,ctx,x,y);
}



	
	





function reviewImages(c,ctx,x,y){
	var max = 0;
	var ck;
	var indices = [];
	
	var r,g,b,a,cSum,cm,u,ck;
	var ir,ib,ig,ilr,ilg,ilb,is;

	let frame = ctx.getImageData(0, 0, c.width, c.height);
	let len = frame.data.length / 4;
	var QUANTUM = 2222;
	for (var e = 0; e < len; e += QUANTUM) {
		if (e+QUANTUM>len){
			ck=len-e;	
		}
		else{ck=e+QUANTUM}
		for (let i = e; i < ck; i++) {
	
//		for (var i = 0; i < len; i++) {
			indices=[];
			is=-1;
			cSum=0;
			cm=false;
			r = frame.data[i * 4 + 0];
			g = frame.data[i * 4 + 1];
			b = frame.data[i * 4 + 2];
			a = frame.data[i * 4 + 3];
			r=Math.floor(r);
			g=Math.floor(g);
			b=Math.floor(b);
			
			cSum=r+g+b;
			is=tLog.indexOf(cSum);
			ir=rLog.indexOf(r);
			if((is!=-1)&&(ir!=-1)){

				indices=findAllIndices(tLog,cSum);
			
				for (var q=0;q<indices.length;q++){
					u=indices[q];
			
					if(rLog[u]===r){			
						if(gLog[u]===g){
							if(bLog[u]===b){
								cLog[u]++;
								cm=true;
								break;
							}
						}
					}
				}	
			}	
			if(!cm){
				rLog.push(r);
				gLog.push(g);
				bLog.push(b);
				aLog.push(a);
				cLog.push(1);
				tLog.push(cSum);
			}
		}
	}
	
	reviewFindings(c,ctx,x,y);
    return;
}	

var topScores=[];
function findMAX(a,atx,x,y){
	let maxV = maxOfArray(cLog);
	indexCount= cLog.lastIndexOf(maxV);
	minder1=maxV;
	displayUpdate1(a,atx,x,y);

}

function sortForMAX(a){
var tempMax;
var b=a.slice();	
var c=[];
var d;
for (var i=0;i<300;i++){
	
	
	tempMax=maxOfArray(b);
	d=b.lastIndexOf(tempMax);
	b.splice(d,1);
	c.push(d);
}
	var e=c.concat(b);
	cLog=e;
}