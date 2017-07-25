wW.addEventListener('message', function(e) {
    var glo = e.data;  // just cast it to the desired type - no copy made
 
	console.log("ww message received");
	wW.terminate();

	convertFromWebWorker(glo);
},false);

dTrigger.addEventListener("click",download,false);


rTrigger.addEventListener("click",function(e){
	setZin("rTrigger",-3);
//	let	c 	= 	document.getElementById("canvas1");
//	let ctx = 	c.getContext('2d');
//	let x	= 	FindWidth();
//	let y	= 	FindHeight();

	console.log(11);
					setZin("rTrigger",-3);
					let c=document.getElementById("canvas1");
					let ctx=c.getContext('2d');
					let frame = ctx.getImageData(0, 0, c.width, c.height);
					wW.postMessage(frame.data); 



//	timeStart(c,ctx,x,y);
//	reviewImages(c,ctx,x,y);
//console.log("fired worker");
//webWork();
},false);


fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);
