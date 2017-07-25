
var glo=[];
onmessage = function(e) {




	
	var tempR=[];
	var tempG=[];
	var tempB=[];
	var tempA=[];
	var tempC=[];
	var tempT=[];
	var tempO=[];
	
	var indices = [];
	var r,g,b,a,cSum,cm,u,ck;
	var ir,ib,ig,ilr,ilg,ilb,is;
	let len = e.data.length / 4;

	var QUANTUM = 2222;
	for (var qe = 0; qe < len; qe += QUANTUM) {
		
		if (qe+QUANTUM>len){
			ck=len-qe;	
		}
		else{ck=qe+QUANTUM}
		for (let i = qe; i < ck; i++) {
	
//		for (var i = 0; i < len; i++) {
			indices=[];
			is=-1;
			cSum=0;
			cm=false;
			r = e.data[i * 4 + 0];
			g = e.data[i * 4 + 1];
			b = e.data[i * 4 + 2];
			a = e.data[i * 4 + 3];
			
			cSum=r+g+b;

			is=tempT.indexOf(cSum);
			ir=tempR.indexOf(r);
			if((is!=-1)&&(ir!=-1)){

				indices=findAllIndices(tempT,cSum);
			
				for (var q=0;q<indices.length;q++){
					u=indices[q];
			
					if(tempR[u]===r){			
						if(tempG[u]===g){
							if(tempB[u]===b){
								tempC[u]++;
								cm=true;
								break;
							}
						}
					}
				}	
			}	
			if(!cm){
				tempR.push(r);
				tempG.push(g);
				tempB.push(b);
				tempA.push(a);
				tempC.push(1);
				tempT.push(cSum);
			}
		}
	}

	
	tempO=sortForMAX(tempC);
	
	
	glo.push(tempR);
	glo.push(tempG);
	glo.push(tempB);
	glo.push(tempA);
	glo.push(tempC);	
	glo.push(tempT);
	glo.push(tempO);
	console.log(glo);
	postMessage(glo);
	close();
}	


function sortForMAX(a){
	var c=[];
	if(a.length>300){
		for(let i=0;i<a.length;i++){
			c.push(i);	
		}	
	}
	else{
		var tempMax;
		var b=a.slice();	
			var d;
		for (let i=0;i<a.length;i++){
			tempMax=maxOfArray(b);
			d=b.lastIndexOf(tempMax);
			b[d]=0;
			c.push(d);
		}
	}
	return c;
	
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

