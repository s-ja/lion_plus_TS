// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    age: number;
    // phone?: string;
    // address?: string;
    // hobby?: string;

    //? index signature

    [etc: string]: string | number;
  }

  var asj: User = {
    name: "asj",
    email: "ansj8777@gmail.com",
    age: 29,
    // phone: "01086428777",
    // address: "영등포구",
    // hobby: "keyboard",
  };

  var kim: User = {
    name: "kim",
    email: "naver",
    age: 20,
  };

  console.log(kim);
  console.log(asj);
})();
