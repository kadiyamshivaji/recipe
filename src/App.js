import { ftruncate } from "fs";
import axios from "axios";
import React, { useState } from "react";

import "./App.css";
import { fetchRecipe } from "./services";
function App() {
  const [result, setResult] = useState();

  const handleSearch = async () => {
    const YOUR_APP_KEY = "7cf0bfbd02b0f9e8ca12727e46b8295e";
    const YOUR_APP_ID = "eb48056d";
    const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
    const recipeList = await axios.get(url);
    setResult(recipeList.data);
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
            className="auto-expand"
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        {result && (
          <div>
            <ul style={{ background: "yellow" }}>
              <li>apple</li>
              <li>Berry</li>
              {result.hits.map((item) => {
                <li>{item.recipe.label}</li>;
              })}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
