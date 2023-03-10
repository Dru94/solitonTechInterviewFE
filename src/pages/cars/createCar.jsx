import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function CreateCar() {

    const {register, handleSubmit } = useForm();
    const [drivers, setDrivers] = useState([]);
    const navigate = useNavigate();

    const onSubmit =(e)=>{
        const data = {
            plate_number:e.plate_number,
            mileage:e.mileage,
            manufacturer:e.manufacturer,
            drivers:[
                "3",
                "2"
            ]
        }

        axios.post("http://127.0.0.1:8000", data)
        .then((res)=>{
            navigate('/')
        })
        .catch((e)=>console.log(e))
    }
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/drivers")
        .then((res)=>{
            if(res.status === 200){
                setDrivers(res.data)
            }
        })
        .catch(e=> console.log(e))
    }, [])

  return (
    <div className='container'>
        <div className='addFleet'>
            <Card>
                <CardBody>
                    <h2>Add To Fleet.</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Number Plate: </label>
                        <input 
                            type="text" 
                            name="plate_number"
                            {...register("plate_number", {required:true})}
                        />
                        <br/>
                        <br/>
                        <label>Mileage: </label>
                        <input
                            type="number" 
                            name="mileage"
                            {...register("mileage", {required:true})}
                        />
                        <br/>
                        <br/>
                        <label>Manufacturer</label>
                        <input
                            type="text" 
                            name="manufacturer"
                            {...register("manufacturer", {required:true})}
                        />
                        <br/>
                        <br/>
                        <label>Select Drivers</label>
                        
                            <select name="drivers" multiple {...register("drivers")}>
                                {
                                    drivers.map((d)=>{
                                        return(
                                            <option value={d.id}>{d.name}</option>
                                        )
                                    })
                                }
                            </select>
                        
                        <Button color="success">Success</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}

export default CreateCar