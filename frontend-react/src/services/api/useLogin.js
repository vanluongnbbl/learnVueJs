import axios from "axios";
import { baseURL } from "./utils/base";
import { useNavigate } from "react-router-dom";

const useLogin = () => {  
    const navigate = useNavigate();  
    
    const loginApi = async (info) => {
        await axios.post(`${baseURL}/user/login`, info).then((res) => {
            if (res.data) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('me', {
                    email: res.data.email
                })
                axios.defaults.headers.common = {
                    'Authorization': `Bearer ${res.data.token}`
                }

                navigate('/');
            }
        })
          .catch(error => {
            console.log(error);
        });
    }

    return {
        loginApi
    }
}

export default useLogin