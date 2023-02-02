import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import {
  getPostsByUserId,
  createPost,
  deletePost,
  updatePost,
  updatePostImage,
} from "../apis/post";
import { authContext } from "../context/AuthContext";
import "../styles/Profile.css";

const ActionEnum = {
  CREATE: 1,
  UPDATE: 2,
};

function Profile() {
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [action, setAction] = useState();
  const [modalId, setModalId] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [modalDescription, setModalDescription] = useState();

  const { auth } = useContext(authContext);

  const openCreateModal = () => {
    setAction(ActionEnum.CREATE);
    setModalTitle("");
    setModalDescription("");
    setModalIsOpen(true);
  };
  const openModifyModal = (id, title, description) => {
    setAction(ActionEnum.UPDATE);
    setModalId(id);
    setModalTitle(title);
    setModalDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getPosts = async () => {
    setPosts(await getPostsByUserId(auth.data.id));
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
    getPosts();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const data = {
      title,
      description,
      userId: auth.data.id,
      categoryId: 1,
    };

    if (action === ActionEnum.CREATE) {
      const response = await createPost(data);
      const image = e.target.image.files[0];
      if (image) {
        const formData = new FormData();
        formData.append("img", image);
        await updatePostImage(response.insertId, formData);
      }
    } else {
      await updatePost(modalId, data);
      const image = e.target.image.files[0];
      if (image) {
        const formData = new FormData();
        formData.append("img", image);
        await updatePostImage(modalId, formData);
      }
    }
    getPosts();
    closeModal();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="content-page profile">
      <div>
        <button type="button" onClick={openCreateModal}>
          Create Post
        </button>
      </div>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <img className="post-image" src={post.image_url} alt="post" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button
              type="button"
              onClick={() =>
                openModifyModal(post.id, post.title, post.description)
              }
            >
              Modifier
            </button>
            <button type="button" onClick={() => handleDeletePost(post.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        className="modal"
        overlayClassName="overlay"
        onRequestClose={closeModal}
      >
        <div>
          <h2>{action === ActionEnum.CREATE ? "Create" : "Modify"} Post</h2>
          <form onSubmit={onSubmit}>
            <input type="file" name="image" id="image" />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={modalTitle}
              onChange={(e) => setModalTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={modalDescription}
              onChange={(e) => setModalDescription(e.target.value)}
            />
            <button type="submit">
              {action === ActionEnum.CREATE ? "Create" : "Modify"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Profile;
