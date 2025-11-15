import React from "react";
import { useLoaderData, useParams } from "react-router";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import { addToStoredDB } from "../../Utilities/AddToDB";
import { addWLStoredBook } from "../../Utilities/AddToWL";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookId = parseInt(id);

  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook || {};
  const handleMarkAsRead = (id) => {
    addToStoredDB(id);

    MySwal.fire({
      title: "Added to Mark As Read!",
      icon: "success",
      draggable: true,
    });
  };
  const handleWishlist = (id) => {
    addWLStoredBook(id);
    MySwal.fire({
      title: "Added to Wishlist!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className=" w-2/3 mx-auto">
      <Navbar></Navbar>

      <img className="w-48" src={image} alt="" />
      <h4>{bookName}</h4>
      <button
        className="btn btn-accent m-2"
        onClick={() => handleMarkAsRead(id)}
      >
        Mark as Read
      </button>
      <button className="btn btn-info m-2" onClick={() => handleWishlist(id)}>
        Add to WishList
      </button>
      <Footer></Footer>
    </div>
  );
};

export default BookDetail;
