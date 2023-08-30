import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <section className="control-panel">
          <section className="control-panel__section">
            <h3>Filter</h3>
            <button>All</button>
            <button>Women</button>
            <button>Men</button>
          </section>
          <section className="control-panel__section">
            <h3>Sort</h3>
            <button>By name</button>
            <button>By age</button>
          </section>
        </section>

        <section className="card-list">
          {users.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
