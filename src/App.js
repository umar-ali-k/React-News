import React, { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import axios from "axios";
import './App.css';

function App() {
   
  const [data, setData] = useState()
  const [country, setCountry]=useState()
  const [category,setCategory]=useState()
  const [fostate, setfostate]=useState()
  const apiKey = "f04f0f4de6df4aa2a9f00fe559a09a2f"
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2021-06-21&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  const count="country"
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${count}=${country}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [country]);
 

  const cat="category"
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${cat}=${category}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [category]);

 
  
  useEffect(() => {
    
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${fostate}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [fostate]);

  return (
    <div>
      <div className="my-search-bar">
      <form >
        <label>
          Search for a term
          <input type="text" value={fostate} onChange={e=>setfostate(e.target.value)} />
        </label>
        </form>
      </div>
      <div className="sidenav">
      <span>Get Top Headlines from Countries</span>
      <button  value="us" onClick={e=>setCountry(e.target.value)}>USA</button>
      <button  value="in" onClick={e=>setCountry(e.target.value)}>India</button>
      <button  value="ch" onClick={e=>setCountry(e.target.value)}>China</button>
      <button  value="jp" onClick={e=>setCountry(e.target.value)}>Japan</button>


      <span>Get Top Headlines from Categories</span>
      <button  value="business" onClick={e=>setCategory(e.target.value)}>Business</button>
      <button  value="entertainment" onClick={e=>setCategory(e.target.value)}>Entertainment</button>
      <button  value="general" onClick={e=>setCategory(e.target.value)}>General</button>
      <button  value="health" onClick={e=>setCategory(e.target.value)}>Health</button>
    </div>
      <div className="main">
      <h1 className="head__text">My ReactJS application using newsAPI</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
    </div>
  );
}

export default App;
