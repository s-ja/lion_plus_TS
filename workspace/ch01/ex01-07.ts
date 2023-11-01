// 객체 타입 선언
(() => {
  type User = {
    name: string;
    age: number;
  };

  //   var kim: User = { name: "kim", age: 20 };

  var kim = { name: "kim", age: 20 };

  //   var jeong: { name: string; age: number } = {
  //     name: "jeong",
  //     age: 20,
  //     phone: 1234,
  //   }; // Error

  //   var ahn: User = { name: "ahn" }; // Error

  console.log(kim);

  function printUser(user: { name: string; age: number }): void {
    console.log(user.name, user.age);
  }

  //   var result: string = printUser(ahn); // Error

  printUser(kim);
})();
