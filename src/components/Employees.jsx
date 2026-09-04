import React from 'react'

const Employees = () => {
    const employees =[
    {
        id: 101,
        name: "Rajitha",
        job: "Frontend Developer",
        email: "rajitha@gmail.com"
    },
    {
        id: 102,
        name: "Anvesh",
        job: " Phamasist",
        email: "anvesh@gmail.com"
    },
    {
        id: 103,
        name: "Manikanta",
        job: "Angular Developer",
        email: "manikanta@gmail.com"
    },
    {
        id: 104,
        name: "Sneha",
        job: "Data Science",
        email: "sneha@gmail.com"
    },
    {
        id: 104,
        name: "Ravi",
        job: "Data Science",
        email: "sneha@gmail.com"
    }
] 
  return (
    <div>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((item)=>
            
            (
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>{item.email}</td>
                </tr>

            )
            )}
        </tbody>


      </table>
    </div>
  )
}

export default Employees
