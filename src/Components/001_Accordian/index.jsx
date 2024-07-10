import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  // const [changeColor, setChangeColor] = useState("Black");

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId == selected ? null : getCurrentId);

    console.log(selected)
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    let findIndex = cpyMultiple.indexOf(getCurrentId);

    if (findIndex == -1) { // Not present
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndex, 1);
    }

    setMultiple(cpyMultiple);
    console.log(cpyMultiple)
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
        style={{backgroundColor: enableMultiSelection ? 'green' : 'black'}}
      >
        Enable Multi Selection {enableMultiSelection ? " : ON" : " : OFF"}
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="titel"
              >
                <h3>{dataItem.question}</h3>
                <span className="plus">+</span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
