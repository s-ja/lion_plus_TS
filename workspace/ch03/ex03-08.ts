(() => {
  interface Todo {
    _id: number;
    title: string;
  }

  type Mypartial<T> = {
    // _id?: number;
    // title?: string;

    // [P in "_id" | "title"]?: Todo[P];

    // [P in keyof Todo]?: Todo[P];

    [P in keyof T]?: T[P];
  };

  const todo1: Todo = {
    _id: 1,
    title: "할일1",
  };
  //   const todo2: OptionalTodo = {
  //     title: "할일1",
  //   };

  const todo2: Mypartial<Todo> = {
    title: "할일2",
  };

  const todo3: Partial<Todo> = {
    title: "할일3",
  };

  console.log(todo1, todo2);
})();
