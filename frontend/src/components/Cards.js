import "./Cards.css";
import axios from "axios";
import CardItem from "./CardItem";
import React, { useEffect, useState } from "react";

function Cards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/articles")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="cards">
      <h1>Articulos recientes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {posts.map((post) => (
              <li key={post.id}>
                {console.log(`esto es un post${post}`)}
                <CardItem
                  src={`${post.Image[0]}`}
                  text={`${post.Title}`}
                  label="Adventure"
                  path="/single-post"
                  content={`${post.Content}`}
                />{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
