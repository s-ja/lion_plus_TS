// 인터페이스
// ex01-07.ts 복사

// 객체 타입 선언
(() => {
  interface User {
    name: string;
    age: number;
  }

  var kim: User = { name: "kim", age: 20 };

  console.log(kim);

  function printUser(user: User): void {
    console.log(user.name, user.age);
  }

  printUser(kim);
})();
