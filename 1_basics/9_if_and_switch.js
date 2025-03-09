/**
 * If and Switch
 */

// if 예문
let number = 10;

if (number % 2 === 0) {
  console.log("2의 배수입니다.");
} else if (number % 3 === 0) {
  console.log("3의 배수입니다.");
} else {
  console.log("2,3,4,5의 배수가 아닙니다.");
}

// switch 예문
const englishDay = "monday";

let koreanDay;

switch (englishDay) {
  case "monday":
    koreanDay = "월";
    break;
  case "tuesday":
    koreanDay = "화";
    break;
  case "wednesday":
    koreanDay = "수";
    break;
  case "thursday":
    koreanDay = "목";
    break;
  case "friday":
    koreanDay = "금";
    break;
  default:
    koreanDay = "주말";
    break;
}

console.log(koreanDay);
