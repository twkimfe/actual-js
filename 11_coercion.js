/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + "";
console.log(typeof test, test);
console.log("98" + 2); // 982반환, string으로 적용
console.log("98" * 2); // 196, number로 적용
console.log("98" - 2); // 96, number로 적용

/**
 * 명시적 변환 몇 가지
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1");

/**
 * Boolean 타입으로 변화
 */

console.log(!"x"); // false 반환
console.log(!!"x"); // true 반환
// ''안에 문자가 있다면 boolean 기준으로는 무조건 true로 상정

console.log(!!""); // false 반환
console.log(!!0); // false 반환
console.log(!!"0"); // true 반환
console.log(!!"false"); // true 반환
console.log(!!false); // false 반환
console.log(!!undefined); // false 반환
console.log(!!null); // false 반환

console.log(!!{}); // true 반환
console.log(!![]); // true 반환

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 숫자 0
 * 
 * 모두 false를 반환
 */