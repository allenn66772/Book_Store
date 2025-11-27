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
 export const getAllBooksAPI =async (reqHeader)=>{
    
    return await CommonAPI("GET",`${SERVERURL}/all-books`,{},reqHeader)
 }

 //get selected books
 export const getABookAPI =async(id,reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/view-books/${id}`,{},reqHeader)
 }