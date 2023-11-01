// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    // phone?: string;
    // address?: string;
    // hobby?: string;

    //? index signature

    [etc: string]: string;
  }

  var asj: User = {
    name: "asj",
    email: "ansj8777@gmail.com",
    phone: "01086428777",
    address: "영등포구",
    hobby: "keyboard",
  };

  var kim: User = {
    name: "kim",
    email: "naver",
  };

  console.log(kim);
  console.log(asj);
})();
