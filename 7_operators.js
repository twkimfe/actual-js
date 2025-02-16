/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 *
 */

// console.log(10 + 10);
// console.log(10 - 10);
// console.log(10 * 10);
// console.log(10 / 10);
// console.log(10 % 10);

/**
 * 증가와 감소
 */

// let number = 1;

// number ++;
// console.log(number);

// number--
// console.log(number);

/**
 * 연산자의 위치
 */

// let result = 1;
// console.log(result);
// let number = 1;

// result = number++;
// console.log(result, number);
// result = number--;
// console.log(result, number);

// result = ++number;
// console.log(result, number);
// result = --number;
// console.log(result, number);

/** '변수++' 연산자는 변수 계산이 마친 후에 계산을 진행한다.
 *  '++변수' 연산자는 계산을 먼저 진행한 후, 변수를 반환한다.
 */

/**
 * 숫자 타입이 아닌 자료형에 +,-를 추가하면, 해당 자료형은 숫자형으로 변환이 된다.
 * 숫자 변환이 불가한 자료형은 'NaN(Not a Number)'이란 값을 반환한다.
 */

/**
 * 할당 연산자 (assignment operator)
 * '='
 * 할당 연산자는 산술 연산자와 조합하여 복합 연산자로 사용할 수 있다.
 * +=, -=, *=, /=, %=
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 비교 연산자
 * 1) 값의 비교 '==' 같다 / '!=' 다르다
 * 2) 값과 타입의 비교 '===' / '!=='
 */

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
// true 반환

/**
 * 삼항 조건 연산자 (ternary operator) '?'
 */

console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

/**
 * 논리 연산자
 *
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환
console.log(true && true);
// true 반환
console.log(true && false);
// false 반환

// || 조건은 하나가 true여도 true를 반환
console.log(true || true);
// true 반환
console.log(true || false);
// true 반환

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용할 때 좌측이 true면, 우측 값 반환
 * &&를 사용할 때 좌측이 false면, 좌측 값 반환
 * ||를 사용할 때 좌측이 true면, 좌측 값 반환
 * ||를 사용할 때 좌측이 false면, 우측 값 반환
 */

console.log(true && "study");
// study 반환
console.log(false && "study");
// false 반환
console.log(true || "study");
// true 반환
console.log(false || "study");
// study 반환

console.log(true && true && "study");
// study 반환
console.log(true && false && "study");
// false 반환

/**
 * 지수 연산자
 */

console.log(2 ** 2);
// 4반환

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? "study";
// ?? -> 좌측 코드가 null, undefined일 경우, 우측 값을 반환
console.log(name);
//study 반환

name = name ?? "123";
console.log(name);
// 123 반환

let name2;
name2 ??= "code study";
console.log(name2);
// code study 반환, null이나 undefined일 때 우측 값 할당
