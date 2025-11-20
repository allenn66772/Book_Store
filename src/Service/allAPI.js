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