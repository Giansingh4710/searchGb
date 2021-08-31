import React from "react";
import { links } from "./allLinks";

function App() {
  const [entry, setEntry] = React.useState("");
  const [searchResult, setSearch] = React.useState("Enter Something");

  const getArticles = (search) => {
    const validLinks = links.filter((word) =>
      word.title.includes(search.toLowerCase())
    );
    if (validLinks.length > 0) {
      return (
        <ol>
          {validLinks.map((word) => {
            return (
              <li key={word.link}>
                <a href={word.link} target="_blank" rel="noopener noreferrer">
                  {word.title}
                </a>
              </li>
            );
          })}
        </ol>
      );
    }
    return "No results for: " + search;
  };
  return (
    <div className="App">
      <div>
        <h1>Enter a question or topic:</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            autoFocus="autofocus"
            placeholder="Vaheguru"
            value={entry}
            onChange={(e) => {
              setEntry(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              const articles = getArticles(entry);
              setSearch(articles);
            }}
          >
            Submit
          </button>
        </form>
        {searchResult}
      </div>
    </div>
  );
}

export default App;
