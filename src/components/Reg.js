import axios from 'axios';
import React,{useState,useEffect,} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



function Reg() {

    const [id,Setid]=useState("")
    const [name,Setname]=useState("")
    const [age,Setage]=useState(0)
    const [desig,Setdesig]=useState("")
    const [salary,SetSalary]=useState(0)

    const location=useNavigate()

    // console.log(name)
    useEffect(()=>{
        Setid(uuidv4().slice(0,3))
    },[])

   const handleSubmit=async (e)=>{
        e.preventDefault()
        Setid(uuidv4().slice(0,3))
        
        const body={
            id,
            name,
            age,
            desig,
            salary
        }
        console.log(body)
        const result=await axios.post("http://localhost:4200/add-employee",body)
        console.log(result)
        alert(result.data.message)
        location("/")
    }


    return (
        <div>
            <h2 className='mt-5'>Employee Registration</h2>
            <div className='container mt-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Enter Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" 
                        onChange={(e)=>{Setname(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAge">
                        <Form.Label>Enter Employee's Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age"
                        onChange={(e)=>{Setage(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesig">
                        <Form.Label>Enter Employee's Designation</Form.Label>
                        <Form.Control type="text" placeholder="Enter Designation" 
                        onChange={(e)=>{Setdesig(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSalary">
                        <Form.Label>Enter Employee's Salary</Form.Label>
                        <Form.Control type="number" placeholder="Enter Salary" 
                        onChange={(e)=>{SetSalary(e.target.value)}}/>
                    </Form.Group>

                    <Button onClick={(e)=>{handleSubmit(e)}} variant="primary" type="submit">
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

export default Reg