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
  const [searchKey,setsearchKey]=useState("")
  console.log(searchKey);
  

  const getAllBooks = async (usertoken) => {
    const reqHeader = {
      Authorization: `Bearer ${usertoken}`,
    };

    try {
      const result = await getAllBooksAPI(searchKey,reqHeader);
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
  }, [searchKey]);

  return (
    <>
    <>
  <Header />

  {/* Title & Search */}
  <div className="flex flex-col items-center my-5 px-4">
    <h1 className="text-3xl font-bold my-5">Collections</h1>

    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <input
        value={searchKey}
        onChange={(e) => setsearchKey(e.target.value)}
        type="text"
        className="p-2 border border-gray-200 text-black w-full sm:w-80"
        placeholder="Search by title"
      />
      <button className="bg-blue-900 text-white px-4 py-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800">
        Search
      </button>
    </div>
  </div>

  {/* Main Content */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20 mb-10">
    
    {/* Sidebar Filters */}
    <div className="md:col-span-1">
      <h1 className="font-bold text-lg mb-4">Filters</h1>

      {allCategory.map((item, index) => (
        <div
          key={index}
          onClick={() => categoryFilter(item)}
          className="flex items-center mt-3 cursor-pointer"
        >
          <input type="radio" name="filter" />
          <label className="ml-2">{item}</label>
        </div>
      ))}

      <div
        onClick={() => categoryFilter("No filter")}
        className="flex items-center mt-3 cursor-pointer"
      >
        <input type="radio" name="filter" />
        <label className="ml-2">No Filter</label>
      </div>
    </div>

    {/* Books Section */}
    <div className="md:col-span-3">
      {allBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allBooks.map((item) => (
            <div
              key={item._id}
              className="shadow rounded p-3 flex flex-col"
            >
              <img
                src={item.imageURL}
                alt={item.title}
                className="w-full h-[280px] object-cover rounded"
              />

              <div className="flex flex-col items-center mt-4 flex-grow">
                <p className="font-semibold text-center">{item.title}</p>
                <p className="text-gray-600">{item.author}</p>

                <Link
                  to={`/view-books/${item._id}`}
                  className="mt-auto bg-blue-900 text-white p-2 w-full text-center
                             hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800
                             transition"
                >
                  View Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">No books found</p>
      )}
    </div>
  </div>

  {/* Not Logged In */}
  {!token && (
    <div className="my-10 flex flex-col items-center text-center px-4">
      <img
        src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif"
        className="w-64 sm:w-96"
        alt="login"
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

    </>
  );
}

export default AllBooks;
