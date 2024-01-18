import axios from "axios";
import { baseURL } from "./utils/base";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

const useSignUp = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const tokenRef = useRef(null)
    const navigate = useNavigate();  
    
    const signUpApi = async (data) => {
        await axios.post(`${baseURL}/user`, data).then((res) => {
            if (res.data) {
                localStorage.setItem('token', res.data.token)
                tokenRef.current = res.data.token
                navigate('/');
            }
        })
          .catch(error => {
            console.log(error);
            setErrorMessage(error.response.data)
        });

        axios.defaults.headers.common = {
            'Authorization': `Bearer ${tokenRef.current}`
        }
    }

    console.log('errorMessage', errorMessage);
    return {
        errorMessage,
        signUpApi
    }
}

export default useSignUp