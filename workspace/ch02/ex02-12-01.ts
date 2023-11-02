(() => {
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  // 유틸리티 타입 활용
  type TodoRegist = Pick<TodoInfoDetail, "title" | "content">;
  type TodoInfo = Omit<TodoInfoDetail, "createdAt" | "updatedAt">;
  type TodoList = Omit<TodoInfo, "content">;

  var todo1: TodoRegist = {
    title: "todo1",
    content: "for regist",
  };
  var todo2: TodoInfo = {
    _id: 2,
    title: "todo2",
    content: "for regist",
    done: true,
  };
  var todo3: TodoList = {
    _id: 3,
    title: "todo3",
    done: false,
  };

  console.log(todo1, todo2, todo3);
})();
