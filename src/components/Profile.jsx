import React from 'react'
import EmployeeID from './EmployeeID'
import profile from '../assets/profile.jpg'

const Profile = ({Heading,name,image,job,btntext,isOnline}) =>{
     const user =[
      {
        img: profile,
        name:'MANIKANTA',
        role:'creative manager',
        idno :98276656,
        blood:'A-',
        phone:1234578654,
        email:"urmail@gmail.com"
     },
     {
        img: profile,
        name:'MANIKANTA',
        role:'creative manager',
        idno :98276656,
        blood:'A-',
        phone:1234578654,
        email:"urmail@gmail.com"
     },
     {
        img: profile,
        name:'MANIKANTA',
        role:'creative manager',
        idno :98276656,
        blood:'A-',
        phone:1234578654,
        email:"urmail@gmail.com"
     }
    
    
    ]
  return (
  <>
    <div className="container mt-3">
  <h2>{Heading}</h2>
  
  <div className="card" style={{width:"400px"}} >
    <img className="card-img-top" src={image} alt="Card image" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{job}</p>
      <a href="#" className="btn btn-primary">{btntext}</a>
      <span className={`badge ${isOnline ? "bg-success" : "bg-secondary"}`}>{isOnline ? "online" : "offline"}{`my name is ${name}`}</span>
    </div>
  </div>
</div>
  
  <EmployeeID user={user}/>
</>
  )
}


export default Profile
