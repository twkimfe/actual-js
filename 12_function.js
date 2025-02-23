/**
 * function -> 함수
 */

/**
 * function 기본 문법
 */

/**
 * DRY
 * D-> Don't
 * R-> Repeat
 * Y-> Yourself
 */

// parameter 매개변수 (형식적 매개변수)
// 함수에서 입력받는 값에 대한 정의-> parameter
function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

calculate(3);
// 0반환
calculate(4);
// 2반환

// argument 인자, 인수 (실제 매개변수)
// 함수에서 입력받는 값에 대한 정의-> argument

// 다양한 인수 예시
function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4);

function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(2, 4);
// 8반환, y 의 값이 4로 입력 됨
multiply(2);
// 20반환, y default 값이 10 이기 때문

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수 (화살표 함수) 예시 코드
 */
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

// 화살표 함수를 일반 함수로 작성
function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

// 2:43:08까지 학습

const multiplyTwo = function (x, y) {
  return x * y;
};

console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log(multiplyThree(4, 5, 6));

// 무한 파라미터 예시 코드
const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// 즉시 실행 함수 예시 코드
// immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply); // function 반환
console.log(multiply instanceof Object);
// instanceof 좌우 타입을 확인하는 메서드
// true 반환, 그래서 funciton은 object다.