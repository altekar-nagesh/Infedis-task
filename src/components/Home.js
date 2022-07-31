import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Home.css";
import Article from "./Article";

export default function Home() {
  const [newData, setNewData] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid"
      );
      setNewData(response.data.data.news);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [newData]);

  return (
    <>
      <div id="myData" className="myData">
        <h3 className="text-center">News</h3>
        {newData.map((news) => {
          return (
            <div className="row mt-2">
              <div className="col-md-4 container g-0">
                <iframe
                  src={news.urlToImage}
                  className="ms-2"
                  width="300"
                  height="200"
                ></iframe>
              </div>
              <div className="col-md-6 me-5">
                <h4>{news.title}</h4>
                <br />
                {news.description}
              </div>
              <hr />
            </div>
          );
        })}
      </div>

      <div className="myData">
        <Article />
      </div>
    </>
  );
}
