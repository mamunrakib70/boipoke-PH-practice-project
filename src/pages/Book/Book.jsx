import { FaStarHalfAlt } from "react-icons/fa";
import { RiH4 } from "react-icons/ri";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
 

  const {
    author,
    bookName,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId

  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card p-3 border  border-white bg-base-100 w-96 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <figure className="p-4  bg-gray-800 w-2/3 mx-auto ">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag,id) => (
              <button key={id}>{tag}</button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book By: {publisher}</p>
          <div className="border-1 border-dashed my-2"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
