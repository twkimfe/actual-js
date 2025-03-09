/**
 * Loops
 *
 * 1) for
 * 2) while
 */

// for문 예문
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 중첩 for문 예문
// *을 사용해서 6*6 정사각형을 구현
let square = "";
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);

/**
 * for...in
 */
// for.. in를 객체에 사용
const tom = {
  name: "Tom Black",
  year: 2003,
  address: "USA",
};

for (let key in tom) {
  console.log(key);
}

// for.. in를 배열에 사용
// index를 반환
const color = ["red", "blue", "green", "white", "black"];
for (let key in color) {
  console.log(`${key}:${color[key]}`);
}

/**
 * for...of를 배열에 사용
 */
// value를 반환
for (let value of color) {
  console.log(value);
}

// while문 예문
let number = 0;

while (number < 10) {
  number++;
}

console.log(number);

/**
 * do..while문 예문
 *
 * (현업에서는 안 씀)
 */

number = 0;
do {
  number++;
} while (number < 10);

console.log(number);

/**
 * break
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }

  number++;
  console.log(number);
}

/**
 * continue
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

number = 0;
while (number < 10) {
  number++;
  if (number === 5) {
    continue;
  }
  console.log(number);
}

// 2:08:21까지 학습
