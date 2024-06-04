import { useState } from "react";
import Header from "../Header";
import MenuList from "./MenuList";
import menu from "./data";
import "./styles.css";

export default function TreeViewMenu() {
  const [pageContent, setPageContent] = useState("Expandable Menu");
  return (
    <div className="tree-view-container">
      <div className="tree-view-content">
        <MenuList list={menu} setContent={setPageContent} />
      </div>
      <div className="tree-view-page">
        <Header title={pageContent} />
      </div>
    </div>
  );
}
