(() => {
  //   function echoString(msg: string): string {
  //     return msg;
  //   }
  //   function echoNumber(msg: number): number {
  //     return msg;
  //   }

  function echo<T>(msg: T): T {
    return msg;
  }

  //   const result1 = echoString("hello");
  //   console.log(result1.substring(1, 3));

  //   const result2 = echoNumber(3.141592);
  //   console.log(result2.toFixed(2));

  const result1 = echo<string>("hello");
  console.log(result1.substring(1, 3));

  const result2 = echo<number>(3.141592);
  console.log(result2.toFixed(2));
})();
