
import CardItem from "./CardItem";

function App() {
  const names = ["Road Construction", "Bridge Construction", "Tunnel Boring"];

  return (
    <div className="p-6">
      {names.map((name, index) => (
        <CardItem key={index} name={name} />
      ))}
    </div>
  );
}

export default App;
