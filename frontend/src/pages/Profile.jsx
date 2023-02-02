import PostItem from "@components/PostItem";
import PostModal from "@components/PostModal";
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
import actionEnum from "../utils/actionPostEnum";

function Profile() {
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [action, setAction] = useState();
  const [modalId, setModalId] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [modalDescription, setModalDescription] = useState();

  const { auth } = useContext(authContext);

  const openCreateModal = () => {
    setAction(actionEnum.CREATE);
    setModalTitle("");
    setModalDescription("");
    setModalIsOpen(true);
  };
  const openModifyModal = (id, title, description) => {
    setAction(actionEnum.UPDATE);
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

    if (action === actionEnum.CREATE) {
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
        <button type="button" onClick={openCreateModal} className="button_post">
          Create Post
        </button>
      </div>
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            handleDeletePost={handleDeletePost}
            openModifyModal={openModifyModal}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        className="modal"
        overlayClassName="overlay"
        onRequestClose={closeModal}
      >
        <PostModal
          action={action}
          modalTitle={modalTitle}
          setModalTitle={setModalTitle}
          modalDescription={modalDescription}
          setModalDescription={setModalDescription}
          onSubmit={onSubmit}
        />
      </Modal>
    </div>
  );
}

export default Profile;
