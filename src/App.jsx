import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users-complete";

function App() {
  // "all", "men", "women"
  const [activeFilter, setActiveFilter] = useState("all");
  // "by-age", "by-name"
  const [activeSort, setActiveSort] = useState("by-age");

  function handleFilterChange(value) {
    setActiveFilter(value);
  }

  function handleSortChange(value) {
    setActiveSort(value);
  }

  let filteredUsers = users.slice();

  if (activeFilter === "men") {
    filteredUsers = users.filter(({ gender }) => gender === "male");
  } else if (activeFilter === "women") {
    filteredUsers = users.filter(({ gender }) => gender === "female");
  }

  if (activeSort === "by-age") {
    filteredUsers.sort((a, b) => a.dob.age - b.dob.age);
  } else {
    filteredUsers.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <p className="current-state">Your current state: {activeFilter}</p>
      </header>
      <main>
        <section className="filter-box">
          <button
            className={activeFilter === "all" ? "highlight" : null}
            onClick={() => {
              handleFilterChange("all");
            }}
            style={
              activeFilter === "all"
                ? {
                    color: "hotpink",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            All
          </button>
          <button
            onClick={() => {
              handleFilterChange("men");
            }}
            style={
              activeFilter === "men"
                ? {
                    color: "hotpink",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            Men
          </button>
          <button
            onClick={() => {
              handleFilterChange("women");
            }}
            style={
              activeFilter === "women"
                ? {
                    color: "hotpink",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            Women
          </button>
          <button
            onClick={() => {
              handleSortChange("by-age");
            }}
            style={
              activeSort === "by-age"
                ? {
                    color: "hotpink",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            By age
          </button>
          <button
            onClick={() => {
              handleSortChange("by-name");
            }}
            style={
              activeSort === "by-name"
                ? {
                    color: "hotpink",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            By name
          </button>
        </section>
        <section className="card-list">
          {filteredUsers.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
