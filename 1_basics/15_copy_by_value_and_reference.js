/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

// 값의 copy
let original = "hi";
let clone = original;

console.log(original);
console.log(clone);

clone += ", i am sam";

console.log(original);
console.log(clone);
console.log("---------------------");
// 일반 값의 original을 바꿔도 clone은 안 바뀐다

// 객체의 copy
let originalObj = {
  name: "sam",
  age: "24",
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj["age"] = "34";

console.log(originalObj);
console.log(cloneObj);
// 객체는 original만 바꿨지만, clone까지 바뀌게 되었다
// 객체가 이렇게 바뀌는 방식은 copy by reference라는 기능이다.

console.log(originalObj === cloneObj);
// true 반환
console.log(original === clone);
// false 반환

console.log("---------------------");
// 여기서 주의할 점은, 객체 안의 값이 같다고, 같은 객체로 인식 되지 않는다.
let testObj = {
  name: "tom",
  address: "usa",
};
let copyObj = {
  name: "tom",
  address: "usa",
};
console.log(testObj === copyObj);
// false 반환
// ppt 참고 3:50:51

// copy-by-value
// https://youtu.be/ZOVG7_41kJE?si=y0nB__Cowq8ikkbG&t=13919

// copy-by-reference
// https://youtu.be/ZOVG7_41kJE?si=URco27p2EtzF1_lW&t=14087

console.log("------");

const person1 = {
  name: "tom",
  food: "steak",
};
const person2 = person1;
const person3 = {
  name: "tom",
  food: "steak",
};

console.log(person1 === person2);
// true 반환
console.log(person1 === person3);
// false 반환
console.log(person2 === person3);
// false 반환
// p1,p2는 같은 메모리 공간 사용, p2,p3는 다른 메모리 공간을 사용하기 때문

/**
 * Spread Operater
 */

const person4 = {
  ...person3,
};
console.log(person4);
console.log(person1 === person4);

const person5 = {
  age: 24,
  ...person3,
};
console.log(person5);
// { age: 24, name: 'tom', food: 'steak' } 반환

const person6 = {
  name: "jack",
  ...person3,
};
console.log(person6);
// { name: 'tom', food: 'steak' } 반환

const person7 = {
  ...person3,
  name: "jack",
};
console.log(person7);
// { name: 'jack', food: 'steak' } 반환
// array도 객체와 같은 방식으로 작동된다.

// 4:02:59까지 학습