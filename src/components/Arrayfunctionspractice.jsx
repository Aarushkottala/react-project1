import React from 'react'

const Arrayfunctionspractice = () => {
    const employees = [ 
     {   
        id: 1,   
        name: "Sneha",  
        age: 30,   
        department: "IT",    
        salary: 70000,    
        city: "Toronto"  }, 
    {   
        id: 2,  
        name: "Mani",  
        age: 31,   
        department: "Finance",  
        salary: 65000,    
        city: "Toronto"  }, 
    {    
        id: 3,    
        name: "John",   
        age: 28,    
        department: "HR",  
        salary: 55000,   
        city: "Vancouver"  },  
    {   
        id: 4,  
        name: "Priya",  
        age: 27,  
        department: "IT",    
        salary: 68000,  
        city: "Calgary"  } ]; 

        const result = employees.map((employee)=>{
            return{
                name:employee.name,
                department:employee.department,
                city: employee.city
            }
        }

        );
        
        const torontoEmployees = employees.filter((employee)=> employee.city === "Toronto");

        const itEmployees = employees.filter((employee)=> employee.department === "IT");

        const highSalary = employees.filter((employee)=>employee.salary>60000);

        const employeeWithId = employees.filter((employee)=> employee.id===3);

        const updatedEmployees = employees.map((employee)=>{
          return{
            ...employee,
            salary : employee.salary+5000
          };
        });

        const totalSalary = employees.reduce((total,employee)=>{
        return total= total+employee.salary
        },0);


 return (
    <div>
        <h2>Employees</h2>
      {
        result.map((employee)=>{
            return(
            <div>
                <p>Name:{employee.name}</p>
                <p>Department:{employee.department}</p>
                <p>City:{employee.city}</p>
            </div>
        )})
      }
      <h2> Toronto Employees</h2>

       {torontoEmployees.map((employee) => (
        <div>
          <p>Name: {employee.name}</p>
          <p>Department: {employee.department}</p>
          <p>Salary: {employee.salary}</p>
          <p>City: {employee.city}</p>
        
        </div>
      ))}
      <h2>IT Employees</h2>

      {itEmployees.map((employee) => (
        <div>
          <p>Name: {employee.name}</p>
          <p>Department: {employee.department}</p>
          <p>Salary: {employee.salary}</p>
          <p>City: {employee.city}</p>
          
        </div>
      ))}
      <h2>High Salary Employees</h2>
      { highSalary.map((employee)=>(
          <div>
            <p>Name: {employee.name}</p>
            <p>Department:{employee.department}</p>
            <p>Salary:{employee.salary}</p>
            <p>City:{employee.city}</p>
            <p>Age:{employee.age}</p>
          </div>

        ))}

        <h2>Employee ID  is 3</h2>
        {
          employeeWithId.map((employee)=>{
            return(
              <div>
               <p>Id : {employee.id}</p>
               <p>Name: {employee.name}</p>
               <p>Department: {employee.department}</p>
               <p>Salary: {employee.salary}</p>
               <p>City: {employee.city}</p>
        
              </div>

            )})
        }

        <h2>Updated employees</h2>
        {
          updatedEmployees.map((employee)=>{
            return(
              <div>
               <p>Id : {employee.id}</p>
               <p>Name: {employee.name}</p>
               <p>Department: {employee.department}</p>
               <p>Salary: {employee.salary}</p>
               <p>City: {employee.city}</p>
        
              </div>

            )
          })
        }
        <h2>Total salary</h2>
        <p>{totalSalary}</p>



    </div>
  )
}

export default Arrayfunctionspractice
