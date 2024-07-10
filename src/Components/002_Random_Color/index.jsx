import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState("Black");

  function handleCreateRandomHEXColor() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for (let cnt = 1; cnt <= 6; cnt++)
      hexColor += hex[Math.floor(Math.random() * 16)];
    console.log(hexColor);

    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`RGB(${r},${g}, ${b})`);
    console.log(setColor);
  }

  useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRGBColor() ;
        else handleCreateRandomHEXColor() ;
  }, [typeOfColor]) ;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Create HEX Color{" "}
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Create RGB Color{" "}
      </button>

      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHEXColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color{" "}
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          marginTop: "50px",
          fontSize: "60px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color : " : "HEX Color : "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
