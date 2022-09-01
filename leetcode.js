
 var romanToInt = function(s) {


	let romObj = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
	// romanToInts.set("I", 1)
	// romanToInts.set("V", 5)
	// romanToInts.set("X", 10)
	// console.log(romanToInts)
	// {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
	const romVals = Object.keys(romObj);
	const romArr = s.trim().split("");
	const lengthArr = romArr.length;

	// console.log(romVals.next().value)



	for(let i of romArr){
			for(let romNum of romVals){
				if((romArr[i]===romVals[romNum]) && (romArr[i+1]==="I")){
					console.log(romObj["I"] * lengthArr)

				}
			}}

				// for(let value in romVals){

					// 			console.log(romArr[i])
					// 			console.log(romNum)
					// 			console.log(value)
	// 					// if(romArr[i+1] === romVals.next().value())

	// 						// else {

	// 				// }



};

romanToInt("III")