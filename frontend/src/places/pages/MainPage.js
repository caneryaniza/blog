import React from "react";

import Post from "../components/Post.js";
import Pagination from "../../shared/components/UIElements/Pagination";
import "./MainPage.css";

const posts = [
  {
    id: "1",
    date: "Nisan 15 1995",
    title: "Example Title - 1",
    category: "Styling",
    image: "https://www.w3schools.com/css/img_forest.jpg",
    content:
      "1111111111---Bu bir test içeriğidir. Bu içerik içerisinde resimler de olabilir.----1111111",
    creator: "Caner",
    totalComments: "3",
  },
  {
    id: "2",
    date: "Ekim 31 1990",
    title: "Example Title - 2",
    category: "Motorcycling",
    image: "https://www.w3schools.com/css/img_mountains.jpg",
    content:
      "2222222---Bu bir test içeriğidir. Bu içerik içerisinde resimler de olabilir.----2222222",
    creator: "İlker",
    totalComments: "7",
  },
];

const MainPage = () => {
  return (
    <div className="container">
      <div className="col-md-8  col-lg-9">
        {posts.map((post) => (
          <Post item={post} isMainPage={true} key={post.id} />
        ))}
        <Pagination />
      </div>
      <div className="col-md-4  col-lg-3"></div>
    </div>
  );
};

export default MainPage;
