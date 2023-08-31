import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  let listItems;
  if (selectedFilter === "All") {
    listItems = users;
  } else if (selectedFilter === "Women") {
    listItems = users.filter((user) => user.gender === "female");
  } else if (selectedFilter === "Men") {
    listItems = users.filter((user) => user.gender === "male");
  } else if (selectedFilter === "By name") {
    listItems = users
      .slice()
      .sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  } else if (selectedFilter === "By age") {
    listItems = users.slice().sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
    listItems = users.sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <section className="control-panel">
          <section className="control-panel__section">
            <h3>Filter</h3>
            <button
              style={{
                backgroundColor: selectedFilter === "All" ? "gray" : undefined,
                color: selectedFilter === "All" ? "white" : undefined,
              }}
              onClick={() => {
                console.log("All clicked");
                setSelectedFilter("All");
              }}
            >
              All
            </button>
            <button
              style={{
                backgroundColor:
                  selectedFilter === "Women" ? "gray" : undefined,
                color: selectedFilter === "Women" ? "white" : undefined,
              }}
              onClick={() => {
                setSelectedFilter("Women");
              }}
            >
              Women
            </button>
            <button
              style={{
                backgroundColor: selectedFilter === "Men" ? "gray" : undefined,
                color: selectedFilter === "Men" ? "white" : undefined,
              }}
              onClick={() => {
                setSelectedFilter("Men");
              }}
            >
              Men
            </button>
          </section>
          <section className="control-panel__section">
            <h3>Sort</h3>
            <button
              style={{
                backgroundColor:
                  selectedFilter === "By name" ? "gray" : undefined,
                color: selectedFilter === "By name" ? "white" : undefined,
              }}
              onClick={() => {
                setSelectedFilter("By name");
              }}
            >
              By name
            </button>
            <button
              style={{
                backgroundColor:
                  selectedFilter === "By age" ? "gray" : undefined,
                color: selectedFilter === "By age" ? "white" : undefined,
              }}
              onClick={() => {
                setSelectedFilter("By age");
              }}
            >
              By age
            </button>
          </section>
        </section>

        <section className="card-list">
          {listItems.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
