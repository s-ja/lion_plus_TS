(() => {
  type UserField = "id" | "name" | "address" | "phone";

  type User = {
    [Field in UserField]: string;
  };

  const kim: User = {
    id: "kim",
    name: "김철수",
    address: "서울시",
    phone: "010",
  };

  console.log(kim);
})();
