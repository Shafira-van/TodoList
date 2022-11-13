import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
// import { useHistory, useParams } from "react-router-dom";

function Header() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setData({ todo });
    setTodo("");
  };

  return (
    <div className="header">
      <h1>What's the plan for today?</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label
            htmlFor="inputPassword2"
            id="inputData"
            className="visually-hidden">
            What to do
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="What to do"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
