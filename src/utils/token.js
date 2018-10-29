import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';


export const setToken = token => Cookies.set('lmsToken', token, { expires: 4 });

export const getToken = () => Cookies.get('lmsToken');

export const clearToken = () => Cookies.remove('lmsToken');

export const decodeToken = () => {
  const token = document.cookie.split('lmsToken=');
  if (token.length === 2) {
    const jwtToken = token[1];
    const decodedToken = jwtDecode(jwtToken);
    const userInfo = decodedToken.UserInfo;
    return userInfo;
  }
  return 'unauthorised';
};
