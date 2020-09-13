import React from "react";
import "./Widgets.css";
import { useStateValue } from './StateProvider';

function Widgets() {
    const [{user}, dispatch] = useStateValue();
  return (
    <div className="widgets">
    <h3>{user.displayName}</h3>
      <iframe
        width="350"
        height="500"
        src="https://www.youtube.com/embed/l9nh1l8ZIJQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widgets;
