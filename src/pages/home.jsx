import React,{useState, useEffect} from 'react';
import HomeCard from '../components/homeCard';
import { Table, Card, CardBody, Button} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [fleetIndx, setFleetIndx] = useState(0)
    const [fleet, setFleet] = useState([]);
    const [fleetnum, setFleetnum] = useState(0);
    const [cars, setCars] = useState([]);
    const [carsnum, setCarsnum] = useState(0);
    const [drivers, setDrivers] = useState([]);
    const [drivernum, setDrivernum] =  useState(0);
    const [driveradd, setDriveradd] = useState("");

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/')
        .then((res)=>{
            setFleetnum(res.data.length);

            setFleet(res.data);
        })
        .catch((e)=>{console.log(e)})

        axios.get('http://127.0.0.1:8000/drivers')
        .then((res)=>{
            setDrivers(res.data)
            setDrivernum(res.data.length)
        })
        .catch((e)=>{
            console.log(e)
        })


    }, [])

  return (
    <div className='container' style={{height:"100%"}}>
        <div className='homecard'>
            <HomeCard 
                title="Fleet"
                desc1 = "Fleet Total" 
                desc1_number={fleetnum}
                bgcolor = "#5EB562"
                color="white"
            />
            <HomeCard
                title="Drivers"
                desc1 = "Driver Total" 
                desc1_number={drivernum}
                bgcolor = "#3791EE"
                color="white"
            />
        </div>

        <div className='fleetDiv'>
            <div className='fleetTitle'>
                <h3 style={{fontWeight:"bold"}}>Fleet.</h3>
                <Button color="success" >
                    <Link to="add-car" style={{color:"white"}}>+ Add Fleet</Link>
                </Button>
            </div>
            

            <Card>
                <CardBody>
                    <Table>
                        <thead>
                            <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Plate Number
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fleet.map((f)=>{
                                    return(
                                    <tr>
                                        <td>
                                            {f.manufacturer}
                                        </td>
                                        <td>
                                            {f.plate_number}
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>

        <div className='driverDiv'>
            <div className='fleetTitle'>
                <h3 style={{fontWeight:"bold"}}>Drivers.</h3>
                <Button color="success" >
                    <Link to="add-driver" style={{color:"white"}}>+ Add Driver</Link>
                </Button>                
            </div>
            
            <Card>
                <CardBody>
                    <Table>
                        <thead>
                            <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                contact
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                drivers.map((d)=>{
                                    return(
                                    <tr>
                                        <td>{d.name}</td>
                                        <td>{d.phone_number}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}

export default Home