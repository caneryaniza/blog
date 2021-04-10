import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "../../shared/components/UIElements/Socials.js";
import "./Post.css";
const Post = (props) => {
  const { item } = props;
  return (
    <div className="post">
      <div className="post__info  post__info--date">
        <span>{item.date}</span>
      </div>
      <div className="post__title">
        <h2>
          <NavLink to={`blogs/${item.id}`}>{item.title}</NavLink>
        </h2>
      </div>
      <div className="post__info  post__info--category">
        <span>
          <a >{item.category}</a>
        </span>
      </div>
      <div className="post__image">
        <NavLink to={`blogs/${item.id}`}>
          <img src={item.image} alt="Morning Cup of Coffee" />
        </NavLink>
      </div>
      <div className="post__content">
        <p>{item.content}</p>
      </div>
      <div className="post__content-more-link">
        <NavLink to={`blogs/${item.id}`}>Daha fazlası...</NavLink>
      </div>
      <div className="post__footer">
        <div className="post__info  post__info--author">
          <span>
            Yazar: <a>{item.creator}</a>
          </span>
          <span>
            <a>{item.totalComments} Yorum</a>
          </span>
        </div>
        <div className="post__footer-social">
          <span>Share:</span>
          <Socials SocialClassName="post__footer-social-icons"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
