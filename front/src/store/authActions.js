import Cookies from "js-cookie";

export const registerUser = (data) => async (dispatch) => {
    
    if(data.status){
        
        /* Cookies.set("otp-data", JSON.stringify(data.data), {
            path: "/",
            expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min expiry
        });
        */

        Cookies.set("authTokenUser", JSON.stringify(data.token), {
            path: "/",
            expires: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
        });

        

        dispatch({ type: "REGISTER_SUCCESS", payload: data.data });
    }
    
    /* dispatch({ type: "REGISTER_REQUEST" });
    try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include"

        });

        const data = await res.json();
        if(data.status){
        Cookies.set("otp-data", JSON.stringify(data.data), {
            path: "/",
            expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min expiry
        });

        /* Cookies.set(
          "otp-data",
          data.data,
          { path: "/", expires: 10 / (24 * 60)} 
        );
        *

        dispatch({ type: "REGISTER_SUCCESS", payload: data.data });
    } else {
        dispatch({ type: "REGISTER_FAILURE", error: data.message });
    }
    } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", error: err.response?.data?.message || err.message });
    }
        */
};
export const registerUserLogin = (data) => async (dispatch) => {
    
    if(data.status){
        
        /* Cookies.set("otp-data", JSON.stringify(data.data), {
            path: "/",
            expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min expiry
        });
        */

        Cookies.set("authTokenUserLogin", JSON.stringify(data.token), {
            path: "/",
            expires: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
        });

        

        dispatch({ type: "REGISTER_SUCCESS_LOGIN", payload: data.data });
    }
    
    /* dispatch({ type: "REGISTER_REQUEST" });
    try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include"

        });

        const data = await res.json();
        if(data.status){
        Cookies.set("otp-data", JSON.stringify(data.data), {
            path: "/",
            expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min expiry
        });

        /* Cookies.set(
          "otp-data",
          data.data,
          { path: "/", expires: 10 / (24 * 60)} 
        );
        *

        dispatch({ type: "REGISTER_SUCCESS", payload: data.data });
    } else {
        dispatch({ type: "REGISTER_FAILURE", error: data.message });
    }
    } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", error: err.response?.data?.message || err.message });
    }
        */
};

export const verifyOtp = (data) => async (dispatch) => {
    //dispatch({ type: "VERIFY_OTP_REQUEST" });
    try {

        Cookies.set("authTokenUser", JSON.stringify(data.token), {
            path: "/",
            expires: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
        });

        dispatch({ type: "VERIFY_OTP_SUCCESS", payload: data.user });
    } catch (err) {
        dispatch({ type: "VERIFY_OTP_FAILURE", error: err.response?.data?.message || err.message });
    }
};

export const userLogout = () => async (dispatch) => {
    //dispatch({ type: "VERIFY_OTP_REQUEST" });
    try {

        Cookies.remove("authTokenUserLogin");

        dispatch({ type: "LOGOUT_SUCCESS", payload: '' });
    } catch (err) {
        dispatch({ type: "LOGOUT_FAILURE", error: err.response?.data?.message || err.message });
    }
};
