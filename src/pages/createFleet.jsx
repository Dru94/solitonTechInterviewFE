import React, { useState } from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function CreateFleet() {
    const {register, handleSubmit, errors } = useForm();
    const navigate = useNavigate()

    const onSubmit = (e)=>{
        const regData = {
            name:e.name,
            driver:[]
        }
        regData[driver].push(e.)

        axios.post('http://127.0.0.1:8000/create-fleet', regData)
        .then((res) => {   
 
            if(res.status == 201){
                console.log("Success")
                navigate("/")
            }
            else{
                console.log("something happend")
            }
        })
        .catch((e)=>{console.log()})
    }    


  return (
    <div className='container'>
        <div className='addFleet'>
            <Card>
                <CardBody>
                <h2> Create Fleet</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        {...register("name", {required:true, maxLength:20})}
                        name = "name"
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

export default CreateFleet