//1
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [10,2,3], 같은 배열을 참조하기 때문에 arr1의 0번 인덱스도 10으로 변경됩니다
console.log(arr1 === arr2); // true, 서로 같은 배열을 참조하게 되어 있으므로 참조값이 같아서 true가 나옵니다

//2
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };

obj2.d = 4;

console.log(obj1); // { a: 1, b: 2, c: 3 }
console.log(obj2); // { a: 1, b: 2, c: 3, d:4 };
