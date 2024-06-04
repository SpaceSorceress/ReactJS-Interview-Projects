import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Header from "../Header";

function ModalPopup({ header, content, footer }) {
  const [showModal, setShowModal] = useState(false);
  function toggleShowModal() {
    setShowModal(!showModal);
  }
  return (
    <div className="mp-container">
      <button className="mp-button" onClick={toggleShowModal}>
        Open Modal
      </button>
      <dialog
        open={showModal}
        onCancel={toggleShowModal}
        className="modal-container"
      >
        <div className="modal-content">
          <div className="mp-header">
            <span onClick={toggleShowModal} className="close-modal-button">
              &times;
            </span>
            <Header title={header ? header : "Custom Header"} />
          </div>
          <section className="mp-body">
            {content ? content : "Custom Modal Content"}
          </section>
          <h3 className="mp-footer">{footer ? footer : "Footer"}</h3>
        </div>
      </dialog>
    </div>
  );
}

ModalPopup.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string,
};

export default function ModalPopupContainer() {
  const header = "Lorem Ipsum";
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const footer = "The standard Lorem Ipsum passage is used since the 1500s";
  return <ModalPopup header={header} content={content} footer={footer} />;
}
