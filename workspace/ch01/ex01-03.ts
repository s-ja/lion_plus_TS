(() => {
  function getCount(count: number): string {
    return "Count " + count;
  }

  getCount(10);
  //   getCount("20"); //Error
  //   getCount(30, 40); //Error
  //   getCount(); //Error
  var number: string = getCount(30);
  console.log(number);
})();
