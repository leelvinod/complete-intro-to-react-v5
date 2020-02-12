import React, { useState } from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
=======
import Pet from "./Pet";
>>>>>>> parent of 3c42e35... useState, custome hooks, update ESLint, bring in petfinder client

const App = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const theme = useState("darkblue");
  return (
<<<<<<< HEAD
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
=======
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
>>>>>>> parent of 3c42e35... useState, custome hooks, update ESLint, bring in petfinder client
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
=======
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
>>>>>>> parent of 0f7977a... convert project to JSX, add React-specific ESLint config
=======
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
>>>>>>> parent of 0f7977a... convert project to JSX, add React-specific ESLint config
