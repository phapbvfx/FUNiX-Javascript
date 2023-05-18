/**
 * Lab 2.6.1. So sánh chỉ số BMI (phần 1)

Mark và John đang cố so sánh chỉ số BMI (Body Mass Index) của họ, được tính bằng công thức: BMI = mass/[(height)^2)] = mass/(height*height) (mass tính bằng kg và height tính bằng mét).

1. Nhiệm vụ của bạn:

Lưu khối lượng và chiều cao của Mark và John vào các biến.
Tính chỉ số BMI của John và Mark theo công thức (bạn có thể tính cả hai).
Tạo biến Boolean 'markHigherBMI' chứa thông tin về việc liệu chỉ số BMI của Mark có cao hơn BMI của John không.
2. Dữ liệu kiểm tra:

Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.
Lab 2.6.2. So sánh chỉ số BMI (phần 2)

Sử dụng ví dụ về BMI từ Lab 2.6.1 và code bạn đã viết để cải thiện lại.

1. Nhiệm vụ của bạn:

In một output tốt ra console, hiển thị ai có chỉ số BMI cao hơn. Thông báo hiển thị sẽ là "Mark's BMI is higher than John's!"  hoặc "John's BMI is higher than Mark's!".
Sử dụng template literal bao gồm các giá trị BMI trong output. Ví dụ: "Mark's BMI (28.3) is higher than John's (23.9)!”.
Gợi ý: Sử dụng câu lệnh if/else.
 * 
 * 
 */
// Dữ liệu 1:
let MarkHigh_1 = 1.69;
let MarkWeight_1 = 78;
let JohnHigh_1 = 1.95;
let JohnWeight_1 = 92;

let BMIMark_1 = MarkWeight_1 / (MarkHigh_1 * MarkHigh_1);
let BMIJohn_1 = JohnWeight_1 / (JohnHigh_1 * JohnHigh_1);

let markHigherBMI_1 = BMIMark_1 > BMIJohn_1;

//Dữ liệu 2
let MarkHigh_2 = 1.88;
let MarkWeight_2 = 95;
let JohnHigh_2 = 1.76;
let JohnWeight_2 = 85;

let BMIMark_2 = MarkWeight_2 / (MarkHigh_2 * MarkHigh_2);

let BMIJohn_2 = JohnWeight_2 / (JohnHigh_2 * JohnHigh_2);

let markHigherBMI_2 = BMIMark_2 > BMIJohn_2;

if (markHigherBMI_1) {
  console.log("Mark's BMI is higher than John's!");
  console.log(
    `Mark's BMI (${BMIMark_1}) is higher than John's (${BMIJohn_1})!`
  );
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(
    `John's BMI (${BMIJohn_1}) is higher than Mark's (${BMIMark_1})!`
  );
}

if (markHigherBMI_2) {
  console.log("Mark's BMI is higher than John's!");
  console.log(
    `Mark's BMI (${BMIMark_2}) is higher than John's (${BMIJohn_2})!`
  );
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(
    `John's BMI (${BMIJohn_2}) is higher than Mark's (${BMIMark_2})!`
  );
}
