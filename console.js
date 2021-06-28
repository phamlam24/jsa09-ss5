// Khởi tạo 2 biến tên là a, b
var a;
var b;

// Nhập dữ liệu var từ người dùng
// Câu lệnh: window.prompt("tin nhắn")
a = window.prompt("Nhập số a: ")
b = window.prompt("Nhập số b: ")

// Kiểm tra a,b vừa nhập có phải số hay không
// Sử dụng câu lệnh điều kiện:
// if(điều kiện){
//     code chạy khi điều kiện đúng
// }
// else{
//     code chạy khi điều kiện sai
// }
// Sử dụng function isNaN(giá trị cần kiểm tra) để kiểm tra.
// isNaN viết tắt cho is not a number -> nó trả là true(đúng) khi giá trị KHÔNG PHẢI số,
// và false(sai) khi giá trị LÀ số.
if(isNaN(a)){
    console.log("a không phải là số")
}
else{
    console.log("a là số")
}

if(isNaN(b)){
    console.log("b không phải là số")
}
else{
    console.log("b là số")
}

// Có thể ghép điều kiện với nhau.
// && là and (và). Điều kiện tổng sẽ đúng khi CẢ HAI điều kiện con đúng
// || là or (hoặc). Điều kiện tổng sẽ đúng khi MỘT TRONG HAI điều kiện con đúng

if(isNaN(a) || isNaN(b)){ // điều kiện sẽ đúng khi MỘT TRONG HAI cái isNaN đúng
    console.log("Một trong hai biến không phải là số")
}
else{
    a = Number.parseInt(a) // function Number.parseInt(biến) dùng để biến đổi 1 biến thành 1 số.
    b = Number.parseInt(b)

    var c = a+b // Tạo biến c có giá trị bằng a+b
    var d = a-b
    var e = a*b
    var f = a/b // Ở đây, f sẽ có giá trị là số thập phân

    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    // Kiểm tra a và b có phải là số nguyên hay không: sử dụng Number.isInteger(biến)
    if(Number.isInteger(a) && Number.isInteger(b)){
        var g = a%b // tạo biến g có giá trị bằng số dư của phép chia a cho b
        var h = Math.floor(a/b) // biến h có giá trị bằng kết quả phép chia a cho b, làm tròn xuống.
        
        console.log(g)
        console.log(h)
    }
}