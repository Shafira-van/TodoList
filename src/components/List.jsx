import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodo } from "../redux/action/todoAction";
import { connect } from "react-redux";
import Item from "./Item";

function List() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  // const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const [sort, setSort] = useState("all");

  return (
    <div className="listTodo">
      <div className="iniBtn">
        {/* <div className="btn"> */}
        <button
          onClick={() => setSort("all")}
          id={sort === "all" ? "active" : ""}>
          All
        </button>
        <button
          onClick={() => setSort("active")}
          id={sort === "active" ? "active" : ""}>
          Active
        </button>
        <button
          onClick={() => setSort("completed")}
          id={sort === "completed" ? "active" : ""}>
          Completed
        </button>
      </div>
      <div className="container">
        <div className="block">
          {todos.length > 0 && sort === "all"
            ? todos.map((item) => {
                return (
                  <div className="row">
                    <Item
                      id={item.id}
                      todo={item.todo}
                      done={item.done}
                      comp={item.complete}
                      tampilan="disabled"
                    />
                  </div>
                );
              })
            : null}
          {todos.length > 0 && sort === "active"
            ? todos.map((item) => {
                return (
                  item.complete === false && (
                    <div className="row">
                      <Item
                        id={item.id}
                        todo={item.todo}
                        done={item.done}
                        comp={item.complete}
                      />
                    </div>
                  )
                );
              })
            : null}
          {todos.length > 0 && sort === "completed"
            ? todos.map((item) => {
                return (
                  item.complete === true && (
                    <div className="row">
                      <Item
                        id={item.id}
                        todo={item.todo}
                        done={item.done}
                        comp={item.complete}
                        tampilan="disabled"
                      />
                    </div>
                  )
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default List;
