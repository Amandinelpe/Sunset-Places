import React from "react";
import PropTypes from "prop-types";
import "../styles/PostItem.css";

function PostItem(props) {
  const { post, openModifyModal, handleDeletePost } = props;
  return (
    <div key={post.id} className="post-item">
      <h2>{post.title}</h2>
      <img className="post-image" src={post.image_url} alt="post" />
      <p>{post.description}</p>
      <button
        type="button"
        onClick={() => openModifyModal(post.id, post.title, post.description)}
        className="button_post_modifier"
      >
        Modifier
      </button>
      <button
        type="button"
        onClick={() => handleDeletePost(post.id)}
        className="button_post_supprimer"
      >
        Supprimer
      </button>
    </div>
  );
}

export default PostItem;

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  openModifyModal: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};
