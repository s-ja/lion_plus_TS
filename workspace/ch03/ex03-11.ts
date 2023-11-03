(() => {
  // var a = 10 as string // Error

  var a = 10 as any as string;
  console.log(a);
  //   console.log(a.toLowerCase()); // Error

  function getNum(num: string | number) {
    return num;
  }

  // 리턴 타입이 추론되면 타입 단언을 사용할 필요가 없음.
  // 리턴 타입이 여러개로 추론 되면 any일 경우, 명시적으로 타입을 지정.
  var returnNum = getNum(3.141592) as number;
  console.log(returnNum.toFixed(2));

  var str = getNum("hello") as string;
  console.log(str.toUpperCase());
})();
