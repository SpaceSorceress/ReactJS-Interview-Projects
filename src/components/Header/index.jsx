import PropTypes from "prop-types";
import "./styles.css";

export default function Header({ title }) {
  return <h1 className="header">{title}</h1>;
}

Header.propTypes = {
  title: PropTypes.string,
};
