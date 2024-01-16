import axios from "axios";
import { baseURL } from "./utils/base";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();  

    const logoutApi = async () => {
        await axios.post(`${baseURL}/user/logout`).then((res) => {
            if (res.data) {
                localStorage.removeItem('token')
                navigate('/login');
            }
        })
          .catch(error => {
            console.log(error);
        });
    }

    return { logoutApi }
}

export default useLogout