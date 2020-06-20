// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"
function extension(fileName){
    var temp = fileName.split('.');
    return temp.pop();
}
