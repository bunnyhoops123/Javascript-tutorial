async function queryDynamo() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('Finished');
		}, 2000);
	});
}

async function async_wait() {
	let start = Date.now();
	for (let i = 0; i <= 1; i++) {
		try {
			console.log(await queryDynamo());
		} catch (e) {
			console.log(e);
		}
	}
	let end = Date.now();
	console.log('Aync Await Wait Ends In', ((end - start) / 1000).toFixed(0), 'Seconds');
}

function promise_wait() {
	let start = Date.now();
	let array = [];
	for (let i = 0; i <= 1; i++) {
		array.push(queryDynamo());
	}
	Promise.all(array).then(data => {
		console.log(data);
		let end = Date.now();
		console.log('Promise Wait Ends In', ((end - start) / 1000).toFixed(0), 'Seconds');
	});
}
promise_wait();
async_wait();
