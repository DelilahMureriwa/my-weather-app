import "./App.css";
import Current from "./Current";
import Date from "./Date";
import Temperature from "./Temperature";
import Days from "./Days";
import Icons from "./Icons";
import Degrees from "./Degrees";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Current />
            <City />
            <Date />
            <br />
            <Temperature />
            <br />
            <br />
            <Days />
            <Icons />
            <Degrees />
          </div>
        </div>
      </div>
    </div>
  );
}
