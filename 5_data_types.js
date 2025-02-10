/**
 * Data Types
 *
 * 6개의 Primitive Type과 한 개의 Object Type이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (미정의 값)
 * 5) null (빈 값)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *   - Function
 *   - Array
 *   - Object
 */

/**
 * Number 타입
 */
const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

/**
 * String 타입
 */
const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현할려면 두번 입력하면 된다.
 */

const str1 = "12\n34";
const str2 = "12\t34";
const str3 = "12\\34";
const str4 = "12'34";

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

// Template Literal
const str5 = `12 '" / /\ /\
34`;
console.log(str5);
const groupName = "아이브";
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined 타입
 *
 * 사용자가 직접 값을 초기화하지 않을 때 지정되는 값,
 * 직접 undefined로 값을 초기화 하는 것은 지양해야 함.
 */

/**
 * null 타입
 *
 * undefined로 같이 값이 없다는 뜻,
 * JS에서는 개발자가 명시적으로 없는 값을 초기화할 때 사용.
 */
let init = null;
console.log(typeof init); // -> object로 반환, 이것은 개발 당시에 생긴 유명한 버그다.

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용.
 * 다른 값들과 다르게 Symbol 함수를 호출해서 사용.
 */

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);

/**
 * Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이뤄짐
 * key:value
 */

const dictionary = {
  red: "빨간색",
};

console.log(dictionary["red"]);
console.log(typeof dictionary);

/**
 * array 타입
 *
 * 값을 리스트로 나열 하는 타입.
 */
const array = ["1", "2", "3", "4", "5"];
console.log(array);

/**
 * index
 *
 * array에서 0부터 시작함, 1씩 올라간다.
 */
console.log(array[3]);

/**
 * static typing -> 변수 선언할 때 어떤 타입의 변수를 선언할 지 명시함.
 * e.g: C언어
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'함.
 * e.g: JS
 */
