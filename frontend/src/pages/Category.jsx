import React from "react";
import { useParams } from "react-router";
import Modal from "react-modal";
import DataCategory from "../utils/DataCategory";
import "../styles/Category.css";
import FicheDescription from "../components/FicheDescription";

function Category() {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState();
  const [modalImage, setModalImage] = React.useState();
  const [modalDescription, setModalDescription] = React.useState();

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleModal = (title, image, desciption) => {
    setModalTitle(title);
    setModalImage(image);
    setModalDescription(desciption);
    setModalIsOpen(true);
  };

  return (
    <div className="content-page category-page">
      <div className="container">
        {DataCategory.filter(
          (image) => image.category_id === parseInt(id, 10)
        ).map((image) => (
          <div
            key={image.id}
            className="box_items"
            onClick={() =>
              handleModal(image.title, image.image, image.description)
            }
            role="presentation"
            onKeyDown={(e) => e.preventDefault()}
          >
            <p>{image.title}</p>
            <img src={image.image} alt="" className="image_box" />
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          className="modal"
          overlayClassName="overlay"
          onRequestClose={closeModal}
        >
          <FicheDescription
            title={modalTitle}
            image={modalImage}
            description={modalDescription}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Category;
