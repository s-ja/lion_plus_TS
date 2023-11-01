// 유니언 타입
(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }

  logString("hello");
  logNumber(100);

  function log(msg: string | number) {
    console.log(msg);
  }
  log("world");
  log(1000);

  var msg1: string | number = "world";
  var msg2: number | string = 200;

  msg1 = 300;
  //   msg1 = true; //Error

  log(msg1);
  log(msg2);
})();
