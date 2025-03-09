/**
 * Object / 객체
 */

// 객체 선언
// key : value pair
let tom = {
  name: "Tom",
  age: 14,
  dance: function () {
    return `${this.name} likes dance.`;
  },
};

console.log(tom);
// { name: 'Tom', age: 14, dance: [Function: dance] } 반환
console.log(tom.name);
console.log(tom["name"]);
const key = "name";
console.log(tom[key]);
// 위 모두 'Tom' 반환
console.log(tom.dance());
// tom likes dance. 반환

//this, OOP(객체 지향 프로그래밍,Object-Oriented Programming)
// 프로그래밍에서 'this'는 현재 객체 인스턴스를 참조하는 키워드입니다. OOP는 데이터와 기능을 객체 단위로 캡슐화하는 패러다임입니다.
// JS에서 객체의 메소드로 호출될 때， this가 해당 메소드를 호출한 객체를 가리킨다.

const nameKey = "name";
const nameValue = "Jack";

const groupKey = "group";
const groupValue = "Student";

const tom2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name} likes dance.`;
  },
};

console.log(tom2);
//{ name: 'Jack', group: 'Student' } 반환
console.log(tom2.dance());
// Jack likes dance. 반환

tom2["country"] = "USA";
console.log(tom2);
/**
 * {
  name: 'Jack',
  group: 'Student',
  dance: [Function: dance],
  country: 'USA'
 * }
 * 반환
 */
delete tom2["country"];
console.log(tom2);
// { name: 'Jack', group: 'Student', dance: [Function: dance] } 반환

/**
 * const로 선언한 객체의 특징
 *
 * 1) const로 선언할 경우, 객체 자체를 변경 할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(tom2));
// [ 'name', 'group', 'dance' ] 반환

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(tom2));
// [ 'Jack', 'Student', [Function: dance] ] 반환

const food = "pasta";
const tom3 = {
  // food: food, 아래 'food,'와 작동 방식이 같음
  food,
};
console.log(tom3);
// { food: 'pasta' } 반환
