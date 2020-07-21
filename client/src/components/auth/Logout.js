
import { navigate } from "@reach/router";

const Logout = () => {
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