// Third Party Library Package

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
  }

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(event) => setInput(event.target.value.trim())}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />

        <button disabled={!(input && input.length)} onClick={handleGenerateQRCode}>Generator</button>
      </div>
      <div>
        <QRCode id="qr-code-id" value={qrCode} size={400} />
      </div>
    </div>
  );
}
