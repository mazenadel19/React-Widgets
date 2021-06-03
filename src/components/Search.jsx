import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("ReactJS");
  const [result, setResult] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);


  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("setDebounced");
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      console.log("cleartimeout");
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("axios request");
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResult(data.query.search);
    };

    if (debouncedTerm) {
      console.log("fetch data");
      fetchData();
    } else {
      setResult([]);
    }
  }, [debouncedTerm]);

  const renderList = result.map((item) => {
    return (
      console.log("renderList"),
      (
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
      )
    );
  });


  return (
    console.log("function return"),
    (
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
    )
  );
};

export default Search;

/*
 we made use of 2 useEffects with another useState for the search term to get around the 2 requsts happening 
 if we attempted to solve the warning we had previously in our single useEffect that asked us to have [term,results.length]

in this example we're searching using debouncedTerm which is already predefined with the term value the value appears instantly
if we removed the value in term and added a new value the first usestates run and after 1s with no input it sets the value for 
debouncedTerm which is used by out network request
 */