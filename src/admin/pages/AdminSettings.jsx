import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminSettings() {
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-[1fr_4fr]'>
      <div>
        <AdminSidebar/>
      </div>
      <div className='p-4'>
        <h1 className='text-3xl text-center font-semibold'>Settings</h1>
        <div className='md:grid grid-cols-2 mt-10'>
          <div className='md:px-10 px-5'>
            <p className='text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolorem aperiam necessitatibus asperiores alias aut modi, voluptatibus veritatis sit blanditiis
               ipsum tempore neque at reprehenderit, distinctio dolor corrupti beatae nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto nemo debitis, eius impedit quis eveniet possimus earum labore cumque sunt similique!
                A ullam, iusto aut accusantium illum blanditiis voluptas!
            </p>
            <p className='text-justify mt-10'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi doloremque temporibus possimus, tenetur excepturi. Vitae, aliquam, maiores magnam cupiditate,
               debitis dicta voluptate accusantium in repellendus nam dolor. Cum, quidem!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aperiam voluptatibus asperiores facere ab maiores assumenda architecto molestias esse numquam laudantium,
                consequuntur quaerat recusandae fuga. Magnam esse debitis quo id!

            </p>

          </div>

          <div className='md:px-10 px-5'>
            <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0'>
              <div className='flex justify-center items-center my-10'>
                <label htmlFor='editUserProfile'>
                  <input type='file' id='editUserProfile' style={{display:"none"}} ></input>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_5z67_9w_D7bU4LdQJy2ponyHEparph_07p0LK3j4askGjPAX-rG9DFwfqEK1IT3Q6o&usqp=CAU' style={{width:"170px",height:"150px",borderRadius:"50%"}} alt='profile Img'/>
                 </label>
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Username</label>
                <input type='text' placeholder='Username' className='bg-white w-full p-2'></input>

              </div>


              <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input type='text' placeholder='password' className='bg-white w-full p-2'></input>

              </div>




              <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input type='text' placeholder='Confirm Password' className='bg-white w-full p-2'></input>

              </div>


              <div className='flex justify-between mt-10'>
                <button className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
               
                <button className='bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
              </div>



            </form>
          </div>


        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminSettings