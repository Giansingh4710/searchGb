import React from "react";
import { links } from "./allLinks";

function App() {
  const [entry, setEntry] = React.useState("");
  const [searchResult, setSearch] = React.useState("");

  const getArticles = (search) => {
    const validLinks = links.filter((word) =>
      word.title.includes(search.toLowerCase())
    );
    if (validLinks.length > 0) {
      return (
        <div>
          {validLinks.length} results
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
        </div>
      );
    }
    return <div>
      No results for: {search}
    </div>
  };

  return (
    <div className="App">
      <div>
        <h1>Enter a question or topic:</h1>
        <input
          autoFocus="autofocus"
          placeholder="Vaheguru"
          value={entry}
          onChange={(e) => {
            const newEntry = e.target.value
            if (newEntry.length > entry.length) {
              const articles = getArticles(newEntry);
              setSearch(articles);
            }
            setEntry(newEntry);
          }}
        />
        {searchResult}
      </div>
    </div>
  );
}

export default App;
