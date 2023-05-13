import { AiFillCloseCircle } from "react-icons/ai";
import "./index.css";

const Bookslist = (props) => {
  const { userDetails, deleteUser } = props;
  const { name, author, uniqueNo } = userDetails;
  const onDelete = () => {
    deleteUser(uniqueNo);
  };
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <h1 className="user-name"> Book:{name} </h1>
        <p className="user-designation">Author name: {author} </p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        <AiFillCloseCircle />
      </button>
    </li>
  );
};

export default Bookslist;
