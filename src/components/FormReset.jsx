import React, { useState } from 'react'

const FormReset = () => {
    const [form, setForm] = useState({name: "",email : "", city: ""});

  return (
    <div>
        <h4>Form Reset</h4>
        <div>
            <label> Name</label>
            <input type="text" placeholder='Enter Name' value={form.name} onChange={(form)=>setForm({...form,name:form.target.value})} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" placeholder='Enter email' value={form.email} onChange={(form)=>setForm({...form,email:form.target.value})} />
        </div>
        <div>
            <label>City</label>
            <input type="text" placeholder='Enter City' value={form.city} onChange={(form)=>setForm({...form,city: form.target.value})} />
        </div>
      <button onClick={()=>setForm({...form,name:"",email:"",city:""})}>Reset</button>
      

    </div>
  )
}

export default FormReset
