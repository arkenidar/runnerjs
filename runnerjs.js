if(typeof prompt==='undefined')prompt = require('readline-sync').prompt;

// initialization
notGate=[NaN,2,0, 6,9,0, 7,NaN,5, 3,NaN,3, 0,1,-6,-9 ]
norGate=[
	13,13,-3,	// jump to begin
	8,0,		// 
	-1,NaN,-5,	// x=1, y=X, then print 0, begin again
	NaN,3,1,	// with x=1 read y
	NaN,-3,		// 
	NaN,2,NaN,	// begin is here, read x
	5,-5,		// 
	NaN,2,NaN,	// x=0
	6,11,		// 
	1,			// 
	-1,NaN,0,	// x=0 and y=0, print 1, jump to begin
	-11,		// 
	0,			// 
	-1,NaN,0,	// x=0 and y=1, print 0, jump to begin
	-16]		// 
program=norGate
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
		message="out: "+data
		console.log(message)
		alert(message)
	}

	next=program[programIndex+2]

	// program flow
	if(!isNaN(next)){
		//jump to NEXT
		increment=program[programIndex+3+next]
		programIndex+=increment
	}else{
		//end
		console.log("@end");
		break;
	}
}