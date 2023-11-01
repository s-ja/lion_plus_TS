(() => {
  //   string
  var str = "hello";

  //   number
  var age = 30;

  //   boolean
  var done = true;

  //   object
  var todo: object = { title: "TypeScript", done: false };

  //   Array
  var items: Array<string> = ["js study", "ts study"];
  var todoList: string[] = ["js project", "ts project"];

  //   tupple
  var users: [string, number] = ["김철수", 30];

  //   any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var userName: any = "안승지";
  userName = 29;

  //   null
  var nullVal = null;

  //   undefined
  var undefinedVal: undefined;

  console.log(
    str,
    age,
    done,
    todo,
    items,
    todoList,
    users,
    userName,
    nullVal,
    undefinedVal
  );
  console.log(
    typeof str,
    typeof age,
    typeof done,
    typeof todo,
    typeof items,
    typeof todoList,
    typeof users,
    typeof userName,
    typeof nullVal,
    typeof undefinedVal
  );
})();
