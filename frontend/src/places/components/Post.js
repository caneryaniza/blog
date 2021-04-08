import React from "react";
import { NavLink } from "react-router-dom";

import "./Post.css";
const Post = (props) => {
  console.log(props.item);
  return (
    <div className="post">
      <div className="post__info  post__info--date">
        <span>{props.item.date}x    </span>
      </div>
      <div className="post__title">
        <h2>
          <NavLink to={`blogs/${props.item.id}`}>{props.item.title}</NavLink>
        </h2>
      </div>
      <div className="post__info  post__info--category">
        <span>
          <a href="#">{props.item.category}</a>
        </span>
      </div>
    </div>
  );
};

export default Post;
