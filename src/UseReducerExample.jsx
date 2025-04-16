import React, { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStylesFlag: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "HIDE_TEXT":
      return { ...state, showTextFlag: false };
    case "SHOW_TEXT":
      return { ...state, showTextFlag: true };
    case "CHANGE_STYLE":
      return { ...state, changeTextStylesFlag: !state.changeTextStylesFlag };
    default:
      return state;
  }
}
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="container">
      {state?.showTextFlag ? <h3>Use Reducer Example</h3> : null}
      <button className="btn" onClick={() => dispatch({ type: "HIDE_TEXT" })}>
        Hide
      </button>
      <button className="btn" onClick={() => dispatch({ type: "SHOW_TEXT" })}>
        Show
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "CHANGE_STYLE" })}
      >
        Change Text Styles
      </button>
    </div>
  );
};

export default UseReducerExample;
