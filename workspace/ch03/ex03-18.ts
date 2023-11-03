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
    // User 타입일 경우 나이 출력
    if ("age" in user && typeof user.age === "number") {
      console.log((user as User).nickName);
    }
  }

  printUser(kim);
  printUser(lee);
  printUser(asj);

  //   function printUser2(user: User | UnknownUser | AdminUser) {
  //     // User 타입일 경우 나이 출력
  //     if (typeof user.age === "number") {
  //       console.log(user.age);
  //     } else if (typeof user.age === "string") {
  //       console.log(user.name);
  //     } else if (!user.age) {
  //       console.log("hello admin" + user.name);
  //     }
  //   }
})();
