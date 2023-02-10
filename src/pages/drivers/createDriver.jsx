import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { Card, CardBody, Button } from 'reactstrap'

function CreateDriver() {
    const navigate = useNavigate()
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = (d)=>{
        const data = {
            name:d.name, 
            age:d.age,
            phone_number:d.tel
        } 

        axios.post("http://127.0.0.1:8000/drivers", data)
        .then((res)=>{
            if(res.status == 201){
                console.log("Success")
                navigate("/")
            }
            else{
                console.log("Something Happened")
            }
        })
        .catch((e)=>console.log(e))
    }


  return (
    <div className='container'>
        <div className='addFleet'>
            <Card>
                <CardBody>
                <h2> Add Driver</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        {...register("name", {required:true, maxLength:20})}
                        name = "name"
                    />
                    <br/>
                    <br/>
                    <label>Age: </label>
                    <input 
                        type="text" 
                        name="age"
                        {...register("age", {required:true, maxLength:20})}
                    />
                    <br/>
                    <br/>
                    <label>Tel:</label>
                    <input
                        type="number"
                        name='tel'
                        {...register("tel", {required:true, maxLength:20})}
                    />
                    <br />
                    <br />
                    <Button type="submit">Create</Button>
                </form>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}

export default CreateDriver


