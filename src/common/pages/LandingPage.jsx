import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getHomeBookAPI } from "../../Service/allAPI";

function LandingPage() {
  const [homeBook, setHomeBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getHomeBooks = async () => {
    try {
      const result = await getHomeBookAPI();
      setHomeBook(result.data || []);
    } catch (error) {
      console.error("Failed to fetch home books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHomeBooks();
  }, []);

  const testimonials = [
    {
      name: "Stefan J",
      image:
        "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
      rating: 5,
      text:
        "Company Name delivered such strong professionalism and responsive communications that they earned a second project as well as recommendations for additional partnerships.",
    },
    {
      name: "Marcus M",
      image:
        "https://media.istockphoto.com/id/1135381173/photo/portrait-of-a-young-man-outdoors-smiling.jpg",
      rating: 5,
      text:
        "Company Name delivered such strong professionalism and responsive communications that they earned a second project as well as recommendations for additional partnerships.",
    },
    {
      name: "Smrithi S",
      image:
        "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg",
      rating: 5,
      text:
        "Company Name delivered such strong professionalism and responsive communications that they earned a second project as well as recommendations for additional partnerships.",
    },
  ];

  const filteredBooks = homeBook.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center text-white"
        style={{
          height: "500px",
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg)",
        }}
      >
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <h1 className="text-6xl font-bold">Wonderful Gifts</h1>
          <p className="mt-2">Give Your Family and Friends a Book</p>

          <div className="mt-9 relative">
            <input
              type="text"
              placeholder="Search books"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white px-5 py-2 rounded-3xl w-full text-black placeholder-gray-500"
            />
            <HiMiniMagnifyingGlass className="absolute right-4 top-2.5 text-gray-500 text-xl" />
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="md:px-40 p-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold">NEW ARRIVALS</h1>
        <p className="text-gray-600">Explore our latest collection</p>

        {loading ? (
          <p className="mt-10">Loading...</p>
        ) : filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mt-5">
            {filteredBooks.map((item) => (
              <div className="p-3" key={item._id}>
                <div className="shadow p-3 rounded hover:shadow-lg transition">
                  <img
                    src={item.imageURL}
                    alt={item.title || "Book"}
                    className="w-full h-[300px] object-cover rounded"
                  />

                  <div className="text-center mt-3">
                    <p className="font-bold text-xl">{item.title}</p>
                    <p className="font-semibold text-gray-700">
                      {item.author}
                    </p>
                    <p className="font-bold text-green-600">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10">No books found</p>
        )}

        <div className="text-center my-5">
          <Link
            to="/all-books"
            className="px-4 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white transition"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Featured Author */}
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-gray-700 text-justify">
            <h4 className="text-3xl font-serif text-red-800 mb-4">
              Featured Authors
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              fuga nostrum illum distinctio eum quidem recusandae soluta aliquam
              laboriosam odit quas, nam molestias fugiat culpa rem nulla iste.
            </p>
          </div>

          <div className="flex-1">
            <img
              src="https://artseverywhere.unc.edu/wp-content/uploads/sites/1113/2020/07/Claire_Shu-300x282.jpg"
              alt="Author"
              className="w-full h-80 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-serif text-red-800">Testimonials</h3>
        <p className="text-gray-700 mb-8">
          See what others are saying
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-purple-700">
                {t.name}
              </h4>
              <div className="flex justify-center text-yellow-500 my-2">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;
