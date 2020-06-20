// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    var temp  = str.split(' ');
    var result = temp.map(function(x){
        return x.charAt(0).toUpperCase() + x.slice(1);
    })
    return result.join(' ');
      // viết code ở đây
  }
  