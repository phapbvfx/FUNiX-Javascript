"use strict";

/**
 Lab 4.1. Hàm (10 phút)

Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. Dựa vào input này, hàm trả về string với định dạng như sau: 'Finland has 6 million people and its capital city is Helsinki'.
Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau. Lưu các giá trị trả về ở 3 biến khác nhau, và in chúng ra console.
 */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let VietNamese = describeCountry("VietNamese", 100, "HaNoi");
let China = describeCountry("China", 1440, "Beijing");
let Japan = describeCountry("Japan", 125, "Tokyo");

console.log(VietNamese);
console.log(China);
console.log(Japan);

/**
 Lab 4.2. Khai báo hàm với biểu thức hàm (20 phút)

Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population' và trả về phần trăm dân số thế giới theo dân số đã cho. Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.
Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.
Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld2' và cũng gọi nó với 3 dân số theo quốc gia (có thể có cùng số dân).
 */

function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

let VietNamesePopulationPercent = percentageOfWorld1(100);
let ChinaPopulationPercent = percentageOfWorld1(1440);
let JapanPopulationPercent = percentageOfWorld1(125);
console.log(
  VietNamesePopulationPercent,
  ChinaPopulationPercent,
  JapanPopulationPercent
);

function percentageOfWorld2(population) {
  return `${(population * 100) / 7900}%`;
}

let VietNamesePopulationPercent2 = percentageOfWorld2(100);
let ChinaPopulationPercent2 = percentageOfWorld2(1440);
let JapanPopulationPercent2 = percentageOfWorld2(125);
console.log(
  VietNamesePopulationPercent2,
  ChinaPopulationPercent2,
  JapanPopulationPercent2
);

/**
 Lab 4.3. Hàm mũi tên (5 phút)

Thực hiện lại bài lab trước, nhưng lần này hãy tạo một hàm mũi tên là 'percentageOfWorld3'.
 */

const percentageOfWorld3 = (population) => `${(population * 100) / 7900}%`;
let VietNamesePopulationPercent3 = percentageOfWorld3(100);
let ChinaPopulationPercent3 = percentageOfWorld3(1440);
let JapanPopulationPercent3 = percentageOfWorld3(125);
console.log(
  VietNamesePopulationPercent3,
  ChinaPopulationPercent3,
  JapanPopulationPercent3
);

/**
 Lab 4.4. Hàm gọi hàm (15 phút)

Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất. Hàm này nhận hai đối số là 'country' và 'population', và trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.
Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ.
 */

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
console.log(describePopulation("Japan", 125));

/**
 Lab 4.5. Giới thiệu về Array (15 phút)

Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Bạn có thể sử dụng các giá trị đã dùng trước đó. Lưu array này vào một biến là 'populations'.
In ra console xem liệu array có 4 phần tử hay không (true hoặc false).
Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm.
 */

const populations = [100, 125, 1440, 1500];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

/*
Lab 4.6. Các phép toán cơ bản với array (25 phút)

Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.
Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. Vậy hãy thêm nó vào cuối array 'neighbours'.
Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.
Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours', rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.
*/

const neighbours = ["Laos", "China", "Sweden"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");

if (neighbours.indexOf("Sweden") === -1)
  console.log("Probably not a central European country :D");
else {
  neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
}
console.log(neighbours);

/**
 Lab 4.7.1. Đội nào chiến thắng? (phần 2)

Quay trở lại với hai đội thể dục dụng cụ: Dolphins và Koalas! Có một quy tắc mới cho môn thể dục này, có cơ chế khác hẳn. Mỗi đội thi đấu 3 lần, sau đó tính trung bình 3 lượt điểm số (điểm trung bình mỗi đội). Một đội sẽ giành chiến thắng chỉ khi có số điểm trung bình ít nhất là gấp đôi so với điểm của đội còn lại. Nếu không, sẽ không có đội nào thắng cả!

1. Nhiệm vụ của bạn:

Tạo hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số.
Sử dụng hàm để tính trung bình của cả hai đội.
Tạo hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số ('avgDolphins' và 'avgKoalas'), sau đó in đội thắng ra console cùng với số điểm giành chiến thắng theo luật trên. Ví dụ: "Koalas win (30 vs. 13)".
Dùng hàm 'checkWinner' để xác định đội chiến thắng cho cả Dữ liệu 1 và Dữ liệu 2.
Lần này hãy bỏ qua việc hòa.
2. Dữ liệu kiểm tra:

Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
Gợi ý:

Để tính trung bình 3 giá trị, hãy cộng tất cả chúng lại và chia cho 3.
Để kiểm tra xem số A ít nhất có gấp đôi số B không, hãy thử A >= (2*B). Áp dụng điều này cho điểm trung bình của đội.
 */

const calcAverage = (a) => {
  if (!Array.isArray(a)) return;
  return a.reduce((a, b) => a + b) / a.length;
};

const Dolphins_1 = [44, 23, 71];
const Koalas_1 = [65, 54, 49];

const Dolphins_2 = [85, 54, 41];
const Koalas_2 = [23, 34, 27];

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas  win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team win");
  }
};
checkWinner(calcAverage(Dolphins_1), calcAverage(Koalas_1));

/*
Lab 4.7.2. Xây dựng Tip calculator (phần 2)

Steve vẫn đang xây dựng tip calculator, sử dụng quy tắc tương tự như trước: Tip 15% hóa đơn nếu giá trị hóa đơn trong khoảng 50-300, và với giá trị khác thì tip 20%.

1. Nhiệm vụ của bạn:

Viết hàm 'calcTip' nhận giá trị hóa đơn bất kỳ làm đầu vào và trả về tiền tip tương ứng, tính toán theo các quy tắc ở trên (bạn có thể xem lại code từ thử thách tip calculator đầu tiên nếu cần). Sử dụng loại hàm mà bạn thích nhất. Kiểm tra hàm sử dụng giá trị hóa đơn là 100.
Giờ hãy dùng array. Hãy tạo array 'bills' có chứa dữ liệu kiểm tra bên dưới.
Tạo array 'tips' có chứa giá trị tiền tip cho từng hóa đơn, tính từ hàm mà bạn đã tạo trước đó.
Bonus: Tạo array 'total' có chứa tổng giá trị, tức là bill+tip.
2. Dữ liệu kiểm tra:

125, 555 và 44.
Gợi ý: Hãy nhớ rằng array cần một giá trị ở mỗi vị trí, giá trị đó có thể là giá trị trả về của hàm! Do đó bạn có thể gọi hàm như giá trị array (trước tiên đừng lưu giá trị tip trong các biến riêng biệt, mà trong array mới).
*/

const calcTip = (totalBill) => {
  return 50 <= totalBill && totalBill <= 300 ? 15 : 20;
};

const bills = [124, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [
  bills[0] + (bills[0] * tips[0]) / 100,
  bills[1] + (bills[1] * tips[1]) / 100,
  bills[2] + (bills[2] * tips[2]) / 100,
];
console.log(totals);
