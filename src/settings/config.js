export const domain = 'http://movie0706.cybersoft.edu.vn/api';
export const groupID = 'GP05';
export const userLogin = 'userLogin';
export const accessToken =() =>{
   const getAccessToken = localStorage.getItem('userlogin')
    const token = getAccessToken.accessToken;
   return token;
}