/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

var listBookShelf = [
  {bookShelfId: 1},
  {bookShelfId: 2},
  {bookShelfId: 3},
  {bookShelfId: 4},
  {bookShelfId: 5}
]

var listBook = [
  {bookId: 1, name: 'Book1', bookShelfId: 1},
  {bookId: 2, name: 'Book2', bookShelfId: 1},
  {bookId: 3, name: 'Book3', bookShelfId: 2},
  {bookId: 4, name: 'Book4', bookShelfId: 2},
  {bookId: 5, name: 'Book5', bookShelfId: 3},
  {bookId: 6, name: 'Book6', bookShelfId: 3},
  {bookId: 7, name: 'Book7', bookShelfId: 4},
  {bookId: 8, name: 'Book8', bookShelfId: 4},
  {bookId: 9, name: 'Book9', bookShelfId: 5},
  {bookId: 10, name: 'Book10', bookShelfId: 5}
]

var listUser = []

//Procedure
//Bookshelf
function getBookInShelf(shelfId) {
  return listBook.filter((book)=>book.bookShelfId === shelfId)
}

//Book
function getBookById(bookId) {
  return listBook.find(book=>book.bookId === bookId);
}

//User
function insertUser(name) {
  var user = {
    id: listUser.length,
    name: name,
    checkBorrow: function() {
      if(typeof this.borrowBooks === 'undefined') return;
      this.borrowBooks.map((borrow)=>{
        var history = {};
        history.bookId = borrow.bookId;
        if(borrow.endBorrow.getTime() - borrow.startBorrow.getTime() > 0) {
          history.status = 'borrowing';
        }else {
          var time = (borrow.startBorrow.getTime() - borrow.endBorrow.getTime())/(24*60*60*1000);
          history.status = 'Out of date ' + time + ' day';
        }
        
        if(typeof this.history === 'undefined') {
          this.history = [];
        }
        this.history.push(history);
      });
    }, 
  }
  listUser.push(user);
}

function getUserById(userId) {
  return listUser.find((user)=>user.id === userId);
}

function borrowBooks(userId, bookId, borrowDay) {
  var user = getUserById(userId);
  if(typeof user === 'undefined') return;
  if(typeof user.borrowBooks === 'undefined' || user.borrowBooks === null) {
    user.borrowBooks = [];
  }
  user.borrowBooks.push({
    bookId: bookId,
    startBorrow: new Date(),
    endBorrow: new Date((new Date()).getTime() + borrowDay*24*60*60*1000),
  })
}

function checkAllUserBorrow() {
  for(var user of listUser) {
    user.checkBorrow();
  }
}

//Test
//Insert
insertUser('Huy');
insertUser('Hue');
//Borrow
borrowBooks(0,1,2);
borrowBooks(0,3,2);
//Check
checkAllUserBorrow();
console.log(getUserById(0));



