import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import "./Home.css";

const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const [query, setQuery] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?q=${query}&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();

    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=${query}&country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  // let dataSearch = articles
  //   .filter((item) => {
  //     return Object.keys(item).some((key) =>
  //       item[key]
  //         .toString()
  //         .toLowerCase()
  //         .includes(sfilter.toString().toLowerCase())
  //     );
  //   })
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    
    // fetchMoreData();
     updateNews();
  };

  return (
    <>
      <div className="homepage">
        <h1 className="homeheading">
          Top {capitalizeFirstLetter(props.category)} Headlines{" "}
        </h1>

        <div className="searchbox">
          
          <input
            type="text"
            placeholder="Search with Search Bar"
            className="searchbox1"
            value={query}
            onChange={handleChange}
            
           
          ></input>
          
        </div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
        >
          <div className="newscontainer" id="container">
            {articles.map((x) => (
              <NewsItem props={x}  />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
Home.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

Home.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Home;
