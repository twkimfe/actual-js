// 25.2.24 모각코 스터디
/**
 * Array Functions
 */

let animals = ["dog", "cat", "bird", "fish", "bear", "monkey"];

console.log(animals);

// push()
console.log(animals.push("rat")); // 7 반환
console.log(animals);
// array 맨 끝에 요소 추가하는 메서드, 그리고 array를 변경한다
// push() 메서드는 return 값을 반환한다

// pop()
console.log(animals.pop());
console.log(animals);
// array 맨 끝에 요소 삭제하는 메서드, 그리고 삭제 값을 반환하고, array를 변경한다

//shift()
console.log(animals.shift());
console.log(animals);
// array 맨 첫번째에 요소 삭제하는 메서드, 그리고 삭제 값을 반환하고, array를 변경한다

//unshift()
console.log(animals.unshift("dog"));
console.log(animals);
// push()와 반대로, array 맨 첫번째에 요소 추가하는 메서드, 그리고 array를 변경한다

// splice()
console.log(animals.splice(0, 3)); // 0번째부터 2번째, 3개의 삭제할 값을 array로 반환
console.log(animals); // 나머지 값을 배열로 반환

// 하지만 현재까지 배운 array 내용은 웬만하면 사용하지 않는 것을 추천한다.
// 현재는 이뮤터블(Immutable) 프로그래밍이 현재 트렌드.
// "이뮤터블(Immutable) 프로그래밍"은 한번 생성된 데이터 구조를 수정할 수 없게 만드는 프로그래밍 패러다임입니다. 이 접근법에서는 데이터를 변경하는 대신 원본 데이터를 기반으로 새로운 데이터 구조를 생성합니다.

animals = ["dog", "cat", "bird", "fish", "bear", "monkey"];

// concat()
console.log(animals.concat("rabbit"));
// 끝에 새 요소를 추가한 array를 새로 반환 (다른 메모리에 저장)
console.log(animals);
// 원래 array에 변경을 안 함

// slice()
console.log(animals.slice(0, 3));
// [ 'dog', 'cat', 'bird' ] 반환
// slice(시작값, 삭제하기 전의 index값)
console.log(animals);
// [ 'dog', 'cat', 'bird', 'fish', 'bear', 'monkey' ] 반환, 원 array는 안 바꾼다

// spread operator
let animals2 = [...animals];
console.log(animals2);
// [ 'dog', 'cat', 'bird', 'fish', 'bear', 'monkey' ] 반환

let animals3 = [animals];
console.log(animals3);
// [ [ 'dog', 'cat', 'bird', 'fish', 'bear', 'monkey' ] ] 반환

let animals4 = animals;
console.log(animals4);
console.log(animals4 === animals); //true 반환

// console.log([...animals] === animals); //false 반환

// join()
console.log(typeof animals.join());
// array요소들을 ','로 구분하여 string 타입으로 반환

console.log(animals.join("/"));
// dog/cat/bird/fish/bear/monkey 반환
console.log(animals.join(", "));
// dog, cat, bird, fish, bear, monkey; 반환

// sort()
// 오름차순 정렬된 array를 반환
animals.sort();
console.log(animals);
// [ 'bear', 'bird', 'cat', 'dog', 'fish', 'monkey' ] 반환

// reverse()
// 내림차순 정렬된 array를 반환
console.log(animals.reverse());
// [ 'monkey', 'fish', 'dog', 'cat', 'bird', 'bear' ] 반환

let numbers = [1, 9, 7, 5, 3];

console.log(numbers);

// a, b를 비교 시
// 1) a를 b보다 뒤에 정렬하려면, 0보다 큰 숫자를 반환
// 2) a를 b보다 앞에 정렬하려면, 0보다 작은 숫자를 반환
// 3) 원 순서를 유지하려면 0을 반환

// 1) 상황 예시
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});

console.log(numbers);
//[ 1, 3, 5, 7, 9 ] 반환

// 2) 상황 예시
numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);
//[ 9, 7, 5, 3, 1 ] 반환

//map()
// 원 array 변경 안 하고, 새 array를 반환
console.log(animals.map((x) => x));
// [ 'monkey', 'fish', 'dog', 'cat', 'bird', 'bear' ] 반환
console.log(animals.map((x) => `animals: ${x}`));
/** [
  'animals: monkey',
  'animals: fish',
  'animals: dog',
  'animals: cat',
  'animals: bird',
  'animals: bear'
] 반환
 */

console.log(
  animals.map((x) => {
    if (x === "dog") {
      return `animals: ${x}`;
    } else {
      return x;
    }
  })
);
// [ 'monkey', 'fish', 'animals: dog', 'cat', 'bird', 'bear' ] 반환
console.log(animals);
// 원 array는 변경 안 한다

console.log("----------");

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));
// [8, 6] 반환
console.log(numbers.filter((x) => false));
// [] 반환

// find()
console.log(numbers.find((x) => x % 2 === 0));
// 8 반환
// 조건에 맞는 '첫 번째' 값만 반환

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));
// 1 반환
// 조건에 맞는 '첫 번째' 값의 index값만 반환

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
// 25 반환
// ppt 참고

// 3:25:14까지 학습
