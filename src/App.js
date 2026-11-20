import "./App.css";
import DictionaryApp from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to my dictionary</header>
        <main>
          <DictionaryApp />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/antjekunert4-png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antje Kunert
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/antjekunert4-png/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-project-l6gf.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Render
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
