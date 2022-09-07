import "./App.css";
import "bootstrap-css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="app-footer">
        Coded by Marcella Fox and open-sourced on{" "}
        <a href="https://github.com/MarcellaFox/dictionary-app">GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
