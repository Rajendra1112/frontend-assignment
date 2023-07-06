import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { id, image, title, price } = data;

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <Link to={`/product/${id}`} className="link titleLink">
          {title}
        </Link>
      </div>
      <div className="flex">
        <span className="price" style={{ marginRight: 15 }}>
          ${price}
        </span>
      </div>
    </div>
  );
};

export { Item };
