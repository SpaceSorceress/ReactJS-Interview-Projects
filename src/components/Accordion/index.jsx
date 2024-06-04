//single selection
//multiple selection
import data from "./data";
import { useState } from "react";
import "./styles.css";
import Header from "../Header";

export default function Accordion() {
  const [selectedId, setSelectedId] = useState(null);
  const [multipleSelectedIds, setMultipleSelectedIds] = useState([]);
  const [multipleSelectionEnabled, setMultipleSelection] = useState(false);

  function handleSelection(currentId) {
    if (!multipleSelectionEnabled) {
      setSelectedId(selectedId === currentId ? null : currentId);
    } else {
      let index = multipleSelectedIds.indexOf(currentId);
      if (index === -1) {
        setMultipleSelectedIds([...multipleSelectedIds, currentId]);
      } else {
        let updatedSelection = [...multipleSelectedIds];
        updatedSelection.splice(index, 1);
        setMultipleSelectedIds(updatedSelection);
      }
    }
  }

  function shouldShowContent(id) {
    if (!multipleSelectionEnabled) {
      return selectedId === id;
    } else {
      return multipleSelectedIds.includes(id);
    }
  }

  return (
    <div className="acc-wrapper">
      <div className="acc-header">
        <Header title={"Accordion"} />
      </div>
      <button onClick={() => setMultipleSelection(!multipleSelectionEnabled)}>
        {multipleSelectionEnabled
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
              </div>
              {shouldShowContent(dataItem.id) ? (
                <div className="acc-content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
