(() => {
  function echo(msg: string): string {
    return msg;
  }

  const result1 = echo("hello");
  console.log(result1.substring(1, 3));
})();
