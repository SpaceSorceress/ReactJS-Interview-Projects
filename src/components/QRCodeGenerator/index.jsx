import { useState } from "react";
import Header from "../Header";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState(
    "https://www.linkedin.com/in/iuliia-siriakivska/"
  );

  function handleGenerateQRCode() {
    // if (input && input.trim() !== "")
    setQRCode(input);
    setInput("");
  }

  return (
    <div className="qr-container">
      <Header title={"QR Code Generator"} />
      <div className="qr-input-row">
        <input
          type="text"
          value={input}
          placeholder="Enter any value"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="qr-input"
        />
        <button
          onClick={handleGenerateQRCode}
          disabled={input.trim() == ""}
          className="qr-button"
        >
          Generate QR Code
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} size={400} />
    </div>
  );
}
