const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul",
  },
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = { ...student };

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy = structuredClone(student);
// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?");
console.log(student === shallowCopy);
// 얕은 복사를 하여서 student와 shallowCopy는 다른 객체이므로 false

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?");
console.log(student.address === shallowCopy.address);
// 얕은복사라서 중첩된 객체는 동일한 참조값을 가지므로 true

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?");
console.log(student === deepCopy);
// 깊은복사도 원본객체와 다른 객체이므로 false

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?");
console.log(student.address === deepCopy.address);
// 깊은 복사는 다른 참조값을 가지므로 false
