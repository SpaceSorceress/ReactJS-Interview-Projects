import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

export default function MenuList({ list = [], setContent }) {
  return (
    <ul className="menu-list-container">
      {list?.length > 0 &&
        list.map((item) => (
          <MenuItem item={item} key={item.label} setContent={setContent} />
        ))}
    </ul>
  );
}

MenuList.propTypes = {
  list: PropTypes.array,
  setContent: PropTypes.func,
};
