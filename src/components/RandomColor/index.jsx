import { useState } from "react";
import "./styles.css";
import Header from "../Header";

export default function RandomColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [colorSystem, setColorSystem] = useState("hex");

  function colorGenerator(code) {
    if (code !== colorSystem) {
      setColorSystem(code);
    }
    code === "hex"
      ? setColor(generateHexColor())
      : setColor(generateRgbColor());
  }

  function generateHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }

  function generateRgbColor() {
    function randomInteger(max) {
      return Math.floor(Math.random() * (max + 1));
    }
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
  }

  return (
    <div
      className="random-color-wrapper"
      style={{
        backgroundColor: color,
      }}
    >
      <Header title={"Random Color Generator"} />
      <div className="random-color-content">
        <h1>{colorSystem === "hex" ? "HEX" : "RGB"}</h1>
        <h2>{color}</h2>
      </div>
      <div className="random-buttons-row">
        <button className="random-button" onClick={() => colorGenerator("hex")}>
          Generate HEX color
        </button>
        <button className="random-button" onClick={() => colorGenerator("rgb")}>
          Generate RGB color
        </button>
      </div>
    </div>
  );
}
