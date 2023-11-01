(() => {
  function user(name: string, age?: number): void {
    console.log(name, age);
  }

  user("안승지", 29);
  user("강보경");
})();
