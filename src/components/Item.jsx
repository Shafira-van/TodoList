import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action/todoAction";
import { updateTodo } from "../redux/action/todoAction";
import { completedTodo } from "../redux/action/todoAction";
import { Icon } from "@iconify/react";

const Item = ({ todo, id, done, comp }) => {
  const dispatch = useDispatch();
  const doneCheck = done;
  const [isDone, setIsDone] = useState(doneCheck);
  const [complete, setComplete] = useState(false);
  const inputRef = useRef(true);

  const delTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // const handleCheck = () => {
  //   setIsDone(!isDone);
  //   setComplete(!complete)
  // };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const updateData = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodo(id, value));
      inputRef.current.disabled = true;
      console.log(value);
    }
  };

  const completed = (id, comp, e) => {
    e.preventDefault;
    dispatch(completedTodo(id, comp));
  };
  // const refreshPage() = (id, comp) => {
  //   dispatch(completedTodo(id, comp));
  // };

  return (
    <div id="list" key={id}>
      <div className="form-check">
        <textarea
          defaultValue={todo}
          className={comp === true ? "disable" : "form-check-label"}
          id={`${isDone ? "checked" : ""}`}
          htmlFor="flexCheckDefault"
          ref={inputRef}
          disabled={inputRef}
          onKeyPress={(e) =>
            updateData(id, inputRef.current.value, e)
          }></textarea>
      </div>
      <div className="iconList">
        {comp === false ? (
          <button onClick={(e) => completed(id, comp, e)}>
            <Icon
              id="icon"
              icon="akar-icons:double-check"
              width="1.2rem"
              color="green"
            />
          </button>
        ) : (
          <button disabled>
            <Icon id="icon" icon="akar-icons:double-check" width="1.2rem" />
          </button>
        )}

        {comp === false ? (
          <button onClick={() => changeFocus()}>
            <Icon id="icon" icon="fa:pencil" width="1rem" color="blue" />
          </button>
        ) : (
          <button disabled>
            <Icon id="icon" icon="fa:pencil" width="1rem" />
          </button>
        )}

        <button onClick={() => delTodo(id)}>
          <Icon id="icon" icon="clarity:trash-solid" width="1rem" color="red" />
        </button>
      </div>
    </div>
  );
};

export default Item;
