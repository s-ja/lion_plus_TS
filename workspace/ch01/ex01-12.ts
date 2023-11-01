(() => {
  interface Todo {
    readonly _id: number;
    title: string;
    content: string;
    done?: boolean;
  }
  interface Toggle {
    (param: Todo): void;
  }

  var todo1: Todo = {
    _id: 1,
    title: "todo1",
    content: "using interface",
    done: false,
  };
  var todo2: Todo = {
    _id: 2,
    title: "todo2",
    content: "using interface twice",
  };

  var toggleFn: Toggle = function (param: Todo): void {
    param.done = !param.done;
  };

  //   todo1._id = 3; //Error
  todo1.title = "to home";

  console.log(todo1, todo2);
  toggleFn(todo1);
  console.log(todo1, todo2);
})();
