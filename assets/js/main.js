const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const btns = $all('.card-body button');
const notis = $all('.container .noti span');
const arrNum = [];

// Tính tổng số dương
function tinhTongSoDuong(arr) {
  checkEmptyArr(arr);
  var listSoDuong = demSoDuong(arr);
  var total = 0;
  for (var soDuong of listSoDuong) {
    total += soDuong;
  }
  return total;
}

// Đếm số dương
function demSoDuong(arr) {
  checkEmptyArr(arr);
  return arr.filter((item) => item >= 0);
}

// Tìm số nhỏ nhất
function timSoNhoNhat(arr) {
  checkEmptyArr(arr);
  var smallest = arr[0];
  for (var item of arr) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}

function checkEmptyArr(arr) {
  if (arr.length <= 0) {
    return;
  }
}

function renderResult(element, message) {
  element.innerHTML = message;
}

function App() {
  $a('#addTxtNum').onclick = function themSo(e) {
    // Chặn reload trang khi submit
    e.preventDefault();
    // Lấy giá trị từ input
    var inputNum = $a('.form-input input');
    // push giá trị vào mảng arrNum
    arrNum.push(+inputNum.value);
    // render ra giao diện
    renderResult(notis[0], `[${arrNum}]`);
  };

  btns[0].onclick = function () {
    var result = tinhTongSoDuong(arrNum);
    renderResult(notis[1], `Tổng các số dương là : ${result}`);
  };
  btns[1].onclick = function () {
    var result = demSoDuong(arrNum);
    renderResult(
      notis[2],
      `Có ${result.length} số dương trong mảng, là: ${result}`
    );
  };

  btns[2].onclick = function () {
    var result = timSoNhoNhat(arrNum);
    renderResult(notis[3], `Số nhỏ nhất trong mảng là : ${result}`);
  };
}

App();
