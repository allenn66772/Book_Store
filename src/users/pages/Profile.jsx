import React, { useContext, useEffect, useState } from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import { MdVerified } from "react-icons/md";
import { toast } from "react-toastify";
import {
  addBookAPI,
  deleteUserAddedBookAPI,
  GetPurchaseHistoryAPI,
  getUserBookAPI,
} from "../../Service/allAPI";
import Editprofile from "../components/Editprofile";
import SERVERURL from "../../Service/ServerURL";
import { userprofileUpdateContext } from "../../Context/ContextShare";

function Profile() {
  const [sellBookstatus, setsellBookstatus] = useState(true);
  const [Bookstatus, setBookstaus] = useState(false);
  const [purchaseStatus, setpurchaseStatus] = useState(false);

  const [preview, setpreview] = useState("");
  const [purchaseHistory, setpurchaseHistory] = useState([]);
  const [allUploadImages, setallUploadImages] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setbio] = useState("");
  const [profile, setprofile] = useState("");
  const [userBooks, setuserBooks] = useState([]);

  const { userProfileUpdatestatus } = useContext(userprofileUpdateContext);

  const [deleteBookStatus, setdeleteBookStatus] = useState(false);

  const [bookDetails, setbookDetails] = useState({
    title: "",
    author: "",
    nopages: "",
    imageURL: "",
    price: "",
    discountPrice: "",
    uploadImages: [],
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
  });

  const Handlefile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);

    setbookDetails({
      ...bookDetails,
      uploadImages: [...bookDetails.uploadImages, e.target.files[0]],
    });

    setallUploadImages([...allUploadImages, url]);
    setpreview(url);
  };

  const Handlereset = () => {
    setbookDetails({
      title: "",
      author: "",
      nopages: "",
      imageURL: "",
      price: "",
      discountPrice: "",
      uploadImages: [],
      abstract: "",
      publisher: "",
      language: "",
      isbn: "",
      category: "",
    });

    setpreview("");
    setallUploadImages([]);
  };

  const HandleaddBook = async () => {
    const {
      title,
      author,
      nopages,
      imageURL,
      price,
      discountPrice,
      uploadImages,
      abstract,
      publisher,
      language,
      isbn,
      category,
    } = bookDetails;

    if (
      !title ||
      !author ||
      !nopages ||
      !imageURL ||
      !price ||
      !discountPrice ||
      !abstract ||
      !publisher ||
      !language ||
      !isbn ||
      !category ||
      uploadImages.length === 0
    ) {
      return toast.info("Fill all fields completely");
    }

    const reqHeader = { Authorization: `Bearer ${token}` };
    const reqBody = new FormData();

    for (let key in bookDetails) {
      if (key !== "uploadImages") reqBody.append(key, bookDetails[key]);
      else uploadImages.forEach((img) => reqBody.append("uploadImages", img));
    }

    try {
      const result = await addBookAPI(reqBody, reqHeader);

      if (result.status === 200) {
        toast.success("Book Added Successfully");
        Handlereset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const userAddedBooks = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await getUserBookAPI(reqHeader);
    setuserBooks(result.data);
  };

  const handleDeleteBook = async (id) => {
    const result = await deleteUserAddedBookAPI(id);

    if (result.status === 200) {
      toast.success("Book Deleted Successfully");
      setdeleteBookStatus((prev) => !prev);
    } else {
      toast.error("Something went wrong");
    }
  };

  const getPurchaseHistory = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await GetPurchaseHistoryAPI(reqHeader);
    setpurchaseHistory(result.data);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }

    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUsername(user.username);
      setbio(user.bio);
      setprofile(user.profile);
    }

    if (Bookstatus) userAddedBooks();
    if (purchaseStatus) getPurchaseHistory();
  }, [Bookstatus, purchaseStatus, deleteBookStatus, userProfileUpdatestatus]);

  return (
    <>
      <Header />

      <div className="bg-gray-900 h-[200px]">
        <div className="bg-white p-3 w-[230px] h-[230px] rounded-full ml-[75px]">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src={`${SERVERURL}/imgUploads/${profile}`}
            alt=""
          />
        </div>

        <div className="md:flex justify-between px-20 mt-5">
          <div>
            <h1 className="font-bold text-3xl flex items-center">
              {username} <MdVerified className="text-blue-600 ml-2" />
            </h1>
            <p>{bio}</p>
          </div>

          <Editprofile />
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p
          onClick={() => {
            setsellBookstatus(true);
            setBookstaus(false);
            setpurchaseStatus(false);
          }}
          className={`p-4 cursor-pointer ${
            sellBookstatus
              ? "text-blue-500 border-t border-l border-r rounded"
              : "border-b"
          }`}
        >
          Sell Book
        </p>

        <p
          onClick={() => {
            setsellBookstatus(false);
            setBookstaus(true);
            setpurchaseStatus(false);
          }}
          className={`p-4 cursor-pointer ${
            Bookstatus
              ? "text-blue-500 border-t border-l border-r rounded"
              : "border-b"
          }`}
        >
          All Books
        </p>

        <p
          onClick={() => {
            setsellBookstatus(false);
            setBookstaus(false);
            setpurchaseStatus(true);
          }}
          className={`p-4 cursor-pointer ${
            purchaseStatus
              ? "text-blue-500 border-t border-l border-r rounded"
              : "border-b"
          }`}
        >
          Purchase History
        </p>
      </div>

      {/* Sell Book Form */}
      {sellBookstatus && (
        <div className="p-10">
          <div className="bg-gray-200 p-10 rounded">
            <h1 className="text-center text-3xl font-semibold">Book Details</h1>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {/* Left Side Inputs */}
              <div>
                <input
                  type="text"
                  value={bookDetails.title}
                  onChange={(e) =>
                    setbookDetails({ ...bookDetails, title: e.target.value })
                  }
                  placeholder="Title"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.author}
                  onChange={(e) =>
                    setbookDetails({ ...bookDetails, author: e.target.value })
                  }
                  type="text"
                  placeholder="Author"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.nopages}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      nopages: e.target.value,
                    })
                  }
                  placeholder="Number of pages"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.imageURL}
                  onChange={(e) =>
                    setbookDetails({ ...bookDetails, imageURL: e.target.value })
                  }
                  placeholder="Image URL"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.price}
                  onChange={(e) =>
                    setbookDetails({ ...bookDetails, price: e.target.value })
                  }
                  placeholder="Price"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.discountPrice}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      discountPrice: e.target.value,
                    })
                  }
                  placeholder="Discount Price"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <textarea
                  value={bookDetails.abstract}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      abstract: e.target.value,
                    })
                  }
                  placeholder="Abstract"
                  className="p-2 bg-white rounded w-full mb-3"
                />
              </div>

              {/* Right Side */}
              <div>
                <input
                  value={bookDetails.publisher}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      publisher: e.target.value,
                    })
                  }
                  placeholder="Publisher"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.language}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      language: e.target.value,
                    })
                  }
                  placeholder="Language"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.isbn}
                  onChange={(e) =>
                    setbookDetails({ ...bookDetails, isbn: e.target.value })
                  }
                  placeholder="ISBN"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                <input
                  value={bookDetails.category}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      category: e.target.value,
                    })
                  }
                  placeholder="Category"
                  className="p-2 bg-white rounded w-full mb-3"
                />

                {/* Upload Preview */}
                <div className="flex flex-col items-center mt-4">
                  {!preview ? (
                    <label htmlFor="uploadBookImg">
                      <input
                        onChange={Handlefile}
                        id="uploadBookImg"
                        type="file"
                        hidden
                      />
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/024/263/832/original/upload-image-icon-vector.jpg"
                        style={{ width: 200, height: 200 }}
                        alt=""
                      />
                    </label>
                  ) : (
                    <img
                      src={preview}
                      style={{ width: 200, height: 200 }}
                      alt=""
                    />
                  )}

                  {/* Small thumbnails */}
                  {allUploadImages.length > 0 && (
                    <div className="flex gap-4 mt-4">
                      {allUploadImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          style={{ width: 60, height: 60 }}
                          alt=""
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end mt-6 gap-3">
                  <button
                    onClick={Handlereset}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Reset
                  </button>

                  <button
                    onClick={HandleaddBook}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ALL BOOKS */}
      {Bookstatus && (
        <div className="p-10 my-20 shadow rounded">
          {userBooks.length > 0 ? (
            userBooks.map((book) => (
              <div key={book._id} className="grid md:grid-cols-[3fr_1fr] mb-10">
                <div className="px-4">
                  <h1 className="text-2xl">{book.title}</h1>
                  <p>{book.author}</p>
                  <p className="text-blue-600">${book.price}</p>
                  <p>{book.abstract}</p>

                  <div className="mt-4">
                    {book.status === "pending" ? (
                      <img
                        src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png"
                        style={{ width: 70 }}
                      />
                    ) : book.status === "approved" ? (
                      <img
                        src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png"
                        style={{ width: 70 }}
                      />
                    ) : (
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png"
                        style={{ width: 70 }}
                      />
                    )}
                  </div>
                </div>

                <div className="px-4">
                  <img
                    src={book.uploadImages?.[0]}
                    style={{ height: 250 }}
                    alt=""
                  />

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleDeleteBook(book._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7486/7486754.png"
                style={{ width: 150 }}
              />
              <p className="text-red-600 text-xl mt-2">No Books Added</p>
            </div>
          )}
        </div>
      )}

      {/* PURCHASE HISTORY */}
      {purchaseStatus && (
        <div className="p-10 my-20 shadow rounded">
          {purchaseHistory.length > 0 ? (
            purchaseHistory.map((item, idx) => (
              <div key={idx} className="bg-gray-200 p-4 mb-6 rounded">
                <h2 className="text-xl">{item.title}</h2>
                <p>{item.author}</p>
                <p className="text-green-600">Purchased: ${item.price}</p>
              </div>
            ))
          ) : (
            <h1 className="text-center text-xl text-red-600">
              No Purchase History
            </h1>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Profile;
