import React, { useState } from 'react'

const ProfileEditor = () => {
    const [profile , setProfile] = useState({
        name :"Rajitha",
        city : "Kitchener",
        job : "React developer"
    });
  return (
    <div>
      <h4>Prifile Editor</h4>
      <input type="text" placeholder='Enter name' value={profile.name} onChange={(e)=> setProfile({...profile,name: e.target.value})} />
      <input type="text" placeholder='Enter city' value={profile.city} onChange={(e)=> setProfile({...profile,city:e.target.value})} />
      <input type="text" placeholder='Enter job' value={profile.job} onChange={(e)=> setProfile({...profile,  job:e.target.value})}/>

      <div>
        <p>Name : {profile.name}</p>
        <p>City : {profile.city}</p>
        <p>Job : {profile.job}</p>
      </div>

    </div>
  )
}

export default ProfileEditor
