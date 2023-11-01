// 타입 별칭
// ex01-05.ts 복사

// 유니언 타입
(() => {
  type Message = string | number;

  function log(msg: Message) {
    console.log(msg);
  }
  log("world");
  log(1000);

  var msg1: Message = "world";
  var msg2: Message = 200;

  msg1 = 300;
  //   msg1 = true; //Error

  log(msg1);
  log(msg2);
})();
