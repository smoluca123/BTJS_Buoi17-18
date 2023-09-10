const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const btns = $all('.card-body button');
const notis = $all('.container .noti span');
const arrNum = [];
const arrInteger = [];

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

// Sắp xếp tăng dần

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

//kiểm tra số nguyên tố
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
//tìm số nguyên tố đầu tiên
function findPrime(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }

  var prime = -1;
  for (var item of arr) {
    if (isPrime(item)) {
      prime = item;
      break;
    }
  }
  return prime;
}

//cau 9
function findInteger(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  const intArr = arr.filter((item) => Number.isInteger(item));
  return intArr;
}

//cau 10
function soSanhAmDuong(arr) {
  if (!checkEmptyArr(arr)) {
    return;
  }
  var sosanh = ['nhiều hơn', 'ít hơn', 'bằng'];
  var listSoDuong = demSoDuong(arr);
  var listSoAm = arr.filter((item) => item < 0);
  return {
    message: `Số dương ${
      listSoDuong.length > listSoAm.length
        ? sosanh[0]
        : listSoDuong.length < listSoAm.length
        ? sosanh[1]
        : sosanh[2]
    } số âm`,
    listSoDuong,
    listSoAm,
  };
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

  //cau 8
  btns[7].onclick = function () {
    var result = findPrime(arrNum);

    if (result == -1) {
      renderResult(notis[8], `Không có số nguyên tố trong mảng`);
    } else if (result || result == 0) {
      renderResult(notis[8], `Số nguyên tố đầu tiên trong mảng : ${result}`);
    }
  };

  //thêm số câu 9
  btns[8].onclick = function addIntegerNum(e) {
    e.preventDefault();

    var input = $a('#txtIntegerNum');

    arrInteger[arrInteger.length] = +input.value;
    renderResult(notis[9], `[${arrInteger}]`);
    input.value = '';
  };

  //Check Integer câu 9
  btns[9].onclick = function () {
    var result = findInteger(arrInteger);

    if (result && result.length > 0) {
      renderResult(
        notis[10],
        `Có ${result.length} số nguyên tố trong mảng lần lượt là : [${result}]`
      );
    } else {
      renderResult(notis[10], `Không tìm thấy số nguyên tố`);
    }
  };

  //câu 10
  btns[10].onclick = function () {
    var result = soSanhAmDuong(arrNum);

    if (result) {
      renderResult(
        notis[11],
        `${result.message}<br>👉 Có ${result.listSoDuong.length} số dương và ${result.listSoAm.length} số âm`
      );
    }
  };
}

App();
