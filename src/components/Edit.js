import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams,useNavigate, Link } from 'react-router-dom';



function Edit() {
  const [id, Setid] = useState("")
  const [name, Setname] = useState("")
  const [age, Setage] = useState(0)
  const [desig, Setdesig] = useState("")
  const [salary, SetSalary] = useState(0)


  const param = useParams()
  // console.log(param.id)
  const location=useNavigate()

  const fetchEmployee = async () => {
    const result = await axios.get("http://localhost:4200/get-employee/" + param.id)
    // console.log(result)
    Setid(result.data.employee.id)
    Setname(result.data.employee.name)
    Setage(result.data.employee.age)
    Setdesig(result.data.employee.desig)
    SetSalary(result.data.employee.salary)
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

  const handleUpdate=async (e)=>{
    e.preventDefault()
    const body={
      id,
      name,
      age,
      desig,
      salary
    }
    console.log(body)
    const result=await axios.post("http://localhost:4200/update-employee",body)
    console.log(result)
    alert(result.data.message)
    location("/")

  }


  return (
    <div>
      <h2 className='mt-5'>Employee Details Update</h2>
      <div className='container mt-5'>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Enter Employee Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} 
            onChange={(e)=>Setname(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Enter Employee's Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={age}
             onChange={(e)=>Setage(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDesig">
            <Form.Label>Enter Employee's Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" value={desig}
             onChange={(e)=>Setdesig(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSalary">
            <Form.Label>Enter Employee's Salary</Form.Label>
            <Form.Control type="number" placeholder="Enter Salary" value={salary}
             onChange={(e)=>SetSalary(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e)=>{handleUpdate(e)}}>
            Submit
          </Button>
          {" "}
          <Link to='/'>
            <Button className='btn btn-danger'>Close</Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default Edit