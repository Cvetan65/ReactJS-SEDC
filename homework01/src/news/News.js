import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa0be396c9f64deb8255f8c1cccd8c51"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cards">
      {news.map((article) => (
        <Card className="card" style={{ width: "18rem" }} key={article.url}>
          <Card.Img
            className="img"
            variant="top"
            src={article.urlToImage ? article.urlToImage : "/logo192.png"}
          />
          <Card.Body>
            <Card.Title className="title">{article.title}</Card.Title>
            <Card.Text className="author">{article.author}</Card.Text>
            <Card.Subtitle className="desc">
              {article.description}
            </Card.Subtitle>
            <Card.Text>{article.content}</Card.Text>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Go to link
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default News;
