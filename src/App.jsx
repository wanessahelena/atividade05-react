import { produtos } from "./data/produtos";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px" }}>
      <CardList produtos={produtos} />
    </div>
  );
}

export default App;
