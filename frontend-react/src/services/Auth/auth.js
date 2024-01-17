import { useContext, createContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../api/utils/base";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const tokenRef = useRef(localStorage.getItem("token"))
const navigate = useNavigate();

useEffect(() => {
    axios.defaults.headers.common = {
        'Authorization': `Bearer ${tokenRef.current}`
    }
}, [tokenRef.current])

const loginAction = async (data) => {
    await axios.post(`${baseURL}/user/login`, data).then((res) => {
        if (res.data) {
            localStorage.setItem('token', res.data.token)
            setUser(res.data.user);
            tokenRef.current = res.data.token;
            navigate('/')
        }
    })
      .catch(error => {
        console.log(error);
    })
}

const logOutAction = async () => {
    await axios.post(`${baseURL}/user/logout`).then((res) => {
        console.log('res', res)
        if (res) {
            setUser(null);
            localStorage.removeItem('token')
            navigate('/login');
            tokenRef.current = "";
        }
    })
      .catch(error => {
        console.log(error);
    });
}

  return <AuthContext.Provider value={{ token: tokenRef.current, user, loginAction, logOutAction }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};