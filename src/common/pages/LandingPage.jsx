import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


function LandingPage() {
  const testimonials = [
  {
    name: "Stefan J",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
    rating: 5,
    text: "Company Name delivered such strong professionalism and responsive communications that they earned a second project as well as recommendations for additional partnerships.",
  },
  {
    name: "Marcus M",
    image: "https://media.istockphoto.com/id/1135381173/photo/portrait-of-a-young-man-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=J8DKGHI8o-oj8cY1CCNpFY2V9OmVVbJuKSO2DdbMvRg=",
    rating: 5,
    text: "Company Name delivered such strong professionalism and responsive communications that they earned a second project as well as recommendations for additional partnerships.",
  },
  {
    name: "Smrithi S",
    image: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
    rating: 5,
    text: "Company Name delivered such strong professionalism and responsive communications that they earned a second project as well as recommendations for additional partnerships.",
  },
];

  return (
    <>
    <Header/>

    {/* landing */}

    <div style={{height:"500px"}} className='flex flex-col h-screen justify-center items-center bg-[url(https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg)] 
    bg-no-repeat bg-cover bg-center text-white'>
        <div className='w-full flex flex-col justify-center items-center ' style={{height:"500px", backgroundColor:"rgba(0,0,0,0.5)"}}>
            <h1 className='text-6xl font-bold'>Wonderful Gifts </h1>
            <p className='mt-2'>Give Your Family and Friends a Book</p>
            <div className='mt-9 flex'>
                <input type="text" placeholder='Search books' className='bg-white p-2 rounded-3xl placeholder-gray-500 w-100 text-black'/>
                <HiMiniMagnifyingGlass className='text-gray-500 text-2xl mt-2' style={{marginLeft:"-40px"}} />
            </div>
        </div>

    </div>
    {/* new arrivals */}
    <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
      <h1>NEW ARRIVALS</h1>
      <h1>Explore our latest colletion</h1>
      <div className='md:grid grid-cols-4 w-full mt-5'>
        <div className='p-3'>
          <div className='shadow p-3 rounded'>
            <img height={"300px"} width={"100%"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1BqA5OjYp-kgva4qy8OqgF6IHwGy_C7pRw&s'/>
            <div className='text-center mt-3'>
              <p className='font-bold text-2xl'>Book Name</p>
              <p className='font-bold text-xl'>Author</p>
              <p className='font-bold'>₹499</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center my-5'>
        <Link to={"/all-books"}><button className='px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>
      </div>

    </section>
    {/* Featured authors */}

     <section className="px-6 md:px-16 lg:px-24 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-10">
          <h4 className="text-3xl md:text-4xl font-serif text-red-800 mt-2">
            Featured Authors
          </h4>
          <h2 className="text-2xl md:text-xl font-serif text-gray-800 mt-2">
            Captivates with every word
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
        
          <div className="flex-1 text-gray-700 space-y-6 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              fuga nostrum illum distinctio eum quidem recusandae soluta aliquam
              laboriosam odit quas, nam molestias fugiat culpa rem nulla iste?
              Modi, molestias. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Sunt earum possimus accusantium necessitatibus
              id neque soluta quibusdam explicabo laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              fuga nostrum illum distinctio eum quidem recusandae soluta aliquam
              laboriosam odit quas, <br></br>
              Sunt earum possimus accusantium necessitatibus
              id neque soluta quibusdam explicabo laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              fuga nostrum illum distinctio eum quidem recusandae soluta aliquam
              laboriosam odit quas,
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
      </div>
    </section>

    {/* Testimonial */}

      <section className="bg-white py-16 px-6 md:px-20 text-center">
     
      <h3 className="text-3xl md:text-4xl font-serif text-red-800 mt-2">
        Testimonials
      </h3>
      <h2 className="text-xl md:text-2xl font-serif text-gray-800 mt-2">
        See What Others Are Saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

           
            <h4 className="font-semibold text-purple-700 mb-1">{t.name}</h4>
           
            <div className="flex items-center justify-center mb-3 text-yellow-500">
              <span className="font-semibold text-lg mr-1"></span>
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

           
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.text}
            </p>
          </div>
        ))}
      </div>
    </section>
    






  <Footer/>





    </>
  )
}

export default LandingPage