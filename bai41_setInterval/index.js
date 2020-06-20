// setInterval
// clearInterval
// setInterval(fn,ms);
// var i = 0;
// var intervalId = setInterval( function()
// {
// 	++i;
// 	console.log(i);
// 	if (i === 5) 
// 	{
// 		clearInterval(intervalId);
// 	}
// },1000);

// write a function  count from a to b
// return a promise
function countFrom (a, b) 
{
			
	return new Promise(function (resolve,reject) 
 	{
 		var idInterval = setInterval(function()
		{
		 	console.log(a);
			a++;
			if (a > b) 
			{
				clearInterval(idInterval);
				resolve();
			}		 	
		},500);	
 	});		

}
countFrom(1,10).then(function () {
 	console.log('Done');
 });