import './App.css'
import facebooklogo from './assets/facebook-logo.png'
import { IoSearch } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { BsCollectionPlay } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { RiGamepadLine } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import profile from './assets/profile.jpg'
import Profile from './components/Profile';
import EmployeeID from './components/EmployeeID';
import Employees from './components/Employees';
import Arrayfunctionspractice from './components/Arrayfunctionspractice';
import Likebutton from './components/Likebutton';
import Counterexample from './components/Counterexample';
import AgeController from './components/AgeController';
import LightDarkMode from './components/LightDarkMode';
import ShowHideMessage from './components/ShowHideMessage';
import PasswordVisibility from './components/PasswordVisibility';
import OnlineOfflineStatus from './components/OnlineOfflineStatus';
import LiveNameDisplay from './components/LiveNameDisplay';
import CharacterCounter from './components/CharacterCounter';
import LoginForm from './components/LoginForm';
import FormReset from './components/FormReset';
import LikesButton from './components/LikesButton';
import Unfollow from './components/Unfollow';
import PostReactions from './components/PostReactions';
import ProfileEditor from './ProfileEditor';
import AddItems from './AddItems';
import DeleteItems from './DeleteItems';
import Events from './Events';
import FormEvent from './FormEvent';
function App() {
   const user ={
          img: profile,
          name:'ANVESH',
          role:'creative manager',
          idno :98276656,
          blood:'A-',
          phone:1234578654,
          email:"urmail@gmail.com"
  
  
       }

  return (
    <>
      {/* <div className="container-fliud">
      <div className="row navigationbar">
        <div className='col-sm-3'>
          <div className='row left'>
            <div className='col-sm-4'>
              <img src={facebooklogo} alt="xyz" className='logo' />
            </div>
            <div className='col-sm-8'>

              <IoSearch className='icon' />
              <input type="text" className='searchbar'placeholder='search Facebook'/>

            </div>

          </div>
        </div>
        <div className='col-sm-6'>
          <div className='row row-cols-5 center'>
            <div className='col'>
              <GoHomeFill />
            </div>
            <div className='col'>
              <FaUserFriends />
            </div>
            <div className='col'>
              <BsCollectionPlay />
            </div>
            <div className='col'>
              <CiShop />
            </div>
            <div className='col'>
              <RiGamepadLine />
            </div>
          </div>

        </div>
        <div className='col-sm-3'>
          <div className='row right'>
            <div className='col-sm-1'>
              <BsFillGrid3X3GapFill />
            </div>
            <div className='col-sm-1'>
              <FaFacebookMessenger />
            </div>
            <div className='col-sm-1'>
              <FaBell />
            </div>
            <div className='col-sm-3'>
              <img src={profile} alt="" className='profile' />
            </div>
          </div>


        </div>

      </div>
      <div className="row maincontent">

      </div>

    </div>
    */}
      {/* <Profile name="Aarush" job="React developer" Heading="TCS" image={profile} btntext="see profile" isOnline="true" />
      <Profile name="Ashwath" job="Angular developer" Heading="TD" btntext="profile" image={profile} />
      <Profile name="Ashu" job="java developer" btntext="see profile" image={profile} />
      <EmployeeID user={user}/>
      <Employees/>
      <Arrayfunctionspractice/>
      <Likebutton/>
      <Counterexample/>
      <AgeController/>
      <ShowHideMessage/>
      <PasswordVisibility/>
      <OnlineOfflineStatus/>
      <LightDarkMode/>
      <LiveNameDisplay/>
      <CharacterCounter/>
      <LoginForm/>
      <FormReset/>
      <LikesButton/>
      <Unfollow/>
      <PostReactions/>
      <ProfileEditor/>
      <AddItems/>
      <DeleteItems/> */}
      {/* <Events/>
       */}
       <FormEvent/>

    </>
  )

}

export default App

