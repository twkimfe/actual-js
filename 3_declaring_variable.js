/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 안 쓰는 선언문
 * 2) let
 * 3) const
 */

var name = "코드팩토리";
console.log(name);

var age = 32;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let, var로 선언하면
 * 값을 추후 변경 가능함,
 * const로 선언한 변수는 변경 불가.
 */

ive = "안유진";
console.log(ive);

const newJeans = "뉴진스";
console.log(newJeans);

/**
 * 선언과 할당
 *
 * 1) 선언은 변수를 선언 하는 것.
 * 2) 할당은 변수를 넣는 것.
 */
var name; // 선언
name = "123"; // 할당

var girlFriend;
console.log(girlFriend); // -> undefined, 정의 없음 값을 반환

// const girlFriend2 const 선언은 반드시 초기화 해야함, 할당 없이 선언 불가
