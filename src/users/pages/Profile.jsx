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

      {/* PROFILE HEADER */}
      <div className="bg-gray-900 pt-10 pb-20">
        <div className="flex justify-center md:justify-start md:ml-20">
          <div className="bg-white p-2 w-36 h-36 md:w-56 md:h-56 rounded-full">
            <img
              src={`${SERVERURL}/imgUploads/${profile}`}
              className="w-full h-full rounded-full object-cover"
              alt="profile"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 mt-6 gap-4">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-3xl flex items-center justify-center md:justify-start">
              {username}
              <MdVerified className="text-blue-600 ml-2" />
            </h1>
            <p className="text-gray-300">{bio}</p>
          </div>
          <Editprofile />
        </div>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center my-8 text-sm md:text-lg font-medium">
        {["Sell Book", "All Books", "Purchase History"].map((tab, idx) => (
          <p
            key={idx}
            onClick={() => {
              setsellBookstatus(tab === "Sell Book");
              setBookstaus(tab === "All Books");
              setpurchaseStatus(tab === "Purchase History");
            }}
            className={`p-3 cursor-pointer ${
              (sellBookstatus && tab === "Sell Book") ||
              (Bookstatus && tab === "All Books") ||
              (purchaseStatus && tab === "Purchase History")
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* SELL BOOK */}
      {sellBookstatus && (
        <div className="p-4 md:p-10">
          <div className="bg-gray-200 p-5 md:p-10 rounded">
            <h1 className="text-center text-2xl md:text-3xl font-semibold">
              Book Details
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {/* LEFT */}
              <div>
                {[
                  "title",
                  "author",
                  "nopages",
                  "imageURL",
                  "price",
                  "discountPrice",
                ].map((field) => (
                  <input
                    key={field}
                    placeholder={field}
                    value={bookDetails[field]}
                    onChange={(e) =>
                      setbookDetails({
                        ...bookDetails,
                        [field]: e.target.value,
                      })
                    }
                    className="p-2 w-full mb-3 rounded"
                  />
                ))}
                <textarea
                  placeholder="Abstract"
                  value={bookDetails.abstract}
                  onChange={(e) =>
                    setbookDetails({
                      ...bookDetails,
                      abstract: e.target.value,
                    })
                  }
                  className="p-2 w-full rounded"
                />
              </div>

              {/* RIGHT */}
              <div>
                {["publisher", "language", "isbn", "category"].map((field) => (
                  <input
                    key={field}
                    placeholder={field}
                    value={bookDetails[field]}
                    onChange={(e) =>
                      setbookDetails({
                        ...bookDetails,
                        [field]: e.target.value,
                      })
                    }
                    className="p-2 w-full mb-3 rounded"
                  />
                ))}

                <div className="flex flex-col items-center mt-4">
                  <label>
                    <input type="file" hidden onChange={Handlefile} />
                    <img
                      src={
                        preview ||
                        "https://static.vecteezy.com/system/resources/previews/024/263/832/original/upload-image-icon-vector.jpg"
                      }
                      className="w-40 h-40 object-cover cursor-pointer"
                      alt=""
                    />
                  </label>

                  <div className="flex gap-3 mt-4">
                    {allUploadImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="w-12 h-12 object-cover rounded"
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
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
        <div className="p-4 md:p-10">
          {userBooks.length > 0 ? (
            userBooks.map((book) => (
              <div
                key={book._id}
                className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mb-10"
              >
                <div>
                  <h1 className="text-xl font-semibold">{book.title}</h1>
                  <p>{book.author}</p>
                  <p className="text-blue-600">${book.price}</p>
                  <p>{book.abstract}</p>
                </div>

                <div>
                  <img
                    src={book.uploadImages?.[0]}
                    className="w-full h-64 object-cover rounded"
                    alt=""
                  />
                  <button
                    onClick={() => handleDeleteBook(book._id)}
                    className="bg-red-500 text-white w-full mt-3 p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-red-600">No Books Added</p>
          )}
        </div>
      )}

      {/* PURCHASE HISTORY */}
      {purchaseStatus && (
        <div className="p-4 md:p-10">
          {purchaseHistory.length > 0 ? (
            purchaseHistory.map((item, i) => (
              <div key={i} className="bg-gray-200 p-4 mb-4 rounded">
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.author}</p>
                <p className="text-green-600">${item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-red-600">No Purchase History</p>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Profile;
