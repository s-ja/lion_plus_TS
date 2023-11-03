(() => {
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  type ArrayUser = {
    [Prop in keyof User]: string[];
  };

  const kim: User = {
    id: "kim",
    name: "김철수",
    address: "서울시",
    phone: "010...",
  };

  const lee: ArrayUser = {
    id: ["kim"],
    name: ["김철수"],
    address: ["서울시", "제주시"],
    phone: ["010...", "011..."],
  };

  console.log(kim, lee);
})();
