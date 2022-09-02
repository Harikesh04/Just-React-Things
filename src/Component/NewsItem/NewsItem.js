import React from "react";

const NewsItem = ({ props }) => {
  return (
    <div className="newscard">
      <img
        src={
          !props.urlToImage
            ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
            : props.urlToImage
        }
        alt="image"
      />

      <h2>{props.title}</h2>
      <div className="propertybox">
        <p>{props.description}</p>
        <p className="psmall">
          By {!props.author ? "Unknown" : props.author} on{" "}
          {new Date(props.publishedAt).toGMTString()}
        </p>

        <a className="NewsItembtn" href={props.url}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
