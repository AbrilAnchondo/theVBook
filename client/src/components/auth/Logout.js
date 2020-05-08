
import { navigate } from "@reach/router";

const Logout = () => {
  console.log(localStorage);
  if (localStorage.length !== 0) {
  alert('Thanks for visiting!')
  localStorage.clear();
  navigate('/');
  } else {
    navigate('/')
  }
  return null

}

export default Logout