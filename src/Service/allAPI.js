import CommonAPI from "./CommonAPI"
import SERVERURL from "./ServerURL"

/// Register
export const registerAPI= async (reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/register`,reqBody)
}
/// Login
export const LoginAPI= async (reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/login`,reqBody)
}
//google login
export const googleLoginAPI =async (reqBody)=>{
    return await CommonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}

//get home book
export const getHomeBookAPI =async()=>{
    return await CommonAPI("GET",`${SERVERURL}/home-books`)
}
//user------------------------------

//add-book
export const addBookAPI =async(reqBody,reqHeader)=>{
    return await CommonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}
//get all books
 export const getAllBooksAPI =async (searchKey,reqHeader)=>{
     return await CommonAPI("GET",`${SERVERURL}/all-books?search=${searchKey}`,{},reqHeader)
 }

 //get selected books
 export const getABookAPI =async(id,reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/view-books/${id}`,{},reqHeader)
 }
 // get user added books
 export const getUserBookAPI= async(reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/user-books`,{},reqHeader)
 }
 //delete 
 export const deleteUserAddedBookAPI=async(id)=>{
    return await CommonAPI("DELETE",`${SERVERURL}/delete-book/${id}`)
 }
 //Get Own book
 export const GetPurchaseHistoryAPI=async(reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/own-books`,{},reqHeader)
 }
 //update user profile
 export const updateUserProfileAPI = async (reqBody, reqHeader) => {
  return await CommonAPI("PUT",`${SERVERURL}/update-user-profile`,reqBody,reqHeader);
};
// admin
//get all books
export const getAllBooksAdminAPI =async()=>{
    return await CommonAPI("GET",`${SERVERURL}/get-allAdminBooks`)
}
//approve book
export const approveBookStatusAPI=async(id)=>{
    return await CommonAPI("PUT",`${SERVERURL}/update-book/${id}`)
}
//get all users
export const getUsersInAdminAPI=async(reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/allUsers-inAdmin`,{},reqHeader)
}
//update admin profile
 export const updateAdminProfileAPI = async (reqBody, reqHeader) => {
  return await CommonAPI("PUT",`${SERVERURL}/update-admin-profile`,reqBody,reqHeader);
};

