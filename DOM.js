// Lấy thẻ HTML có id: dùng document.getElementById()
var text = document.getElementById("text")

var button1 = document.getElementById("change-text")

var color = "black" // tạo một biến để ghi nhớ màu hiện tại của div

// Function: 
// function TenFunction(){
//    code...
// }
// function se khong hoat dong luon, chi hoat dong khi minh goi ten function day ra
// TenFunction() --> code trong function TenFunction() se hoat dong

function changeText(){
    // câu lệnh innerHTML sẽ lấy content trong cái div có id đó. Ví dụ: div lúc đầu sẽ có innerHTML
    // là 11111111111. Đặt câu lệnh điều kiện để có thể đổi đi đổi lại.
    if(text.innerHTML == "11111111111"){
        text.innerHTML = "22222222222"
    }
    else{
        text.innerHTML = "11111111111"
    }
}

// tạo một addEventListener -> Liên tục kiểm tra event đó có xảy ra không
// cú pháp: <biến của button>.addEventListener(event, function)
document.getElementById("change-color").addEventListener("click", () => { // event là click, function là changeColor
    // cú pháp () => {code...} là arrow function, cho phép rút ngắn lại code bằng cách ko cần đặt tên cho 
    if(color=="black"){ // kiểm tra xem biến color hiện tại có giá trị là "black" hay không
        text.style = "color: red" // tạo thêm attribute style cho thẻ div, giống hệt như inline CSS
        color = "red" // đổi giá trị biến color đó thành màu đỏ
    }
    else{
        text.style = "color: black"
        color = "black"
    }
}) 
