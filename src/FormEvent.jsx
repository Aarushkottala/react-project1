import React, { useState } from 'react'

const FormEvent = () => {
    const [firstname , setFirstName] = useState("");
    const [lastname , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");


    function InputFirstName(e){
        setFirstName(e);

    }
    function InputLastName(e){
        setLastName(e);

    }
    function InputEmail(e){
        setEmail(e);
    }
    function InputPassword(e){
        setPassword(e);
    }
    function sendData(event){
        event.preventDefault();
        const data = {
            Firstname:firstname,
            Lastname:lastname,
            Email:email,
            Password:password
        }
        console.log(data ,"Iam hitting");
        console.log(5>7>8);
    }

  return (
    <div className='container mt-3'>
        <form className= "form-control" onSubmit={sendData}>
       <label>First Name:</label>
      <input type="text" placeholder='Enter your First name' onChange={(e)=>InputFirstName(e.target.value)}/><br />
      <label>Last Name:</label>
      <input type="text" placeholder='Enter your Last name' onChange={(e)=>InputLastName(e.target.value)} /><br />
      <label> Email:</label>
      <input type="email" placeholder='Enter your Email Id' onChange={(e)=>InputEmail(e.target.value)} /><br />
      <label>Password:</label>
      <input type="password" placeholder='Enter password' onChange={(e)=>InputPassword(e.target.value)}/><br />
      <button className='btn btn-primary'>submit</button><br /><br />
      </form>

      <p>My First Nmae is:{firstname}</p>
      <p>My Last Name is : {lastname}</p>
      <p>Email Id is: {email}</p>
      <p>Password is :{password}</p>

      <form onSubmit={sendData} >
        <div class="mb-3 mt-3">
            <label for=" firstname" class="form-label">FirstName:</label>
            <input type="text" class="form-control"  placeholder="Enter firstname" onChange={(e)=>InputFirstName(e.target.value)}/>
        </div>
        <div class="mb-3 mt-3">
            <label for="lastname" class="form-label">LastName:</label>
            <input type="text" class="form-control"  placeholder="Enter lastname"  onChange={(e)=>InputLastName(e.target.value)}/>
        </div>
        <div class="mb-3 mt-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={(e)=>InputEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={(e)=>InputPassword(e.target.value)}/>
        </div>
        <div class="form-check mb-3">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember"/> Remember me
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>

      
    </div>
  )
}

export default FormEvent
