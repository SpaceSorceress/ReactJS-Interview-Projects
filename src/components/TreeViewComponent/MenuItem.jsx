import { useState } from "react";
import MenuList from "./MenuList";
import PropTypes from "prop-types";

export default function MenuItem({ item = {}, setContent }) {
  const [renderChildren, setRenderChildren] = useState(false);

  function handleToggleRenderChildren() {
    setRenderChildren(!renderChildren);
  }

  return (
    <li className="menu-item">
      <div>
        <p>
          <span onClick={() => setContent(item.content)}>{item.label}</span>
          {item?.children?.length > 0 && (
            <span onClick={handleToggleRenderChildren} className="expand-sign">
              {renderChildren ? "-" : "+"}
            </span>
          )}
        </p>
        {item?.children?.length > 0 && renderChildren && (
          <MenuList list={item.children} setContent={setContent} />
        )}
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object,
  setContent: PropTypes.func,
};
