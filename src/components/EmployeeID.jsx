import React from 'react'
import profile from '../assets/profile.jpg'
import'./EmployeeID.css'
const EmployeeID = ({user}) => {
    // const user={
    //     img: profile,
    //     name:'JOHN SMITH',
    //     role:'creative manager',
    //     idno :98276656,
    //     blood:'A-',
    //     phone:1234578654,
    //     email:"urmail@gmail.com"


    // }
  return (
    <div className='card cardbackground'>
        <img src={user.img} alt="" className='image'/>
        <h3>{user.name}</h3>
        <h6><small>{user.role}</small></h6>
        <p>{user.idno}</p>
        <p> {user.blood}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      
    </div>
  )
}

export default EmployeeID
