const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const btns = $all('.card-body button');
const notis = $all('.container .noti span');
const arrNum = [];

// Tính tổng số dương
function tinhTongSoDuong(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var listSoDuong = demSoDuong(arr);
  var total = 0;
  for (var soDuong of listSoDuong) {
    total += soDuong;
  }
  return total;
}

// Đếm số dương
function demSoDuong(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  return arr.filter((item) => item >= 0);
}

// Tìm số nhỏ nhất
function timSoNhoNhat(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var smallest = arr[0];
  for (var item of arr) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}

// Tìm số dương nhỏ nhất
function timSoDuongNhoNhat(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var listSoDuong = demSoDuong(arr);
  var smallest = listSoDuong[0];
  for (var item of listSoDuong) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}

// tìm số chẵn cuối cùng
function timSoChanCuoiCung(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var soChanCuoiCung = arr[0];
  for (var soChan of arr) {
    if (soChan % 2 == 0) {
      soChanCuoiCung = soChan;
    }
  }
  return soChanCuoiCung;
}

// đổi vị trí trong mảng

function swapItemArr(arr, i, j) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var arrClone = [...arr];
  var output = {
    item1: arrClone[i],
    item2: arrClone[j],
  };
  arrClone[i] = arrClone[i] + arrClone[j];
  arrClone[j] = arrClone[i] - arrClone[j];
  arrClone[i] = arrClone[i] - arrClone[j];
  output.arr = arrClone;
  return output;
}

function sapXepTang(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var arrSort = [...arr];
  for (var i = 0; i < arrSort.length; i++) {
    for (var j = i; j < arrSort.length; j++) {
      if (arrSort[i] > arrSort[j]) {
        arrSort[i] = arrSort[i] + arrSort[j];
        arrSort[j] = arrSort[i] - arrSort[j];
        arrSort[i] = arrSort[i] - arrSort[j];
      }
    }
  }
  return { arr, arrSort };
}

function checkEmptyArr(arr) {
  if (arr.length <= 0) {
    return false;
  }
  return true;
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
    inputNum.value = '';
    // render ra giao diện
    renderResult(notis[0], `[${arrNum}]`);
  };

  // cau 1
  btns[0].onclick = function () {
    var result = tinhTongSoDuong(arrNum);
    if (result || result == 0) {
      renderResult(notis[1], `Tổng các số dương là : ${result}`);
    }
  };

  //   cau 2
  btns[1].onclick = function () {
    var result = demSoDuong(arrNum);
    if (result || result == 0) {
      renderResult(
        notis[2],
        `Có ${result.length} số dương trong mảng, là: ${result}`
      );
    }
  };

  //   cau 3
  btns[2].onclick = function () {
    var result = timSoNhoNhat(arrNum);
    if (result || result == 0) {
      renderResult(notis[3], `Số nhỏ nhất trong mảng là : ${result}`);
    }
  };

  //cau 4
  btns[3].onclick = function () {
    var result = timSoDuongNhoNhat(arrNum);
    if (result || result == 0) {
      renderResult(notis[4], `Số dương nhỏ nhất trong mảng là : ${result}`);
    }
  };

  //cau 5
  btns[4].onclick = function () {
    var result = timSoChanCuoiCung(arrNum);
    if (result || result == 0) {
      renderResult(notis[5], `Số chẵn cuối cùng trong mảng là : ${result}`);
    }
  };

  //cau 6
  btns[5].onclick = function () {
    var inputs = $all('#collapseSix input');
    var result = swapItemArr(arrNum, +inputs[0].value, +inputs[1].value);
    if (result || result == 0) {
      renderResult(
        notis[6],
        `Đã đổi vị trí 2 phần tử ${result.item1} và ${result.item2}\nMảng sau khi thay đổi là : ${result.arr}`
      );
    }
  };

  //cau 7
  btns[6].onclick = function () {
    var result = sapXepTang(arrNum);

    if (result || result == 0) {
      renderResult(
        notis[7],
        `Mảng trước : ${result.arr} <br>👉 và sau khi đã sắp xếp : ${result.arrSort}`
      );
    }
  };
}

App();
