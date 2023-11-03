(() => {
  var div = document.querySelector("div");

  // non null assertion
  //   div!.innerHTML = "hello";

  //   div?.innerHTML = "hello";

  console.log(div);

  if (div !== null) { // 타입 가드
    div!.innerHTML = "hello";
  }

  //   var div2 = document.querySelector("div2"); // Error
  //   div2!.innerHTML = "hello"; // Error
})();
