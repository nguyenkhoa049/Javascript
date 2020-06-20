/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
 var ax = require('axios');
  function promiseAll (url) {
    // không cần  khơi tạo Promise trong này vẫn được, vì axios trả về 1 promise .
  		ax.get(url)
      .then( res => )

}
  Promise.all([
  	promiseAll('https://jsonplaceholder.typicode.com/todos/1'),
  	promiseAll('https://jsonplaceholder.typicode.com/todos/2'),
  	promiseAll('https://jsonplaceholder.typicode.com/todos/3')
  	])
  	.then(function (data) {
  		console.log(data);
  		/* body... */
  	})
  	.catch(function (err) {
  		console.log(err);
  		/* body... */
  	})