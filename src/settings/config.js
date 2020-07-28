export const domain = 'http://movie0706.cybersoft.edu.vn/api';
export const groupID = 'GP05';
export const userLogin = 'userLogin';
// export const accessToken = JSON.parse(localStorage.getItem(userLogin)).accessToken || "";
let token = ''
if (localStorage.getItem(userLogin)) {
token = JSON.parse(localStorage.getItem(userLogin)).accessToken
}
export const accessToken = token;