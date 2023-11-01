// 인터페이스
// ex01-09.ts 복사
(() => {
  interface User {
    name: string;
    age: number;
  }

  // 변수에 타입 지정
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var kim: User = { name: "kim", age: 20 };

  // 함수의 매개 변수에 타입 지정
  var getAge = function (kim: User): number {
    return kim.age;
  };

  // 함수의 리턴 타입 지정

  var createUser = function (name: string, age: number): User {
    return {
      name,
      age,
    };
  };

  var an: User = createUser("안승지", 29);

  console.log(an);
  console.log(getAge(an));
})();
