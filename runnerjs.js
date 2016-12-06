if(typeof prompt==='undefined')prompt = require('readline-sync').prompt;

// initialization
notGate=[NaN,2,0, 6,9,0, 7,NaN,5, 3,NaN,3, 0,1,-6,-9 ]
program=notGate
programIndex=0

while(true){
	// origin, destination, next
	origin=program[programIndex]
	destination=program[programIndex+1]

	// input
	if(!isNaN(origin)){
		data=program[programIndex+origin]
	}else{
		data=parseInt(prompt())
		console.log("in: "+data)
	}

	// output
	if(!isNaN(destination)){
		//copy from ORIGIN to DESTINATION 
		program[programIndex+destination]=data
	}else{
		console.log("out: "+data)
	}

	next=program[programIndex+2]

	// program flow
	if(!isNaN(next)){
		//jump to NEXT
		programIndex+=program[programIndex+3+next]
	}else{
		//end
		console.log("@end");
		break;
	}
}