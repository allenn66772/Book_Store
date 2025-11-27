import React, { useEffect, useState } from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import { Link } from "react-router-dom";
import { getAllBooksAPI } from "../../Service/allAPI";

function AllBooks() {
  const [token, setToken] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [allCategory, setallCategory] = useState([]);
  const [tempBooks,settempBooks]=useState([])

  const getAllBooks = async (usertoken) => {
    const reqHeader = {
      Authorization: `Bearer ${usertoken}`,
    };

    try {
      const result = await getAllBooksAPI(reqHeader);
      console.log(result);

      if (result.status === 200) {
        setAllBooks(result.data); // IMPORTANT
        settempBooks(result.data)
        // setallCategory(result.data.map((item) => item.category));
        const tempCategory =result.data.map(item =>item.category)
        setallCategory([...new Set(tempCategory)])
      }
    } catch (error) {
      console.log(error);
    }
  };

  const categoryFilter=(category)=>{
    if(category == "No filter"){
      setAllBooks(tempBooks)
    }else{
      setAllBooks(tempBooks.filter(item=>item.category.toLowerCase()==category.toLowerCase()))
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const usertoken = sessionStorage.getItem("token");
      setToken(usertoken);
      getAllBooks(usertoken);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col my-5">
        <h1 className="text-3xl font-bold my-5">Collections</h1>

        {/* Search */}
        <div className="flex my-5">
          <input
            type="text"
            className="p-2 border border-gray-200 text-black w-100 placeholder-gray-500"
            placeholder="Search by title"
          />
          <button className="bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800">
            Search
          </button>
        </div>
      </div>

      <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
        {/* Sidebar Filters */}
        <div className="col-span-1">
          <h1>Filters</h1>
          {allCategory.map((item, index) => (
            <div onClick={()=>categoryFilter(item)} key={index} className="mt-5">
              <input id={item} type="radio" name="filter" />
              <label className="ms-2">{item}</label>
            </div>
          ))}

          <div onClick={()=>categoryFilter("No filter")} className="mt-5">
            <input type="radio" name="filter" id="nofilter" />
            <label htmlFor="nofliter" className="ms-2">No Filter</label>
          </div>
        </div>

        {/* Books Section */}
        <div className="col-span-3">
          {allBooks.length > 0 ? (
            <div className="md:grid grid-cols-4 mt-5">
              {allBooks.map((item) => (
                <div key={item._id} className="shadow rounded p-3 mx-4 my-3">
                  <img src={item.imageURL} width="100%" height="300px" alt="" />

                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">{item.author}</p>

                    <Link
                      to={`/view-books/${item._id}`}
                      className="bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 w-full text-center mt-3"
                    >
                      View Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-5">No book...</p>
          )}
        </div>
      </div>

      {/* If user not logged in */}
      {!token && (
        <div className="my-10 flex justify-center items-center flex-col">
          <img
            src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif"
            width={400}
            alt=""
          />
          <p className="font-semibold text-xl mt-5">
            Please{" "}
            <Link to="/login" className="text-blue-700 font-bold">
              Login
            </Link>{" "}
            to Explore More
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default AllBooks;
