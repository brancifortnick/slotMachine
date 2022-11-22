const slut = (nums) => {
	let intRand = Math.floor(Math.random() * nums)
	if (intRand === 0) {
		intRand += 1
	}
	if (intRand >= 4) {
		return [intRand, intRand, intRand].join(' ')
	}
	return intRand
}

const items = ['❤😍🤣😂😊😁👍🙌']

setTimeout(function() {
	console.log(slut(5, 5, 5))
}, 175)
setTimeout(function() {
	console.log(slut(5, 5, 5))
}, 300)

setTimeout(function() {
	console.log(slut(3, 3, 3))
}, 500)



//setInterval(()=>{
// USE for jackpot 
//})