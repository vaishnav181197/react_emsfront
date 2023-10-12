import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';






function Admin() {

    const [allemp, Setallemp] = useState([])


    const fetchData = async () => {
        const result = await axios.get("http://localhost:4200/all-employees")
        console.log(result.data.employee)
        Setallemp(result.data.employee)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        const result = await axios.delete("http://localhost:4200/remove-employee/" + id)
        alert(result.data.message)
        fetchData()
    }

    return (
        <div className='container-fluid mt-5'>
            <h1><i class="fa-solid fa-user-group"></i>Employee Management System{"    "}
                <Link to='/add'><a href="" className='btn btn-success mr-5'>Add Employee <i class="fa-solid fa-user-plus"></i></a></Link>
            </h1>

            <div className='mt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>
            <div className='mt-3'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allemp?.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.desig}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <Link to={'/edit/'+item.id}>
                                            <button className='btn btn-warning'><i class="fa-solid fa-pen"></i></button>{" "}
                                        </Link>
                                        <button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default Admin