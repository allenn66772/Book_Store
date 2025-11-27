import React, { useEffect, useState } from "react";
import Header from "../../common/components/Header";
import { FaRegEye } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import Footer from "../../common/components/Footer";
import { useParams } from "react-router-dom";
import { getABookAPI } from "../../Service/allAPI";
import SERVERURL from "../../Service/ServerURL";
import { Link } from "react-router-dom";

function ViewBook() {
  const [modalStatus, setmodalStatus] = useState(false);
  const [bookDetails, setbookDetails] = useState({});
  const { id } = useParams();

  const getABook = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = { " Authorization": `Bearer ${token}` };

    try {
      const result = await getABookAPI(id, reqHeader);
      console.log(result);
      setbookDetails(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log();

  useEffect(() => {
    getABook();
  }, []);

  return (
    <>
      <Header />
      <div className="md:p-20 p-5">
        <div className="shadow w-full md:p-10 p-5">
          <div className="flex justify-end">
            <FaRegEye onClick={() => setmodalStatus(true)} />
          </div>
          <div className="md:grid grid-cols-[1fr_3fr] w-full">
            <div>
              <img src={bookDetails?.imageURL} className="w-full h-100" />
            </div>
            <div className="px-4">
              <h1 className="text-center font-medium text-2xl">
                {bookDetails?.title}
              </h1>
              <p className="text-center text-blue-500">
                {bookDetails?.author} (Author)
              </p>
              <div className="md:flex justify-between mt-10">
                <p>{bookDetails?.publisher}</p>
                <p>{bookDetails?.language}</p>
                <p>No: of Pages:{bookDetails?.nopages}</p>
              </div>
              <div className="md:flex justify-between mt-10">
                <p>Seller Mail:{bookDetails?.userMail}</p>
                <p>Real Price:{bookDetails?.price}</p>
                <p>ISBN:{bookDetails?.isbn}</p>
              </div>
              <p className="text-justify mt-10">{bookDetails?.abstract}</p>
              <div className="mt-10 flex justify-end">
                <Link to="/all-books" className="flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800">
                  <FaBackward className="mt-1 me-2" />
                  Back
                </Link>
                <button className="flex px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-5">
                  Buy ₹
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalStatus && (
        <div className="relative z-10 overflow-y-hidden">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen scroll-auto">
              <div className="bg-white rounded-2xl md:w-250 w-100">
                <div className="bg-black text-white flex justify-between items-center p-3">
                  <h3>Book Images</h3>
                  <button onClick={() => setmodalStatus(false)} className="">
                    {" "}
                    x
                  </button>
                </div>
                <div className="relative p-5">
                  <p className="text-blue-600">
                    Camera Click of the book in the hand of seller
                  </p>
                </div>
                <div className="md:flex flex-wrap my-4 overflow-y-hidden">

                { bookDetails?.uploadImages.length>0 ?
                bookDetails?.uploadImages?.map(img=>(
                   <img
                    height={"250px"}
                    width={"250px"}
                    className="mx-2 md:mb-0 mb-2"
                    src={`${SERVERURL}/imgUploads/${img}`}
                    alt=""
                  />
                  
                )) 
:
                  <p className="font-bold text-red-600 ms-5">
                    User Uploaded book images are unavailable....
                  </p>}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ViewBook;
