import React from "react";
import PropTypes from "prop-types";
import actionEnum from "../utils/actionPostEnum";
import "../styles/PostModal.css";

function PostModal({
  action,
  modalTitle,
  setModalTitle,
  modalDescription,
  setModalDescription,
  onSubmit,
}) {
  return (
    <div className="post-modal">
      <h2>{action === actionEnum.CREATE ? "Create" : "Modify"} Post</h2>
      <form className="post-modal-form" onSubmit={onSubmit}>
        <input
          type="file"
          name="image"
          id="image"
          className="input-post-image"
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={modalTitle}
          onChange={(e) => setModalTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={modalDescription}
          onChange={(e) => setModalDescription(e.target.value)}
        />
        <button type="submit" className="button_post">
          {action === actionEnum.CREATE ? "Create" : "Modify"}
        </button>
      </form>
    </div>
  );
}

export default PostModal;

PostModal.propTypes = {
  action: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  setModalTitle: PropTypes.func.isRequired,
  modalDescription: PropTypes.string.isRequired,
  setModalDescription: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
