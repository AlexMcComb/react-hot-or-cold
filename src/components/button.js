import React from "react";

import "./button.css";

export default function Enter() {
  return (
    <div className="enter">
      <form>
        <input type="text" name="name" placeholder="ENTER A NUMBER" />
        <input type="submit" value="Submit" id="submitButton" />
      </form>
    </div>
  );
}
