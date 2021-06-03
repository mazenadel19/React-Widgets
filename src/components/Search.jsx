import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("ReactJS");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };

    if (term && !result.length) {
      if (term) fetchData();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) fetchData();
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderList = result.map((item) => {
    return (
      <div
        className="item"
        key={item.pageid}
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          className="right floated content"
          style={{ flex: 1, display: "flex", alignItems: "center" }}
        >
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            Open This Article
          </a>
        </div>
        <div className="content" style={{ flex: 3 }}>
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Label</label>
          <input
            type="text"
            placeholder="type something here"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};

export default Search;
