import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1>My first React State exercise</h1>
      <div className="card-list">
        <Card name="John Doe" job="Programmer" image="john.jpg" />
        <Card name="Jane Doe" job="Business Analyst" image="jane.jpg" />
      </div>
    </>
  );
}

export default App;
