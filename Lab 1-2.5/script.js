/*Lab 1: Giá trị và biến
1. Khai báo các biến 'country', 'continent' và 'population' và gán các giá trị của chúng theo quốc gia của bạn (dân số tính bằng triệu dân).

 2. In các giá trị của chúng ra console.
 */

let country = "Việt Nam";
let continent = "Châu Á";
let population = 100;

// console.log(country, continent, population);

/* Lab 2.1: Các kiểu dữ liệu
Ở bài Lab này, bạn sẽ tiếp tục sử dụng các đoạn code từ bài Lab 1: Giá trị và biến.

1. Khai báo một biến có tên 'isIsland', và đặt giá trị của biến theo quốc gia của bạn. Biến phải chứa một giá trị Boolean (nếu quốc gia là một hòn đảo thì giá trị biến này là true, ngược lại sẽ là false). Khai báo thêm một biến 'language' nhưng chưa cần gán cho nó bất kỳ giá trị nào.

2. In các kiểu dữ liệu của biến 'isIsland', 'population', 'country' và 'language' ra console.
*/

let isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/**
 Lab 2.2. Let, const và var (15 phút)

1. Đặt giá trị của 'language' thành ngôn ngữ được nói ở nơi bạn sống (một số quốc gia có nhiều ngôn ngữ, nhưng chỉ cần chọn một). Ví dụ như 'English', 'Vietnamese'.

2. Hãy nghĩ xem những biến nào có thể sử dụng const (những giá trị nào không bao giờ thay đổi, và những giá trị nào có thể thay đổi?). Sau đó, chuyển các biến mà bạn đã nghĩ ra thành biến khai báo bằng const.

3. Giờ hãy thử thay đổi giá trị một trong các biến trên và quan sát xem điều gì sẽ xảy ra.
 */

language = "Vietnamese";

const languageVi = "Vietnamese";
const isIslandVi = false;
//isIslandVi = true;->Uncaught TypeError: Assignment to constant variable.

/**
 * Lab 2.3. Các toán tử cơ bản (25 phút)

1. Nếu quốc gia của bạn bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia, vậy sẽ có bao nhiêu người sống ở mỗi miền? Hãy sử dụng giá trị từ biến population để hoàn thành yêu cầu này, in ra màn hình console giá trị của population chia 2.

2. Tăng giá trị của biến population thêm 1 và in kết quả ra console.

3. Phần Lan có dân số là 6 triệu người. Kiểm tra xem quốc gia bạn có nhiều dân hơn so với Phần Lan không? Bạn cần in ra console xem giá trị population có lớn hơn 6 triệu không?

4. Dân số trung bình của một quốc gia là 33 triệu người. Kiểm tra xem quốc gia bạn có ít dân hơn so với các mức dân số trung bình không?

5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là  'description', trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'. Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.
 * 
 */

//1 Dân số mỗi miền
let danSoMoiMien = population / 2;
console.log(danSoMoiMien);

//2 Tăng population 1
population++;
console.log(population);

//3 So sanh dân số với Phần Lan
let phanLanPopulation = 6;
let SoSanhDanSo = population > phanLanPopulation;
console.log(SoSanhDanSo);
//4 So sanh trung binh
let avgPopulation = 33;
let isBelowAvg = population < avgPopulation;
console.log("Dân số Việt Nam ít hơn trung bình: ", isBelowAvg);
//5 Description

// let description =
//   country + " and its " + population + " million people speak " + language;

/**
 * Lab 2.4. String và Template Literal (5 phút)

1. Tạo lại biến 'description' từ lần gán trước, lần này hãy sử dụng cú pháp template literal.
 */
let description = `${country} and its ${population} million people speak ${language}`;

/**
 * Lab 2.5. Đưa ra quyết định: Câu lệnh if/else (10 phút)

1. Nếu dân số của nước bạn có hơn 33 triệu người, hãy in string sau ra console: '<country>'s population is above average'. Nếu không hãy in ra một string như thế này: '<country>'s population is < 33 - population > million below average' . Ví dụ dân số của Hà Lan là 18 triệu người, bạn sẽ cần in ra "Nederland's population is 15 million below average" (15 là lấy 33 - 18).

2. Sau khi kiểm tra kết quả, thay đổi giá trị biến population tạm thời thành 13, sau đó thành 130. Quan sát các kết quả khác nhau và đặt giá trị trở lại ban đầu.

Lưu ý:  Sau khi hoàn thành bài lab ở trên, học viên lưu lại file bài làm trên máy tính cá nhân để phục vụ cho việc review lab sau này. Học viên cần hoàn thành tất cả các bài lab của môn học mới tiến hành đăng ký review.
 */

// population = 13;
// population = 130;

population > avgPopulation
  ? console.log(`${country}'s population is above average`)
  : console.log(
      `${country}'s population is ${
        avgPopulation - population
      } million below average`
    );
