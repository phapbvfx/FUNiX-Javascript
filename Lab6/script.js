/*
Lab 6. Xử lý chuỗi

Cho một loạt các nhiệt độ tối đa đã được dự báo, nhiệt kế hiển thị một string với các nhiệt độ đã cho. Ví dụ: [17, 21, 23] sẽ in ra console "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."

1. Nhiệm vụ của bạn

Tạo hàm 'printForecast' lấy array 'arr' và in một string như trên ra console. Hãy thực hành với cả hai dữ liệu kiểm tra.
2. Dữ liệu kiểm tra

Dữ liệu 1: [17, 21, 23]
Dữ liệu 2: [12, 5, -5, 0, 4]
*/

const printForecast = (arr) => {
  const result = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    result.push(`... ${arr[i]}ºC in ${i + 1} day`);
  }
  let str = result.join(" ");

  console.log(str);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
