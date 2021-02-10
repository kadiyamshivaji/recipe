import axios from "axios";
import React, { useState, Suspense } from "react";
import { getFilterKey } from "./util";
import styled from "styled-components";
import "./App.css";
const YOUR_APP_KEY = "7cf0bfbd02b0f9e8ca12727e46b8295e";
const YOUR_APP_ID = "eb48056d";

const StyledImg = styled.img`
  width: 200px;
  display: block;
  margin-bottom: 5vh;
`;
function App() {
  const [result, setResult] = useState();
  const [search, setSearch] = useState();

  const handleSearch = async () => {
    const key = await getFilterKey(search);
    let url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    url = key ? `${url}&${key}=${search}` : url;
    const recipeList = await axios.get(url);
    setResult(recipeList.data);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const displayRecipe = () => {
    return (
      <ul>
        {result.hits.map((item) => (
          <li key={item.recipe.label}>
            {item.recipe.label}
            <StyledImg src={item.recipe.image} alt="" />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Search Form</h1>
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleInputChange}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>

        <div>
          <Suspense fallback={<h1>Loading posts...</h1>}>
            {result && displayRecipe()}
          </Suspense>
        </div>
      </header>
    </div>
  );
}

export default App;
