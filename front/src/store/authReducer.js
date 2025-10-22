import Cookies from "js-cookie";


function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) {
        str += '=';
    }
    return atob(str);
    }
    
// Later you can get it
let userValue = null
let userValueDetail = null 
let userValueDetailLogin = null

const rawCookie = Cookies.get("otp-data");
if(rawCookie && rawCookie !== undefined && rawCookie !=='undefined'){
const parsedData = rawCookie ? JSON.parse(decodeURIComponent(rawCookie)) : null;

//console.log("Parsed cookie:", parsedData);
userValue = parsedData

}
const rawCookieAuth = Cookies.get("authTokenUser");
if(rawCookieAuth && rawCookieAuth !== undefined && rawCookieAuth !=='undefined'){
const parsedDataAuth = rawCookieAuth ? JSON.parse(decodeURIComponent(rawCookieAuth)) : null;

//console.log("Parsed cookie auth:", parsedDataAuth.split(".")[1]);
userValueDetail = JSON.parse(base64UrlDecode(parsedDataAuth?.split(".")[1]));
//console.log(adminDetail)


}

const rawCookieAuthLogin = Cookies.get("authTokenUserLogin");
if(rawCookieAuthLogin && rawCookieAuthLogin !== undefined && rawCookieAuthLogin !=='undefined'){
const parsedDataAuthLogin = rawCookieAuthLogin ? JSON.parse(decodeURIComponent(rawCookieAuthLogin)) : null;

//console.log("Parsed cookie auth:", parsedDataAuth.split(".")[1]);
userValueDetailLogin = JSON.parse(base64UrlDecode(parsedDataAuthLogin?.split(".")[1]));
//console.log(adminDetail)


}




const initialState = {
  loading: false,
  user: userValue,
  userDetail:userValueDetail,
  userDetailLogin:userValueDetailLogin,
  otpSent: false,
  isVerified: false,
  email: null,
  error: null,
};

function authReducer(state = initialState, action) {
  
  
  
    switch (action.type) {
    case "REGISTER_REQUEST":
    case "VERIFY_OTP_REQUEST":
      return { ...state, loading: true, error: null };

    case "REGISTER_SUCCESS":
      return { ...state, loading: false, otpSent: true, user: action.payload };

    case "REGISTER_FAILURE":
      return { ...state, loading: false, error: action.error };

    case "VERIFY_OTP_SUCCESS":
      return { ...state, loading: false, isVerified: true, userDetail: action.payload };

    case "VERIFY_OTP_FAILURE":
      return { ...state, loading: false, error: action.error };
    case "REGISTER_SUCCESS_LOGIN":
      return { ...state, loading: false, otpSent: true, userDetailLogin: action.payload };
      
    case "LOGOUT_SUCCESS":
      return { ...state, loading: false,  user: action.payload };

    case "LOGOUT_FAILURE":
      return { ...state, loading: false, error: action.error };  

    default:
      return state;
  }
}

export default authReducer;
