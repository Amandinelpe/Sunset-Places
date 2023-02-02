import React, { useEffect } from "react";
import "../styles/CategoriesList.css";
import { Link } from "react-router-dom";
import plages from "../assets/plages.png";
import villes from "../assets/ville.png";
import montagne from "../assets/montagne.png";
import { getAllCategories } from "../apis/category";

const imagesCategories = [
  { id: 1, image: plages },
  { id: 2, image: villes },
  { id: 3, image: montagne },
];

function CategoriesList() {
  const [categories, setCategories] = React.useState([]);

  const getCategories = async () => {
    setCategories(await getAllCategories());
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="category">
      <div className="title">
        <h1>Sunset Places</h1>
      </div>
      <div className="category-items">
        {categories.map((category) => (
          <Link to={`/Category/${category.id}`} key={category.id}>
            <div className="category_title">
              <p>{category.name}</p>
              <img
                src={
                  imagesCategories.filter(
                    (image) => image.id === category.id
                  )[0].image
                }
                alt={category.name}
                className="emoji"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
