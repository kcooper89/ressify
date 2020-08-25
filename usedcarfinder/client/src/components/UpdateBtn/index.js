import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpdateBtn(props) {
  return (
    <button className="update-btn btn btn-success" {...props} role="button" tabIndex="0">
      Update
    </button>
  );
}

export default UpdateBtn;