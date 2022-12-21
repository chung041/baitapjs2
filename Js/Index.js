//Bài 1: tiền lương nhân viên

document.getElementById("calculate").onclick = function () {
    let wageEl = +document.getElementById("wage").value
    let numberEl = +document.getElementById("number").value
    console.log("Bài tập 1: Lương nhân viên (VNĐ): ", new Intl.NumberFormat('vn-VN').format(wageEl * numberEl))
}

//Bài 2: giá trị trung bình của 5 số thực

document.getElementById("average").onclick = function () {
    let number1El = +document.getElementById("number1").value
    let number2El = +document.getElementById("number2").value
    let number3El = +document.getElementById("number3").value
    let number4El = +document.getElementById("number4").value
    let number5El = +document.getElementById("number5").value
    console.log("Bài tập 2: Giá trị trung bình 5 số = ", (number1El + number2El + number3El + number4El + number5El) / 5)
}
//Bài 3: Quy đổi tiền

document.getElementById("tienUsd").onclick = function () {
    let usdEl = +document.getElementById("usd").value
    console.log("Bài tập 3: Tiền VNĐ: ", new Intl.NumberFormat('vn-VN').format(usdEl * 23500))
}

//Bài 4: diện tích, chu vi hình chữ nhật

document.getElementById("area").onclick = function () {
    let widthEl = +document.getElementById("width").value
    let lengthEl = +document.getElementById("length").value
    console.log("Bài tập 4: Diện tích: ", widthEl * lengthEl, "(đvdt)")
}

//Bài 5: tổng 2 ký số

document.getElementById("sum").onclick = function () {
    let naturalNumberEL = +document.getElementById("naturalNumber").value
    let unitEl = naturalNumberEL % 10
    let tenEl = Math.floor(naturalNumberEL / 10)
    console.log("Bài tập 5: Tổng 2 ký số: ", unitEl * tenEl)
}