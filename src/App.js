import "./App.css";
import Weather from "./Weather";
import Days from "./Days";
import Icons from "./Icons";
import Degrees from "./Degrees";

export default function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <div className="card">
          <div className="card-body">
            <br />
            <Weather />
            <br />
            <br />
            <Days />
            <Icons />
            <Degrees />
          </div>
        </div>
        <br />
        <footer>
          <a
            href="https://github.com/DelilahMureriwa/my-weather-app"
            target="_blank"
            rel="noreferrer"
            className="owner"
          >
            Open-source code
          </a>
          {""} ,by Delilah Mureriwa
        </footer>
      </div>
    </div>
  );
}
