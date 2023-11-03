import axios from "axios";
import $ from "jquery";
import canUseDOM from "can-use-dom";

(async () => {
  const response = await axios("http://localhost:33088/api/Todolist");
  console.log(response.data);

  console.log(canUseDOM);
})();
