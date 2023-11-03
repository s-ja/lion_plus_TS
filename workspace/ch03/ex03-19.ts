// ex03-18.ts 복사
(() => {
  const kim: User = {
    name: "kim",
    age: 20,
    nickName: "kim",
  };

  const lee: UnknownUser = {
    name: "lee",
    age: "비공개",
  };

  const asj: AdminUser = {
    name: "asj",
  };

  function printUser(user: User | UnknownUser | AdminUser) {
    // User 타입일 경우 닉네임 출력
    if (isUser(user)) {
      console.log(user.nickName);
    }
  }

  function isUser(user: User | UnknownUser | AdminUser): user is User {
    return typeof (user as User).age === "number";
  }

  printUser(kim);
  printUser(lee);
  printUser(asj);

  //   function printUser2(user: User | UnknownUser | AdminUser) {
  //     if (typeof user.age === "number") {
  //       console.log(user.age);
  //     } else if (typeof user.age === "string") {
  //       console.log(user.name);
  //     } else if (!user.age) {
  //       console.log("hello admin" + user.name);
  //     }
  //   }

  //   function printUser3(user: User | UnknownUser | AdminUser) {
  //     if (user.nickName) {
  //       console.log(user.age);
  //     } else if (typeof user.age === "string") {
  //       console.log(user.name);
  //     } else if (!user.age) {
  //       console.log("hello admin" + user.name);
  //     }
  //   }
})();
