import React, { useState } from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import { MdVerified } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  const [sellBookstatus, setsellBookstatus] = useState(true);
  const [Bookstatus, setBookstaus] = useState(false);
  const [purchaseStatus, setpurchaseStatus] = useState(false);
  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className="bg-gray-900">
        <div className="bg-white p-3 w-[230px] h-[230px] rounded-full ml-[75px]">
          {" "}
          {/* ml-[75px] mt-[-130px] */}
          <img
            className="w-[200px] h-[200px] rounded-full "
            src="https://imgs.search.brave.com/lJh6f-9znwC-LurhlEyw92uWE0w76EsDS4CskX6sQEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzMuanBnP3Nz/bD0x"
            alt=""
          />
        </div>
        <div className="md:flex justify-between px-20 mt-5">
          <div className="m-3">
            <div className="flex items-center">
              <h1 className="font-bold md:text-3xl text-2xl">alen</h1>
              <MdVerified className="text-blue-600 ms-3 text-xl" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              laborum veritatis sapiente illum perspiciatis magni magnam numquam
              id voluptatum tempora doloremque necessitatibus saepe, asperiores,
              omnis earum? Delectus porro tenetur eligendi.
            </p>
          </div>
          <div>
            <button className="flex px-4 py-3 font-bold border border-blue-600 text-blue-800">
              <FaRegEdit className="mt-1 me-2" /> Edit
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center items-center my-8 font-medium text-lg mt-42">
        <p
          onClick={() => {
            setsellBookstatus(true),
              setBookstaus(false),
              setpurchaseStatus(false);
          }}
          className={
            sellBookstatus
              ? "text-blue-500 p-4 border-gray-400 border-t border-l border-r rounded cursor-pointer"
              : "p-4 border-b border-gray-400 cursor-pointer"
          }
        >
          Sell Book
        </p>
        <p
          onClick={() => {
            setsellBookstatus(false),
              setBookstaus(true),
              setpurchaseStatus(false);
          }}
          className={
            Bookstatus
              ? "text-blue-500 p-4 border-gray-400 border-t border-l border-r rounded cursor-pointer"
              : "p-4 border-b border-gray-400 cursor-pointer"
          }
        >
          All Books
        </p>
        <p
          onClick={() => {
            setsellBookstatus(false),
              setBookstaus(false),
              setpurchaseStatus(true);
          }}
          className={
            purchaseStatus
              ? "text-blue-500 p-4 border-gray-400 border-t border-l border-r rounded cursor-pointer"
              : "p-4 border-b border-gray-400 cursor-pointer"
          }
        >
          Purchase History
        </p>
      </div>
      {sellBookstatus && (
        <div className="md:p-20 p-5">
          <div className="bg-gray-200 md:p-10 p-5 rounded">
            <h1 className="text-center text-3xl font-medium">Book Details</h1>
            <div className="md:grid grid-cols-2">
              <div className="md:my-10 mt-5 px-2">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Titele"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Author"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="No of Pages"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Image url"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Price"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Discount Price"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Abstract"
                    rows={"8"}
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
              </div>
              <div className="md:my-10 px-2">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Publisher"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Language"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="ISBN"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Category"
                    className="p-2 bg-white rounded w-full"
                  />
                </div>
                <div className="flex justify-center items-center mt-10 flex-col">
                  <label htmlFor="uploadbookimg">
                    <input
                      type="file"
                      style={{ display: "none" }}
                      alt="no image"
                    />
                    <img
                      src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png"
                      alt=""
                      style={{ width: "200px", height: "200px" }}
                    />
                  </label>
                </div>
                <div className="flex md:justify-end justify-center mt-5  gap-2">
                  <button className="bg-red-500 text-white px-5 py-3 rounded hover:border hover:border-red-500 hover:text-red-600 hover:bg-white">
                    Reset
                  </button>
                  <button className="bg-green-500 text-white px-5 py-3 rounded hover:border hover:border-green-500 hover:text-green-600 hover:bg-white">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*All Books  */}

     {Bookstatus && <div className="p-10 my-20 shadow rounded">
        <div className="bg-gray-200">
          <div className="md:grid grid-cols-[3fr_1fr]">
            <div className="px-4">
              <h1 className="text-2xl">Book Title</h1>
              <h2 className="">Author Name</h2>
              <h3 className="text-blue-600">$699</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab qui
                fugiat aut, deleniti omnis distinctio hic vitae magni
                aspernatur. Dignissimos repellendus debitis sint distinctio
                magni atque perferendis odit ratione consectetur.
              </p>
              <div className="flex mt-5">
                <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png " style={{width:"70px",height:"70px"}} alt="" />
                 <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png " style={{width:"70px",height:"70px"}} alt="" />
                  <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" style={{width:"70px",height:"70px"}} alt="" />
              </div>
            </div>
            <div className="px-4 mt-4 md:mt-4">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.jpg?ts=1734004864" className="" style={{height:"250px"}} alt="" />
              <div className="flex justify-end mt-4">
                <button className="p-2 rounded bg-red-500 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src="" style={{width:"200px",height:"200px"}} alt="" />
          <p className="text-red-600 text-2xl">No Book Added</p>
        </div>
      </div>}

      {/* Purchase History */}
     { purchaseStatus &&  <div className="p-10 my-20 shadow rounded">
        <div className="bg-gray-200">
          <div className="md:grid grid-cols-[3fr_1fr]">
            <div className="px-4">
              <h1 className="text-2xl">Book Title</h1>
              <h2 className="">Author Name</h2>
              <h3 className="text-blue-600">$699</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab qui
                fugiat aut, deleniti omnis distinctio hic vitae magni
                aspernatur. Dignissimos repellendus debitis sint distinctio
                magni atque perferendis odit ratione consectetur.
              </p>
             
            </div>
            <div className="px-4 mt-4 md:mt-4">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.jpg?ts=1734004864" className="" style={{height:"250px"}} alt="" />
              
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src="" style={{width:"200px",height:"200px"}} alt="" />
          <p className="text-red-600 text-2xl">No Book Added</p>
        </div>
      </div>}

      <Footer />
    </>
  );
}

export default Profile;
