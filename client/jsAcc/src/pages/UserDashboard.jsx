import Footer from '../component/Footer'
import LogNavbar from '../component/LogNavbar'
import { ava1, ava2, ava3, ava4 } from '../assets/index.js'
import { useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai'
import axios from 'axios'
import { Link as LinkRoute, useLocation, useNavigate } from 'react-router-dom'

const UserDashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user')); 
  const avatar = [ ava1, ava2, ava3, ava4 ]


  useEffect(() => {
    // Randomly pick an avatar
    const randomAvatar = avatar[Math.floor(Math.random() * avatar.length)];

    // Add the random avatar to the user object
    user.avatar = randomAvatar;

    // Update the user object in localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }, []);

  const handleLogout = async()=>{
    const res = await axios.get("http://localhost:8080/api/user/logout");
    console.log(res)
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/welcome')
    return res;
  }

  return (
    <>
        <LogNavbar />
            <div className="userDashboard_container">
              <div className="usercard">
                <div className="img_user">
                  <img className="imge_user" src={user.avatar} alt={user.name} />
                </div>
                <div className="logout" onClick={handleLogout}>
                    <AiOutlineLogout className="logout_btn"/>
                </div>
                <div className="name_user">{user.name}</div>
                <div className="email_user">{user.email}</div>
              </div>
            </div>
        <Footer />
    </>
  )
}

export default UserDashboard




// {
//   "name": "Priyansh Sharma",
//   "email": "piyuindia4@gmail.com",
//   "password": "$2a$10$y7l2ValL25VCC8t2j9Osn.PmLJy.y6MJoux4N1xHowZZTUWZ0JjIK",
//   "_id": "647b9da8dde2036ed6889592",
//   "createdAt": "2023-06-03T20:08:08.437Z",
//   "updatedAt": "2023-06-03T20:08:08.437Z",
//   "__v": 0,
//   "avatar": "/src/assets/Cute and adorable cartoon Tom Holland baby.jpg"
// }