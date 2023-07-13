import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement">
            <span onClick={() => dispatch(decNumber())}>-</span>
          </a>
          <input name="quantity" type="number" className="quantity__input" />
          <a className="quantity__plus" title="Increment">
            <span onClick={() => dispatch(incNumber())}>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
