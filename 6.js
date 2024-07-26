// 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요.
// 가능하다면 메소드 체이닝으로 풀어주세요

// 1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];

// 여기에 코드를 작성해주세요
const result = students
  .map((student) => ({
    ...student,
    average:
      student.scores.reduce((acc, score) => acc + score, 0) /
      student.scores.length,
  }))
  .filter((student) => student.average >= 80)
  .map((student) => student.name);
console.log(result);
// 예상 출력: ["이재상", "김준현"]

// 2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
const result2 = numbers
  .map((number) => number * 2)
  .filter((number) => number <= 30);
console.log(result2);
// 출력값 : [10, 20, 30]
