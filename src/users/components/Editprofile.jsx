import React, { useEffect, useState, useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import SERVERURL from "../../Service/ServerURL";
import { updateUserProfileAPI } from "../../Service/allAPI";
import { toast } from "react-toastify";
import { userprofileUpdateContext } from "../../Context/ContextShare";

function Editprofile() {
  const [offCanvas, setoffCanvas] = useState(false);
  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    bio: "",
    role: "",
    profile: "",
  });

  const [preview, setpreview] = useState("");
  const [existingProfile, setexistingProfile] = useState("");
  const [token, setToken] = useState("");

  // Correct useContext
  const { setuserProfileUpdatestatus } = useContext(userprofileUpdateContext);

  const handleImageUpload = (e) => {
    setuserDetails({ ...userDetails, profile: e.target.files[0] });
    setpreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleupdateuser = async () => {
    const { username, password, confirmPassword, bio, role } = userDetails;

    if (!username || !password || !confirmPassword || !bio || !role) {
      return toast.warning("Fill all fields completely");
    }

    if (password !== confirmPassword) {
      return toast.warning("Password mismatch");
    }

    const reqHeader = { Authorization: `Bearer ${token}` };

    let reqBody;

    if (preview) {
      reqBody = new FormData();
      for (let key in userDetails) reqBody.append(key, userDetails[key]);
    } else {
      reqBody = {
        username,
        password,
        bio,
        role,
        profile: existingProfile,
      };
    }

    const result = await updateUserProfileAPI(reqBody, reqHeader);

    if (result.status === 200) {
      toast.success("Profile Updated Successfully");
      sessionStorage.setItem("existingUser", JSON.stringify(result.data));

      setuserProfileUpdatestatus((prev) => !prev);
      setoffCanvas(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      const user = JSON.parse(sessionStorage.getItem("existingUser"));

      setuserDetails({
        username: user.username,
        password: user.password,
        confirmPassword: user.password,
        bio: user.bio,
        role: user.role,
      });

      setexistingProfile(user.profile);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setoffCanvas(true)}
        className="flex px-4 py-3 font-bold border hover:bg-blue-600 hover:text-white border-blue-600 text-blue-800"
      >
        <FaRegEdit className="mt-1 me-2" /> Edit
      </button>

      {offCanvas && (
        <div className="">
          <div
            onClick={() => setoffCanvas(false)}
            className="w-full h-full fixed inset-0 bg-gray-600/75"
          ></div>

          <div className="h-full bg-white w-90 z-50 fixed top-0 left-0 p-4">
            <h1 className="text-2xl font-bold">Edit User Profile</h1>

            <div className="flex justify-center items-center flex-col my-4">
              <label htmlFor="profilePic">
                <input
                  onChange={handleImageUpload}
                  type="file"
                  id="profilePic"
                  hidden
                />

                <img
                  className="rounded-full"
                  src={
                    preview
                      ? preview
                      : existingProfile
                      ? `${SERVERURL}/imgUploads/${existingProfile}`
                      : "https://static.vecteezy.com/system/resources/previews/032/176/197/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
                  }
                  style={{ height: "150px", width: "150px" }}
                  alt=""
                />
              </label>
            </div>

            <div className="space-y-4 px-2">
              <input
                value={userDetails.username}
                onChange={(e) =>
                  setuserDetails({ ...userDetails, username: e.target.value })
                }
                placeholder="Username"
                className="w-full border p-2 rounded"
              />

              <input
                value={userDetails.password}
                onChange={(e) =>
                  setuserDetails({ ...userDetails, password: e.target.value })
                }
                placeholder="Password"
                className="w-full border p-2 rounded"
              />

              <input
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setuserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm Password"
                className="w-full border p-2 rounded"
              />

              <textarea
                value={userDetails.bio}
                onChange={(e) =>
                  setuserDetails({ ...userDetails, bio: e.target.value })
                }
                placeholder="Bio"
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4 px-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setoffCanvas(false)}
              >
                Cancel
              </button>

              <button
                onClick={handleupdateuser}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Editprofile;
