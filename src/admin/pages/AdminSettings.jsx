import React, { useContext, useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../common/components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { toast } from "react-toastify";
import { updateAdminProfileAPI } from "../../Service/allAPI";
import SERVERURL from "../../Service/ServerURL";
import { adminprofileUpdateContext } from "../../Context/ContextShare";

function AdminSettings() {
  const [token, setToken] = useState("");
  const [preview, setpreview] = useState("");
  const [Existingprofile, setExistingprofile] = useState("");
  const [adminDetails, setadminDetails] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    profile: "",
  });
   const {setadminProfileUpdatestatus}=useContext(adminprofileUpdateContext)
  console.log(adminDetails);
  console.log(Existingprofile);

  const handleReset = () => {
    let user = JSON.parse(sessionStorage.getItem("existingUser"));
    setadminDetails({
      ...adminDetails,
      username: user.username,
      password: user.password,
      confirmpassword: user.confirmpassword,
    });
    setExistingprofile(user.profile);
    setpreview("");
  };

  const handleFile = (e) => {
    setadminDetails({ ...adminDetails, profile: e.target.files[0] });
    setpreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    const { username, password, confirmpassword } = adminDetails;
    if (!username || !password || !confirmpassword) {
      toast.info("Fill All Fields completely");
    } else {
      if (password != confirmpassword) {
        toast.error("Password Must Match");
      } else {
        //reqHeader
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };

        if (preview) {
          const reqBody = new FormData();
          for (let key in adminDetails) {
            reqBody.append(key, adminDetails[key]);
          }
          const result = await updateAdminProfileAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status == 200) {
            toast.success("Profile Updated Sucessfully");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            setadminProfileUpdatestatus(result)
          } else {
            toast.error("Something went Wrong");
          }
        } else {
          const result = await updateAdminProfileAPI(
            { username, password, confirmpassword, profile: Existingprofile },
            reqHeader
          );
          console.log(result);
          if (result.status == 200) {
            toast.success("Profile Updated Sucessfully");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            setadminProfileUpdatestatus(result)
          } else {
            toast.error("Something went Wrong");
          }
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      let user = JSON.parse(sessionStorage.getItem("existingUser"));
      setadminDetails({
        ...adminDetails,
        username: user.username,
        password: user.password,
        confirmpassword: user.confirmpassword,
      });
      setExistingprofile(user.profile);
    }
  }, []);
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>
        <div className="p-4">
          <h1 className="text-3xl text-center font-semibold">Settings</h1>
          <div className="md:grid grid-cols-2 mt-10">
            <div className="md:px-10 px-5">
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum dolorem aperiam necessitatibus asperiores alias aut
                modi, voluptatibus veritatis sit blanditiis ipsum tempore neque
                at reprehenderit, distinctio dolor corrupti beatae nobis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quod
                architecto nemo debitis, eius impedit quis eveniet possimus
                earum labore cumque sunt similique! A ullam, iusto aut
                accusantium illum blanditiis voluptas!
              </p>
              <p className="text-justify mt-10">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                commodi doloremque temporibus possimus, tenetur excepturi.
                Vitae, aliquam, maiores magnam cupiditate, debitis dicta
                voluptate accusantium in repellendus nam dolor. Cum, quidem!.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi aperiam voluptatibus asperiores facere ab maiores
                assumenda architecto molestias esse numquam laudantium,
                consequuntur quaerat recusandae fuga. Magnam esse debitis quo
                id!
              </p>
            </div>

            <div className="md:px-10 px-5">
              <form className="bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0">
                <div className="flex justify-center items-center my-10">
                  <label htmlFor="editUserProfile">
                    <input
                      onChange={(e) => handleFile(e)}
                      type="file"
                      id="editUserProfile"
                      style={{ display: "none" }}
                    ></input>
                   {Existingprofile == "" ? <img
                      src={
                        preview
                          ? preview
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_5z67_9w_D7bU4LdQJy2ponyHEparph_07p0LK3j4askGjPAX-rG9DFwfqEK1IT3Q6o&usqp=CAU"
                      }
                      style={{
                        width: "170px",
                        height: "150px",
                        borderRadius: "50%",
                      }}
                      alt="profile Img"
                    />:
                    <img
                      src={
                        preview
                          ? preview
                          : `${SERVERURL}/imgUploads/${Existingprofile}`
                      }
                      style={{
                        width: "170px",
                        height: "150px",
                        borderRadius: "50%",
                      }}
                      alt="profile Img"
                    />
                  }
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Username</label>
                  <input
                    onChange={(e) =>
                      setadminDetails({
                        ...adminDetails,
                        username: e.target.value,
                      })
                    }
                    value={adminDetails?.username}
                    type="text"
                    placeholder="Username"
                    className="bg-white w-full p-2"
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <input
                    onChange={(e) =>
                      setadminDetails({
                        ...adminDetails,
                        password: e.target.value,
                      })
                    }
                    value={adminDetails?.password}
                    type="text"
                    placeholder="password"
                    className="bg-white w-full p-2"
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    onChange={(e) => {
                      setadminDetails({
                        ...adminDetails,
                        confirmpassword: e.target.value,
                      });
                    }}
                    value={adminDetails?.confirmpassword}
                    type="text"
                    placeholder="Confirm Password"
                    className="bg-white w-full p-2"
                  ></input>
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white"
                  >
                    Reset
                  </button>

                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminSettings;
