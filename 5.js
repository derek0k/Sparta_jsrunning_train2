// 1
let arr = [10, 20, 30];

// 해당 로직을 작성하세요
const result = [];
arr.forEach((value) => result.push(value * 10));
console.log(result);
// 결과 값: [100, 200, 300] 출력해주세요
// Map 사용 X ❓

//2
let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

const result2 = [];
arr2.forEach((value) => (value % 5 === 0 ? result2.push(value) : null));
console.log(result2);
// 결과값 [10]
// Filter 사용 X ❓
