import "./style.css";
import Icon4 from "../../images/icon4.png";
import Icon3 from "../../images/icon3.png";
import Icon2 from "../../images/icon2.png";
import Icon1 from "../../images/icon1.png";

function Footer() {
  return (
    <>
      <div id="footer">
        <div>
          <img id="icon1" src={Icon1} alt="icon1" />
          <h1>Declarative</h1>
          <p id="p">React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img id="icon2" src={Icon2} alt="icon2" />
          <h1>Components</h1>
          <p id="p">Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img id="icon3" src={Icon3} alt="icon3" />
          <h1>Single-Way</h1>
          <p id="p">A set os immutable values are passed to the component's.</p>
        </div>
        <div>
          <img id="icon4" src={Icon4} alt="icon4" />
          <h1>JSX</h1>
          <p id="p">Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
