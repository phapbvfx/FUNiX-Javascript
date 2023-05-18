"use strict";
/**
 Lab 5.1. Giới thiệu về Object (5 phút)

1. Tạo một object là 'myCountry' cho quốc gia bạn chọn, chứa các thuộc tính 'country', 'capital', 'language', 'population' and 'neighbours' (array như chúng ta đã thực hành trong bài trước).
 */
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 6,
  neighbours: 3,
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.'`
    );
  },
  checkIsland: function (isIsland) {
    this.isIsland = isIsland;
  },
};

console.log(myCountry);
/**
 Lab 5.2. Dấu chấm với dấu ngoặc (10 phút)

Sử dụng object từ bài tập trước, in string sau ra console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
Tăng dân số của đất nước thêm hai triệu người bằng cách sử dụng dấu chấm (object.population), và sau đó giảm đi hai triệu người bằng dấu ngoặc (object['population']) để truy cập vào các thuộc tính. 
 */

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.'`
);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);

/**
 Lab 5.3. Phương thức Object  (15 phút)

Thêm một phương thức có tên là 'describe' vào object 'myCountry'. Phương thức này sẽ in một string ra console với nội dung như sau: "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki" nhưng lần này sử dụng từ khóa 'this'.
Gọi phương thức 'describe' 
Thêm phương thức 'checkIsland' vào object 'myCountry'. Phương thức này sẽ thiết lập một thuộc tính mới trên object là 'isIsland'. 'isIsland' sẽ là giá trị true nếu không có nước láng giềng, ngược lại là false. Sử dụng toán tử điều kiện để đặt giá trị cho thuộc tính.
 */

// myCountry.describe = () =>
//   console.log(
//     `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.'`
//   );
myCountry.describe();
myCountry.checkIsland(true);

console.log(myCountry);

/*
Lab 5.4. Vòng lặp For (5 phút)

Ở đất nước bạn có các cuộc bầu cử. Ở một thị trấn nhỏ, chỉ có 50 cử tri. Sử dụng vòng lặp for để mô phỏng 50 cử tri này, bằng cách in string sau ra console (cho các số từ 1 đến 50): 'Voter number 1 is currently voting'.
 */

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

/*
Lab 5.5. Lặp trong array, break và continue (15 phút)

Hãy lấy lại array 'populations' từ bài lab trước.
Sử dụng vòng lặp for để tạo array 'percentages2' chứa phần trăm dân số thế giới cho 4 giá trị population. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
Xác nhận rằng 'percentages2' chứa chính xác các giá trị trong array 'percentages' mà chúng ta đã tạo theo cách thủ công ở lab trước, để xem giải pháp này tốt hơn như thế nào.
*/
function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}
const populations = [100, 125, 1440, 1500];
let length = populations.length;

const percentages2 = [];
for (let i = 0; i < length; ++i) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
//[1.2658227848101267, 1.5822784810126582, 18.227848101265824, 18.9873417721519]
console.log(percentages2);

/*
Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)

Lưu trữ array của những array này vào biến 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
Nếu như các mảng con có ít nhất hai phần tử, in ra lần lượt phần tử từ thứ 2 trở đi. Ví dụ với dữ liệu như trên sẽ in ra
Mexico

Sweden

Russia

3. Bạn sẽ cần một vòng lặp bên trong vòng lặp cho điều này. Điều này thực sự hơi phức tạp, vì vậy đừng lo lắng nếu nó quá khó đối với bạn! Bạn sẽ giải quyết được vấn đề này. 
*/
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
let length1 = listOfNeighbours.length;

for (let i = 0; i < length1; i++) {
  let length2 = listOfNeighbours[i].length;
  if (length2 >= 2) {
    for (let j = 1; j < length2; j++) {
      console.log(listOfNeighbours[i][j]);
    }
  }
}

/**
 Lab 5.7. Vòng lặp While (10 phút)

Với đề bài tương tự Lab 5.5 Lặp trong array, break và continue, nhưng lần này hãy sử dựng vòng lặp while (gọi array 'percentages3').
Bạn thích giải pháp nào hơn cho nhiệm vụ này: vòng lặp for hay vòng lặp while?
 */

const percentages3 = [];
let i = 0;
while (i < length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

//[1.2658227848101267, 1.5822784810126582, 18.227848101265824, 18.9873417721519]
console.log(percentages3);
