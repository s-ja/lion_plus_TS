// 인터섹션 타입
(() => {
  type Todo = {
    title: string;
    content: string;
  };

  type TodoInfo = Todo & {
    _id: number;
    done: boolean;
  };

  var todo1: Todo = {
    title: "할일 1",
    content: "for register",
  };

  var todo2: TodoInfo = {
    _id: 2,
    title: "할일 2",
    content: "for detail",
    done: true,
  };

  console.log(todo1);
  console.log(todo2);
})();
