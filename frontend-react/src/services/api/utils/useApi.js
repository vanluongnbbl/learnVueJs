import axios from 'axios';

export const requestWithToken = (request) => {
    axios.interceptors.request.use(
        function () {
          const token = localStorage.getItem("token");
      
          // Đính token vào header mới
          const newHeaders = {
            ...request.headers,
            Authorization: token,
          };
      
          // Đính header mới vào lại request trước khi được gửi đi
          request = {
            ...request,
            headers: newHeaders,
          };
      
          return request;
        },
        function (error) {
          // Xử lý lỗi
          return Promise.reject(error);
        },
    );
}