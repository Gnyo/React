import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CommentList from "./CommentList";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);