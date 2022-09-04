import "./App.css";
import "bootstrap-css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="app-footer">Coded by Marcella Fox.</footer>
    </div>
  );
}

export default App;
