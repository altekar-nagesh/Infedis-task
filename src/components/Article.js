import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Article.css";

export default function Article() {
  const [newData, setNewData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [explore, setExplore] = useState([]);
  const [article, setArticle] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid"
      );
      setNewData(response.data.data.latestArticle);
      setTrending(response.data.data.trandingArticle);
      setExplore(response.data.data.exploreArticle);
      setArticle(response.data.data.article);
    } catch (err) {
      console.error(err);
    }
  };

  // const fetchPost1 = async () => {
  //   try {
  //     const response1 = await axios.post(
  //       "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid"
  //     );
  //     setTrending(response1.data.data.trandingArticle);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const fetchPost2 = async () => {
  //   try {
  //     const response1 = await axios.post(
  //       "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid"
  //     );
  //     setExplore(response1.data.data.exploreArticle);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    fetchPost();
  }, [newData, trending, explore, article]);

  // useEffect(() => {
  //   fetchPost1();
  // }, [trending]);

  // useEffect(() => {
  //   fetchPost2();
  // }, [explore]);

  return (
    <>
      <div className="row main" id="Lnews">
        <div className="col-md-3 box p-0">
          <h4 className="text-center mt-1">Latest News</h4>
          <hr />
          {newData.map((article) => {
            return (
              <>
                <h6>{article.articleTitle}</h6>
                <hr />
              </>
            );
          })}
        </div>
        <div className="col-md-3 box ms-3 p-0">
          <h4 className="text-center mt-1">Trending News</h4>
          <hr />
          {trending.map((tarticle) => {
            return (
              <>
                <iframe
                  src={tarticle.articleImg}
                  width="200"
                  height="120"
                ></iframe>
                <p>{tarticle.articleTitle}</p>
                <hr />
              </>
            );
          })}
        </div>
        <div className="col-md-3 box ms-3 p-0">
          <h4 className="text-center mt-1">Explore more in news</h4>
          <hr />
          {explore.map((earticle) => {
            return (
              <>
                <h6>{earticle.articleTitle}</h6>
                {/* <p>{earticle.articleDescription}</p> */}
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
